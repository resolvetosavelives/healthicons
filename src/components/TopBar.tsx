import Link from 'next/link';
import styles from './TopBar.module.css';

export function TopBar() {
return (
    <div className={styles.topBar}>
      <Link href="/">
        <a className={styles.title}>Health Icons</a>
      </Link>
      <div className={styles.links}>
        <Link href="/request">
          <a className={styles.link}>Request an icon</a>
        </Link>
        <a href="/download" className={styles.link}>
          Download All
        </a>
        <a
          href="https://github.com/resolvetosavelives/healthicons"
          className={styles.link}
        >
          GitHub
        </a>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
      </div>
    </div>
  );
}
