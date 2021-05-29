import { useState, useMemo } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { TopBar } from '../components/TopBar';
import { CategoryHeading } from '../components/CategoryHeading';
import { IconTile } from '../components/IconTile';
import styles from './index.module.scss';

import { getCategoriesAndIcons, Category, Icon } from '../lib/icons';

interface HomeProps {
  categories: Category[];
}

export default function Home({ categories }: HomeProps) {
  const [query, setQuery] = useState<string>();

  const categoriesToRender = useMemo(() => {
    const filteredCategories: Category[] = [];
    if (!query) {
      return categories;
    }
    const lowerCaseQuery = query.toLowerCase();

    categories.forEach((category) => {
      const matchedIcons: Icon[] = [];

      category.icons.forEach((icon) => {
        if (icon.title.toLowerCase().includes(lowerCaseQuery)) {
          matchedIcons.push(icon);
        }
      });

      if (matchedIcons.length > 0) {
        const filteredCategory = category;
        filteredCategory.icons = matchedIcons;
        filteredCategories.push(filteredCategory);
      }
    });
    return filteredCategories;
  }, [query, categories]);

  return (
    <div className="container">
      <Head>
        <title>Health Icons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <main>
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
            placeholder="Find Icons"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        {categoriesToRender.map((category, index) => (
          <div key={index}>
            <CategoryHeading key={category.title}>
              {category.title}
            </CategoryHeading>
            <div className={styles.iconGrid}>
              {category.icons.map((icon) => (
                <IconTile key={icon.title} icon={icon} />
              ))}
            </div>
          </div>
        ))}
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
