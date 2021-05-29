import Head from 'next/head';
import { GetStaticProps } from 'next';
import { TopBar } from '../components/TopBar';
import { CategoryHeading } from '../components/CategoryHeading';
import { IconTile } from '../components/IconTile';
import styles from './index.module.css';

import { getCategoriesAndIcons, Category } from '../lib/icons';

interface HomeProps {
  categories: Category[];
}

export default function Home({ categories }: HomeProps) {
  return (
    <div className="container">
      <Head>
        <title>Health Icons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <main>
        <div className={styles.box}>
          <h1>Free, open source health icons available for any use</h1>
          <h3>
            Use for your next commerical or personal project. You don’t need to
            give credit and you can edit the icons however you want.
          </h3>
        </div>
        {categories.map((category) => (
          <>
            <CategoryHeading key={category.title}>
              {category.title}
            </CategoryHeading>
            <div className={styles.iconGrid}>
              {category.icons.map((icon) => (
                <IconTile key={icon.title} icon={icon} />
              ))}
            </div>
          </>
        ))}
      </main>
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
