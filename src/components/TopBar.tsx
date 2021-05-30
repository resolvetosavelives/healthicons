import Link from 'next/link';
import styles from './TopBar.module.scss';

export function TopBar() {
  return (
    <nav className={styles.topBar}>
      <div className={styles.topbarTitle}>
        <Link href="/">
          <a className={styles.title}>Health icons</a>
        </Link>
      </div>
      <ul className={styles.topbarLinks}>
        <li>
          <a
            href="https://github.com/resolvetosavelives/healthicons#icon-requests"
            className={styles.link}
          >
            Request an icon
          </a>
        </li>
        <li>
          <a
            href="https://github.com/resolvetosavelives/healthicons"
            className={styles.link}
          >
            GitHub
          </a>
        </li>
        <li>
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
        </li>
      </ul>
      <div className={styles.topbarDownload}>
        <a href="/icons.zip" className={styles.buttonLink}>
          Download all
        </a>
      </div>
    </nav>
  );
}
