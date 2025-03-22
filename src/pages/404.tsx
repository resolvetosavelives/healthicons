import Head from 'next/head';
import { TopBar } from '../components/TopBar';
import styles from './404.module.scss';

export default function RequestIcon() {
  const icons = [
    'outline/people/fever.svg',
    'filled/symbols/un_paved_road.svg',
    'filled/symbols/hazardous.svg'
  ];

  const icon = icons[Math.floor(Math.random() * icons.length)];

  return (
    <div className="container">
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Health icons" />
      </Head>

      <TopBar />
      <main id="main">
        <div className={styles.container}>
          <img
            src={`/icons/svg/${icon}`}
            className={styles.alertIcon}
            alt="Alert Icon"
            width="500px"
            height="500px"
          />
          <h1 className={styles.pageTitle}>Page not found</h1>
        </div>
      </main>
    </div>
  );
}
