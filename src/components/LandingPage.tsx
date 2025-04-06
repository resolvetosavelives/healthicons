import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { RootState } from '../store';
import { setStyle, setKeywords, setFormat, setCategory } from '../store/search';
import { searchKeywords } from '../lib/searchKeywords';
import { TopBar } from './TopBar';
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

  const [modalIcon, setModalIcon] = useState<ModalIcon>(undefined);

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
    const parts = router.asPath.split('/');
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

  const categoriesToRender = useMemo(() => {
    const filteredCategories: Category[] = [];

    categories.forEach((c) => {
      const filteredIcons: Icon[] = [];
      c.icons.forEach((i) => {
        if (
          searchKeywords(
            searchKeywordsValue,
            i.tags.concat([i.title, c.title]).join(', ')
          ) &&
          i.formats.includes(searchFormatValue) &&
          (!searchCategoryValue ||
            c.title.toLowerCase() === searchCategoryValue)
        ) {
          filteredIcons.push(i);
        }
      });

      if (filteredIcons.length > 0) {
        const filteredCategory: Category = structuredClone(c);
        filteredCategory.icons = filteredIcons;
        filteredCategories.push(filteredCategory);
      }
    });

    return filteredCategories;
  }, [searchFormatValue, categories, searchKeywordsValue, searchCategoryValue]);

  const totalIconCount = categories.reduce((counter, c) => {
    return counter + c.icons.length;
  }, 0);

  const flatIcons = categoriesToRender.flatMap((c) => c.icons);
  // if searching by keyword, show all icons without categories and sorted A-Z
  if (searchKeywordsValue) {
    flatIcons.sort((i1, i2) => {
      return i1.title < i2.title ? -1 : i1.title > i2.title ? 1 : 0;
    });
  }

  return (
    <div className="container">
      <TopBar />
      <main id="main">
        <div className={styles.box}>
          <h1 className="mt-2">Free, open source health icons</h1>
          <h3>
            Free for use in your next commercial or personal project.
            <span> </span>
            Editing is ok. Republishing is ok. No need to give credit.
          </h3>
        </div>

        <div className={styles.filterPlacementBox}>
          <div className={styles.filterBox}>
            <div className={styles.searchContainer}>
              <label className={styles.filterInputLabel}>
                <input
                  value={searchKeywordsValue}
                  type="text"
                  className={styles.filterBoxInput}
                  placeholder={`Search ${totalIconCount * 2} icons…`}
                  onChange={(e) => dispatch(setKeywords(e.target.value))}
                />
              </label>
              <select
                className={styles.categorySelect}
                value={searchCategoryValue}
                onChange={(e) => dispatch(setCategory(e.target.value))}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option
                    key={category.title}
                    value={category.title.toLowerCase()}
                  >
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.styleToggleContainer}>
              <button
                className={classnames(styles.styleToggle, {
                  [styles.styleToggleSelected]: searchStyleValue === 'all'
                })}
                onClick={() => dispatch(setStyle('all'))}
              >
                All
              </button>
              <button
                className={classnames(styles.styleToggle, {
                  [styles.styleToggleSelected]: searchStyleValue === 'filled'
                })}
                onClick={() => dispatch(setStyle('filled'))}
              >
                Filled
              </button>
              <button
                className={classnames(styles.styleToggle, {
                  [styles.styleToggleSelected]: searchStyleValue === 'outline'
                })}
                onClick={() => dispatch(setStyle('outline'))}
              >
                Outline
              </button>
            </div>
            <div className={styles.sizeToggleContainer}>
              <button
                className={classnames(styles.styleToggle, {
                  [styles.styleToggleSelected]: searchFormatValue === '48px'
                })}
                onClick={() => dispatch(setFormat('48px'))}
              >
                48px
              </button>
              <button
                className={classnames(styles.styleToggle, {
                  [styles.styleToggleSelected]: searchFormatValue === '24px'
                })}
                onClick={() => dispatch(setFormat('24px'))}
              >
                24px
              </button>
            </div>
          </div>
        </div>
        {searchKeywordsValue ? (
          <IconGrid
            icons={flatIcons}
            setModalIcon={setModalIcon}
            style={searchStyleValue}
            format={searchFormatValue}
          />
        ) : (
          categoriesToRender.map((c, categoryIndex) => (
            <div key={categoryIndex}>
              <CategoryHeading children={c.title} />
              <IconGrid
                icons={c.icons}
                setModalIcon={setModalIcon}
                style={searchStyleValue}
                format={searchFormatValue}
              />
            </div>
          ))
        )}
        {modalIcon && (
          <IconTileModal
            icon={modalIcon.icon}
            iconType={modalIcon.iconType}
            isOpen={modalIcon !== undefined}
            allIcons={flatIcons}
            onClose={() => {
              router.push('/', undefined, {
                shallow: true,
                scroll: false
              });

              setModalIcon(undefined);
            }}
          />
        )}
      </main>
      <footer>
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
  );
}
