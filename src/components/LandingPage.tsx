import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { RootState } from '../store';
import { setStyle, setKeywords } from '../store/search';
import { searchKeywords } from '../lib/searchKeywords';
import { TopBar } from './TopBar';
import { CategoryHeading } from './CategoryHeading';
import { CategoryDropdown } from './CategoryDropdown';
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
  const searchCategoryValue = useSelector(
    (state: RootState) => state.search.category
  );
  const isFiltered = searchKeywordsValue || searchCategoryValue;
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

  const iconsToRender = useMemo(() => {
    if (isFiltered) {
      const filteredIcons: Icon[] = [];
      const filteredCategories = searchCategoryValue
        ? categories.filter((c) => c.title === searchCategoryValue)
        : categories;

      filteredCategories.forEach((c) => {
        c.icons.forEach((i) => {
          if (
            searchKeywords(
              searchKeywordsValue,
              i.tags.concat([i.title, c.title]).join(', ')
            )
          ) {
            filteredIcons.push(i);
          }
        });
      });
      return filteredIcons;
    }
    return [];
  }, [searchKeywordsValue, searchCategoryValue, isFiltered, categories]);

  const totalIconCount = categories.reduce((counter, c) => {
    return counter + c.icons.length;
  }, 0);

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
            <label className={styles.filterInputLabel}>
              <input
                value={searchKeywordsValue}
                type="text"
                className={styles.filterBoxInput}
                placeholder={`Search ${totalIconCount * 2} icons…`}
                onChange={(e) => dispatch(setKeywords(e.target.value))}
              />
            </label>

            <CategoryDropdown categories={categories} />

            <div className={styles.styleToggleContainer}>
              <button
                className={classnames(styles.styleToggle, {
                  [styles.styleToggleSelected]: searchStyleValue === 'all'
                })}
                onClick={() => {
                  dispatch(setStyle('all'));
                }}
              >
                All
              </button>
              <button
                className={classnames(styles.styleToggle, {
                  [styles.styleToggleSelected]: searchStyleValue === 'filled'
                })}
                onClick={() => {
                  dispatch(setStyle('filled'));
                }}
              >
                Filled
              </button>
              <button
                className={classnames(styles.styleToggle, {
                  [styles.styleToggleSelected]: searchStyleValue === 'outline'
                })}
                onClick={() => {
                  dispatch(setStyle('outline'));
                }}
              >
                Outline
              </button>
            </div>
          </div>
        </div>
        {isFiltered ? (
          <IconGrid
            icons={iconsToRender}
            setModalIcon={setModalIcon}
            style={searchStyleValue}
          />
        ) : (
          categories.map((c, categoryIndex) => (
            <div key={categoryIndex}>
              <CategoryHeading>{c.title}</CategoryHeading>
              <IconGrid
                icons={c.icons}
                setModalIcon={setModalIcon}
                style={searchStyleValue}
                key={c.title}
              />
            </div>
          ))
        )}
        {modalIcon && (
          <IconTileModal
            icon={modalIcon.icon}
            iconType={modalIcon.iconType}
            isOpen={modalIcon !== undefined}
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
