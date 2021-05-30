import { useState, useMemo } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
// import ReactModal from 'react-modal';
import { TopBar } from '../components/TopBar';
import { CategoryHeading } from '../components/CategoryHeading';
import { IconTile } from '../components/IconTile';
import { IconTileModal } from '../components/IconTileModal';
import styles from './index.module.scss';

import { getCategoriesAndIcons, Category, Icon } from '../lib/icons';

interface HomeProps {
  categories: Category[];
}

export default function Home({ categories }: HomeProps) {
  const [modalIcon, setModalIcon] = useState<Icon>(undefined);

  const [query, setQuery] = useState<string>();

  const iconsToRender = useMemo(() => {
    const filteredIcons: Icon[] = [];
    if (!query) {
      return filteredIcons;
    }
    const lowerCaseQuery = query.toLowerCase();

    categories.forEach((category) => {
      category.icons.forEach((icon) => {
        if (icon.title.toLowerCase().includes(lowerCaseQuery)) {
          filteredIcons.push(icon);
        }
      });
    });
    return filteredIcons;
  }, [query, categories]);

  // TODO: figure out how to correctly do this
  // required to apply the aria-hidden attribute when a modal opens
  //ReactModal.setAppElement('#main');

  return (
    <div className="container">
      <Head>
        <title>Health Icons</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <TopBar />
      <main id="main">
        <div className={styles.box}>
          <h1>Free, open source health icons</h1>
          <h3>
            Free for use in your next commerical or personal project.
            <br />
            Editing is ok. Republishing is ok. No need to give credit.
          </h3>
        </div>
        <label className={styles.filterBox}>
          <input
            type="text"
            className={styles.filterBoxInput}
            placeholder="Search for icons..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        {categories.map((category) => (
          <div key={category.title}>
            {(!query ||
              category.icons.some((icon) => {
                return iconsToRender.includes(icon);
              })) && (
              <CategoryHeading key={category.title}>
                {category.title}
              </CategoryHeading>
            )}
            <div className={styles.iconGrid}>
              {category.icons.map((icon) => (
                <IconTile
                  key={icon.title}
                  icon={icon}
                  visible={!query || iconsToRender.includes(icon)}
                  onClick={() => {
                    setModalIcon(icon);
                  }}
                />
              ))}
            </div>
          </div>
        ))}
        {modalIcon && (
          <IconTileModal
            icon={modalIcon}
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
