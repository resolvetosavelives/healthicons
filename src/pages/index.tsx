import Head from 'next/head';
import { TopBar } from '../components/TopBar';
import { IconList } from '../components/IconList';
import { IconModal } from '../components/IconModal';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Health icons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <main>
        <div className={styles.box}>
          <h1>Free, open source health icons</h1>
          <h3>
            Use for your next commerical or personal project.<br />
            Editing is fine. No credit required. Public domain. Truly free to use.
          </h3>
        </div>
      </main>

      <IconList />

      <IconModal />
    </div>
  );
}
