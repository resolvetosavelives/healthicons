import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import styles from './AboutNav.module.scss';

const ABOUT_SECTIONS = [
  {
    heading: 'About',
    pages: [
      { href: '/about', label: 'About us' },
      { href: '/contribute', label: 'How to contribute' },
      { href: '/history', label: 'Project history' },
      { href: '/icon-log', label: 'Icon log' }
    ]
  },
  {
    heading: 'Legal',
    pages: [{ href: '/licenses', label: 'Licenses' }]
  }
];

export const ABOUT_PAGES = ABOUT_SECTIONS.flatMap((section) => section.pages);

// The About pages' menu on desktop: a column on the left (like
// Lucide's guide). On mobile they're in the top bar's More menu instead.
export function AboutNav() {
  const { pathname } = useRouter();

  return (
    <nav id="about-nav" aria-label="About Health Icons" className={styles.nav}>
      {ABOUT_SECTIONS.map((section) => (
        <div key={section.heading} className={styles.section}>
          <div className={styles.heading}>{section.heading}</div>
          <ul className={styles.links}>
            {section.pages.map((page) => {
              const active = pathname === page.href;
              return (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    aria-current={active ? 'page' : undefined}
                    className={classnames(styles.link, {
                      [styles.active]: active
                    })}
                  >
                    {page.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
