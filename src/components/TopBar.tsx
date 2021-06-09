import Link from 'next/link';
import styles from './TopBar.module.scss';

export function TopBar() {
  return (
    <nav className={styles.topBar}>
      <div className={styles.topbarTitle}>
        <Link href="/">
          <a className={styles.title}>
            Health icons <sup>BETA</sup>
          </a>
        </Link>
      </div>
      <ul className={styles.topbarLinks}>
        <li>
          <Link href="/about">
            <a className={styles.link}>
              <img src="/ui/information-line.svg" alt="" /> About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/request-icon">
            <a className={styles.link}>
              <img src="/ui/question-line.svg" alt="" /> Request an icon
            </a>
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
