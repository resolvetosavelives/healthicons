import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { RootState } from '../store';
import { setStyle, setKeywords } from '../store/search';
import { searchKeywords } from '../lib/searchKeywords';
import { TopBar } from './TopBar';
import { CategoryHeading } from './CategoryHeading';
import { IconTile } from './IconTile';
import { IconTileModal } from './IconTileModal';
import styles from '../pages/index.module.scss';

import { Category, Icon } from '../lib/icons';

interface ModalIcon {
  icon: Icon;
  iconType: string;
}

interface IconGridProps {
  categories: Category[];
  iconId?: string;
  style?: 'outline' | 'filled';
  categoryId?: string;
}

export default function IconGrid({
  iconId,
  categoryId,
  style,
  categories
}: IconGridProps) {
  const dispatch = useDispatch();
  const searchKeywordsValue = useSelector(
    (state: RootState) => state.search.keywords
  );
  const searchStyleValue = useSelector(
    (state: RootState) => state.search.style
  );
  const [modalIcon, setModalIcon] = useState<ModalIcon>(undefined);
  const router = useRouter();

  useMemo(() => {
    if (!iconId) {
      setModalIcon(undefined);
    }

    categories.forEach((category) => {
      category.icons.forEach((icon) => {
        if (icon.iconId === iconId && icon.categoryId === categoryId) {
          setModalIcon({
            icon,
            iconType: style
          });
        }
      });
    });
  }, [categories, categoryId, iconId, style]);

  const iconsToRender = useMemo(() => {
    const filteredIcons: Icon[] = [];
    if (!searchKeywordsValue) {
      return filteredIcons;
    }

    categories.forEach((category) => {
      category.icons.forEach((icon) => {
        if (
          searchKeywords(
            searchKeywordsValue,
            icon.tags.concat([icon.title, category.title]).join(', ')
          )
        ) {
          filteredIcons.push(icon);
        }
      });
    });
    return filteredIcons;
  }, [searchKeywordsValue, categories]);

  const totalIconCount = categories.reduce((counter, category) => {
    return counter + category.icons.length;
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
        <label className={styles.filterBox}>
          <input
            value={searchKeywordsValue}
            type="text"
            className={styles.filterBoxInput}
            placeholder={`Search ${totalIconCount * 2} icons…`}
            onChange={(e) => dispatch(setKeywords(e.target.value))}
          />
        </label>

        <div className={styles.styleToggleContainer}>
          <button
            className={classnames(styles.styleToggle, {
              [styles.styleToggleSelected]: searchStyleValue === 'all'
            })}
            onClick={() => {
              dispatch(setStyle('all'));
            }}
          >
            <img
              src="/icons/svg/outline/symbols/yes.svg"
              width="20"
              height="20"
              alt=""
            />
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
            <img
              src="/icons/svg/outline/symbols/yes.svg"
              width="20"
              height="20"
              alt=""
            />
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
            <img
              src="/icons/svg/outline/symbols/yes.svg"
              width="20"
              height="20"
              alt=""
            />
            Outline
          </button>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {(!searchKeywordsValue ||
              category.icons.some((icon) => {
                return iconsToRender.includes(icon);
              })) && <CategoryHeading>{category.title}</CategoryHeading>}
            <div className={styles.iconGrid}>
              {category.icons.map((icon, iconIndex) => (
                <IconTile
                  key={iconIndex}
                  icon={icon}
                  iconStyle={searchStyleValue}
                  visible={!searchKeywordsValue || iconsToRender.includes(icon)}
                  onClick={(iconType: string) => {
                    router.push(
                      `/icon/${iconType}/${icon.categoryId}/${icon.iconId}`,
                      undefined,
                      {
                        shallow: true,
                        scroll: false
                      }
                    );
                  }}
                />
              ))}
            </div>
          </div>
        ))}
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
            }}
          />
        )}
      </main>
      <footer>
        All icons are licensed under an open source{' '}
        <a href="/about#license" className={styles.link}>
          MIT License
        </a>
      </footer>
    </div>
  );
}
