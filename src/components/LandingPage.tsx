import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, store } from '../store';
import { setKeywords, setCategory, sourceFormat } from '../store/search';
import { searchKeywords } from '../lib/searchKeywords';
import { TopBar } from './TopBar';
import { FilterUrlSync } from './FilterUrlSync';
import { filtersToQueryString } from '../lib/filterQuery';
import { FilterSidebar, formatCategoryTitle } from './FilterSidebar';
import { SearchBar } from './SearchBar';
import { CategoryHeading } from './CategoryHeading';
import IconGrid from './IconGrid';
import { IconTileModal } from './IconTileModal';
import styles from '../pages/index.module.scss';

import { Category, Icon } from '../lib/icons';

export interface ModalIcon {
  icon: Icon;
  iconType: string;
}

interface LandingPageProps {
  categories: Category[];
  icon?: Icon;
  style?: 'outline' | 'filled';
}

export default function LandingPage({
  icon,
  style,
  categories
}: LandingPageProps) {
  const dispatch = useDispatch();
  const searchKeywordsValue = useSelector(
    (state: RootState) => state.search.keywords
  );
  const searchStyleValue = useSelector(
    (state: RootState) => state.search.style
  );
  const searchFormatValue = useSelector(
    (state: RootState) => state.search.format
  );
  const searchCategoryValue = useSelector(
    (state: RootState) => state.search.category
  );
  // only whether a color is set: the color itself is applied through the
  // --icon-color CSS variable, so changing it doesn't re-render every icon
  const iconsColored = useSelector(
    (state: RootState) => state.search.color !== ''
  );

  const [modalIcon, setModalIcon] = useState<ModalIcon>(undefined);
  // the filters drawer on mobile, opened from the search bar
  const [filtersOpen, setFiltersOpen] = useState(false);

  const router = useRouter();

  useMemo(() => {
    if (icon && style) {
      setModalIcon({
        icon,
        iconType: style
      });
    } else {
      setModalIcon(undefined);
    }
  }, [icon, style]);

  // if the path changes (by using the back/forward buttons), open or close the modal based on the path
  useEffect(() => {
    const parts = router.asPath.split('?')[0].split('/');
    if (parts.length === 5) {
      const [, , iconStyle, iconCategory, iconId] = parts;
      const foundIcon = categories
        .flatMap((c) => c.icons)
        .find((i) => i.category === iconCategory && i.id === iconId);

      if (foundIcon) {
        setModalIcon({ icon: foundIcon, iconType: iconStyle });
      }
    } else {
      setModalIcon(undefined);
    }
  }, [categories, router.asPath]);

  // icons matching the keyword & size filters, before narrowing by category,
  // so the sidebar can show how many results each category would give
  const matchingCategories = useMemo(() => {
    const filteredCategories: Category[] = [];

    categories.forEach((c) => {
      const filteredIcons = c.icons.filter(
        (i) =>
          searchKeywords(
            searchKeywordsValue,
            i.tags.concat([i.title, c.title]).join(', ')
          ) && i.formats.includes(sourceFormat(searchFormatValue))
      );

      filteredCategories.push({ ...c, icons: filteredIcons });
    });

    return filteredCategories;
  }, [searchFormatValue, categories, searchKeywordsValue]);

  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        matchingCategories.map((c) => [c.title, c.icons.length])
      ),
    [matchingCategories]
  );

  const categoriesToRender = matchingCategories.filter(
    (c) =>
      c.icons.length > 0 &&
      (!searchCategoryValue || c.title.toLowerCase() === searchCategoryValue)
  );

  // icons available at the selected size (and matching any search) across all
  // categories: the same number as "All categories" in the sidebar. The search
  // field only shows it as a placeholder while it's empty, when it's simply
  // the number of icons at the current size.
  const allCategoriesCount = matchingCategories.reduce(
    (counter, c) => counter + c.icons.length,
    0
  );

  const flatIcons = categoriesToRender.flatMap((c) => c.icons);
  // if searching by keyword, show all icons without categories and sorted A-Z
  if (searchKeywordsValue) {
    flatIcons.sort((i1, i2) => {
      return i1.title < i2.title ? -1 : i1.title > i2.title ? 1 : 0;
    });
  }

  const hasActiveFilters = Boolean(searchKeywordsValue || searchCategoryValue);

  return (
    <div className={classnames('container', styles.page)}>
      <FilterUrlSync />
      <TopBar />
      <main id="main" className={styles.layout}>
        <FilterSidebar
          categories={categories}
          categoryCounts={categoryCounts}
          resultCount={flatIcons.length}
          filtersOpen={filtersOpen}
          setFiltersOpen={setFiltersOpen}
          intro={
            <div className={styles.intro}>
              {/* on an icon's page, the icon's name (in the modal) is the h1 */}
              {!icon && (
                <h1 className="visually-hidden">
                  Free, open source health icons
                </h1>
              )}
            </div>
          }
        />

        <div id="icon-results" className={styles.results}>
          <SearchBar
            iconCount={allCategoriesCount}
            filtersOpen={filtersOpen}
            onOpenFilters={() => setFiltersOpen(true)}
          />
          {hasActiveFilters && (
            <div className={styles.resultsHeader}>
              {/* only for searches: with just a category picked, its heading
                  below already shows the count */}
              {searchKeywordsValue && (
                <p className={styles.resultsSummary} aria-live="polite">
                  <strong>{flatIcons.length}</strong>{' '}
                  {flatIcons.length === 1 ? 'icon' : 'icons'}
                  {searchKeywordsValue && (
                    <>
                      {' '}
                      for <strong>“{searchKeywordsValue}”</strong>
                    </>
                  )}
                  {searchCategoryValue && (
                    <>
                      {' '}
                      in{' '}
                      <strong>
                        {formatCategoryTitle(searchCategoryValue)}
                      </strong>
                    </>
                  )}
                </p>
              )}
              <button
                type="button"
                className={styles.clearFilters}
                onClick={() => {
                  dispatch(setKeywords(''));
                  dispatch(setCategory(''));
                }}
              >
                Show all icons
              </button>
            </div>
          )}

          {flatIcons.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No icons match your search.</p>
              <p>
                Can’t find what you need?{' '}
                <Link href="/request-icon">Request an icon</Link>
              </p>
            </div>
          ) : searchKeywordsValue ? (
            <IconGrid
              icons={flatIcons}
              setModalIcon={setModalIcon}
              style={searchStyleValue}
              format={searchFormatValue}
              colored={iconsColored}
            />
          ) : (
            categoriesToRender.map((c) => (
              <section key={c.title} className={styles.categorySection}>
                <CategoryHeading count={c.icons.length}>
                  {formatCategoryTitle(c.title)}
                </CategoryHeading>
                <IconGrid
                  icons={c.icons}
                  setModalIcon={setModalIcon}
                  style={searchStyleValue}
                  format={searchFormatValue}
                  colored={iconsColored}
                />
              </section>
            ))
          )}

          <footer className={styles.footer}>
            All icons are open source, licensed under a{' '}
            <a href="/about#license" className={styles.link}>
              Creative Commons CC0 License
            </a>
            . This website is also open source, under an{' '}
            <a href="/about#license" className={styles.link}>
              MIT license
            </a>
            .
          </footer>
        </div>

        {modalIcon && (
          <IconTileModal
            icon={modalIcon.icon}
            iconType={modalIcon.iconType}
            allIcons={flatIcons}
            onClose={() => {
              router.push(
                '/',
                `/${filtersToQueryString(store.getState().search)}`,
                {
                  shallow: true,
                  scroll: false
                }
              );

              setModalIcon(undefined);
            }}
          />
        )}
      </main>
    </div>
  );
}
