import Link from 'next/link';
import styles from './TopBar.module.scss';

export function TopBar() {
  return (
    <nav className={styles.topBar}>
      <div className={styles.topbarTitle}>
        <Link href="/" className={styles.title}>
          Health icons
        </Link>
      </div>
      <ul className={styles.topbarLinks}>
        <li>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/request-icon" className={styles.link}>
            Request an icon
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/resolvetosavelives/healthicons"
            className={styles.link}
          >
            GitHub
          </a>
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
