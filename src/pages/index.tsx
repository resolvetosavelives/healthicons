import { useState, useMemo } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import classnames from 'classnames';
import { searchKeywords } from '../lib/searchKeywords';
import { TopBar } from '../components/TopBar';
import { CategoryHeading } from '../components/CategoryHeading';
import { IconTile } from '../components/IconTile';
import { IconTileModal } from '../components/IconTileModal';
import styles from './index.module.scss';

import { getCategoriesAndIcons, Category, Icon } from '../lib/icons';

interface ModalIcon {
  icon: Icon;
  iconType: string;
}

interface HomeProps {
  categories: Category[];
}

export default function Home({ categories }: HomeProps) {
  const [modalIcon, setModalIcon] = useState<ModalIcon>(undefined);
  const [query, setQuery] = useState<string>();
  const [iconStyle, setIconStyle] =
    useState<'outline' | 'filled' | 'all'>('all');

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
      <Head>
        <title>Health Icons</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Health icons" />
        <meta property="og:title" content="Health icons" />
        <meta
          property="og:description"
          content="Free, open source health icons. Use in your next commercial or personal project. Editing is ok. Republishing is ok. No need to give credit."
        />
        <meta property="og:url" content="http://healthicons.org/" />
        <meta
          property="og:image"
          content="http://healthicons.org/og_image.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://healthicons.org/og_image.png"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://healthicons.org/og_image.png"
        />
        <meta property="twitter:site" content="@health_icons" />
      </Head>

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

        <div>
          Icon Styles
          <button
            className={classnames(styles.styleToggle, {
              [styles.styleToggleSelected]: iconStyle === 'all'
            })}
            onClick={() => {
              setIconStyle('all');
            }}
          >
            <img
              src="/icons/svg/negative/shapes/circle_large.svg"
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
              src="/icons/svg/filled/shapes/circle_large.svg"
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
              src="/icons/svg/outline/shapes/circle_large.svg"
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
                    setModalIcon({ icon, iconType });
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
              setModalIcon(undefined);
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const categories = await getCategoriesAndIcons();
  return {
    props: {
      categories
    }
  };
};
