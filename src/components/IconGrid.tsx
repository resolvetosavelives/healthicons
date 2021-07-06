import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
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
  const [modalIcon, setModalIcon] = useState<ModalIcon>(undefined);
  const [query, setQuery] = useState<string>();
  const [iconStyle, setIconStyle] =
    useState<'outline' | 'filled' | 'all'>('all');

  const router = useRouter();

  useMemo(() => {
    if (!iconId) {
      setModalIcon(undefined);
    }

    categories.forEach((category) => {
      category.icons.forEach((icon) => {
        if (icon.fileName === iconId && icon.path === categoryId) {
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
    if (!query) {
      return filteredIcons;
    }

    categories.forEach((category) => {
      category.icons.forEach((icon) => {
        if (
          searchKeywords(
            query,
            icon.tags.concat([icon.title, category.title]).join(', ')
          )
        ) {
          filteredIcons.push(icon);
        }
      });
    });
    return filteredIcons;
  }, [query, categories]);

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
            type="text"
            className={styles.filterBoxInput}
            placeholder={`Search ${totalIconCount * 2} icons…`}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        <div className={styles.styleToggleContainer}>
          <button
            className={classnames(styles.styleToggle, {
              [styles.styleToggleSelected]: iconStyle === 'all'
            })}
            onClick={() => {
              setIconStyle('all');
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
              [styles.styleToggleSelected]: iconStyle === 'filled'
            })}
            onClick={() => {
              setIconStyle('filled');
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
              [styles.styleToggleSelected]: iconStyle === 'outline'
            })}
            onClick={() => {
              setIconStyle('outline');
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
            {(!query ||
              category.icons.some((icon) => {
                return iconsToRender.includes(icon);
              })) && <CategoryHeading>{category.title}</CategoryHeading>}
            <div className={styles.iconGrid}>
              {category.icons.map((icon, iconIndex) => (
                <IconTile
                  key={iconIndex}
                  icon={icon}
                  iconStyle={iconStyle}
                  visible={!query || iconsToRender.includes(icon)}
                  onClick={(iconType: string) => {
                    router.push(
                      `/icon/${iconType}/${icon.path}/${icon.fileName}`,
                      undefined,
                      {
                        shallow: true
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
                shallow: true
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
