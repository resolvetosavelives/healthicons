import Link from 'next/link';
import styles from './TopBar.module.scss';

export function TopBar() {
  return (
    <nav className={styles.topBar}>
      <div className={styles.topbarTitle}>
        <Link href="/">
          <span className={styles.title}>Health icons</span>
        </Link>
      </div>
      <ul className={styles.topbarLinks}>
        <li>
          <Link href="/about">
            <span className={styles.link}>
              <img src="/ui/information-line.svg" alt="" /> About
            </span>
          </Link>
        </li>
        <li>
          <Link href="/request-icon">
            <span className={styles.link}>
              <img src="/ui/question-line.svg" alt="" /> Request an icon
            </span>
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/resolvetosavelives/healthicons"
            className={styles.link}
          >
            <img src="/ui/github-fill.svg" alt="" /> GitHub
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
