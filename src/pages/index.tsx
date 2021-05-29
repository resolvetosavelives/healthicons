import Head from 'next/head';
import { TopBar } from '../components/TopBar';
import { CategoryHeading } from '../components/CategoryHeading';
import { IconTile } from '../components/IconTile';
import styles from './index.module.css';

export default function Home() {
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
        <CategoryHeading>Category</CategoryHeading>
        <div className={styles.iconGrid}>
          <IconTile />
          <IconTile />
          <IconTile />
          <IconTile />
          <IconTile />
        </div>
      </main>
    </div>
  );
}
