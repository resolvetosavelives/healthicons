import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import styles from './TopBar.module.scss';
import { AnnouncementBar } from './AnnouncementBar';
import { ThemeToggle } from './ThemeToggle';

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

  // Once scrolled past, the header slides away while scrolling down and back
  // in while scrolling up. 'top' is its normal place at the top of the page;
  // 'hidden' and 'shown' are pinned to the top of the window (sticky).
  const nav = useRef<HTMLElement>(null);
  const navEnd = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<'top' | 'hidden' | 'shown'>('top');
  const modeRef = useRef(mode);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      // where the header sits in the page, from the marker just after it
      const marginBottom = parseFloat(
        getComputedStyle(nav.current).marginBottom
      );
      const naturalBottom = navEnd.current.offsetTop - marginBottom;
      const naturalTop = naturalBottom - nav.current.offsetHeight;
      const current = modeRef.current;
      let next = current;
      if (current === 'shown' ? y <= naturalTop : y <= naturalBottom) {
        next = 'top';
      } else if (y > lastY + 4) {
        next = 'hidden';
      } else if (y < lastY - 4) {
        next = 'shown';
      }
      lastY = y;
      if (next !== current) {
        // slide only between hidden and shown; moving to or from its normal
        // place happens off screen, so it shouldn't animate
        setAnimated(next === 'shown' || current === 'shown');
        modeRef.current = next;
        setMode(next);
      }
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // while shown, the sticky search bar and sidebar sit below the header,
  // including the mobile links row that hangs below the header's box
  useEffect(() => {
    let offset = 0;
    if (mode === 'shown') {
      const top = nav.current.getBoundingClientRect().top;
      offset = Math.max(
        nav.current.offsetHeight,
        ...Array.from(nav.current.children).map(
          (child) => child.getBoundingClientRect().bottom - top
        )
      );
    }
    document.documentElement.style.setProperty(
      '--header-offset',
      `${Math.round(offset)}px`
    );
  }, [mode]);

  return (
    <>
      {/* shown on every page until dismissed */}
      <AnnouncementBar />
      <nav
        ref={nav}
        className={classnames(styles.topBar, {
          [styles.topBarPinned]: mode !== 'top',
          [styles.topBarHidden]: mode === 'hidden',
          [styles.topBarAnimated]: animated
        })}
      >
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
              {/* Lucide's arrow-up-right, marking a link to another site */}
              <svg
                className={styles.externalIcon}
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />

                <path d="M7 17 17 7" />
              </svg>
            </a>
          </li>
        </ul>
        <div className={styles.topbarDownload}>
          <ThemeToggle />
          {/* only offered alongside the icons themselves */}
          {isIconsPage(pathname) && (
            <a href="/icons.zip" className={styles.buttonLink}>
              Download all
            </a>
          )}
        </div>
      </nav>
      {/* marks where the header ends in the page */}
      <div ref={navEnd} />
    </>
  );
}
