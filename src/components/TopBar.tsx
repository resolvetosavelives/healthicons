import Link from 'next/link';
import styles from './TopBar.module.scss';

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <Link href="/">
        <a className={styles.title}>Health icons</a>
      </Link>
      <div className={styles.links}>
        <a
          href="https://github.com/resolvetosavelives/healthicons#icon-requests"
          className={styles.link}
        >
          Request an icon
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
        <a href="/icons.zip" className={styles.buttonLink}>
          Download all
        </a>
      </div>
    </div>
  );
}
