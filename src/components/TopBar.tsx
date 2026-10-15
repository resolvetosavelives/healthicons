import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import styles from './TopBar.module.scss';
import { AnnouncementBar } from './AnnouncementBar';

const isIconsPage = (path: string) => path === '/' || path.startsWith('/icon/');

// the site's own pages; `active` says which paths count as being on that page,
// and `shortLabel` (if any) replaces the label on mobile
const NAV_LINKS: Array<{
  href: string;
  label: string;
  shortLabel?: string;
  active: (path: string) => boolean;
}> = [
  {
    href: '/',
    label: 'Icons',
    active: isIconsPage
  },
  {
    href: '/about',
    label: 'About',
    active: (path: string) => path === '/about'
  },
  {
    href: '/request-icon',
    label: 'Request an icon',
    shortLabel: 'Requests',
    active: (path: string) => path === '/request-icon'
  }
];

export function TopBar() {
  // the route's pathname (e.g. "/icon/[style]/[category]/[icon]") is the same
  // on the server and in the browser, so the active link never flickers
  const { pathname } = useRouter();

  return (
    <>
      {/* shown on every page until dismissed */}
      <AnnouncementBar />
      <nav className={styles.topBar}>
        <div className={styles.topbarTitle}>
          <Link href="/" className={styles.title}>
            Health icons
          </Link>
        </div>
        <ul className={styles.topbarLinks}>
          {NAV_LINKS.map(({ href, label, shortLabel, active }) => {
            const isActive = active(pathname);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={classnames(styles.link, {
                    [styles.activeLink]: isActive
                  })}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {shortLabel ? (
                    <>
                      <span className={styles.fullLabel}>{label}</span>
                      <span className={styles.shortLabel}>{shortLabel}</span>
                    </>
                  ) : (
                    label
                  )}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="https://github.com/resolvetosavelives/healthicons"
              className={styles.link}
            >
              GitHub
            </a>
          </li>
        </ul>
        {/* only offered alongside the icons themselves */}
        {isIconsPage(pathname) && (
          <div className={styles.topbarDownload}>
            <a href="/icons.zip" className={styles.buttonLink}>
              Download all
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
