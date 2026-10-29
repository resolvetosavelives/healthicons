import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import styles from './TopBar.module.scss';
import { AnnouncementBar } from './AnnouncementBar';
import { ThemeToggle } from './ThemeToggle';
import { ABOUT_PAGES } from './AboutNav';

const isIconsPage = (path: string) => path === '/' || path.startsWith('/icon/');

// the site's own pages; `active` says which paths count as being on that page,
// `shortLabel` (if any) replaces the label on mobile, and `inMoreMenu` moves
// the link into the More menu on the narrowest phones, where the links row
// would be cut off
const NAV_LINKS: Array<{
  href: string;
  label: string;
  shortLabel?: string;
  inMoreMenu?: boolean;
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
    active: (path: string) => ABOUT_PAGES.some((page) => page.href === path)
  },
  {
    href: '/request-icon',
    label: 'Request an icon',
    shortLabel: 'Requests',
    active: (path: string) => path === '/request-icon'
  },
  {
    href: '/packages',
    label: 'Packages',
    inMoreMenu: true,
    active: (path: string) => path.startsWith('/packages')
  }
];

const GITHUB_URL = 'https://github.com/resolvetosavelives/healthicons';

// Lucide's arrow-up-right, marking a link to another site
function ExternalIcon() {
  return (
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
  );
}

// On mobile, a menu behind a three-dots button at the end of the links row
// has the About pages (which have their own menu column on desktop), apart
// from the main one, which is About in the row. On the narrowest phones
// (under 430px) it also has the links that don't fit in the row (Packages,
// GitHub) and Download all.
// It closes on picking a link, Escape, a click elsewhere, changing pages, or
// the header sliding away.
function MoreMenu({
  pathname,
  headerHidden
}: {
  pathname: string;
  headerHidden: boolean;
}) {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname, headerHidden]);

  useEffect(() => {
    if (!open) {
      return;
    }
    // a tap elsewhere only closes the menu: the click it makes is stopped
    // before it reaches what's under it (an icon, a link)
    const onPointerDown = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) {
        setOpen(false);
        const swallow = (click: MouseEvent) => {
          click.preventDefault();
          click.stopPropagation();
        };
        document.addEventListener('click', swallow, {
          capture: true,
          once: true
        });
        // a drag or scroll that started the tap ends without a click
        setTimeout(
          () =>
            document.removeEventListener('click', swallow, { capture: true }),
          500
        );
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  // on a page that's only in the menu on the narrowest phones (Packages), the
  // button shows it there, as the links row shows the others; the About
  // pages are already shown by About in the row
  const menuPageActive = NAV_LINKS.some(
    ({ inMoreMenu, active }) => inMoreMenu && active(pathname)
  );

  return (
    <div className={styles.moreMenu} ref={container}>
      <button
        ref={button}
        type="button"
        className={classnames(styles.moreButton, {
          [styles.moreButtonActive]: menuPageActive
        })}
        aria-label="More"
        aria-expanded={open}
        aria-controls="more-menu"
        onClick={() => setOpen(!open)}
      >
        {/* Lucide's ellipsis-vertical */}
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      </button>
      <ul id="more-menu" className={styles.moreList} hidden={!open}>
        {ABOUT_PAGES.filter(({ href }) => href !== '/about').map(
          ({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={classnames(styles.moreItem, {
                    [styles.moreItemActive]: isActive
                  })}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={close}
                >
                  {label}
                </Link>
              </li>
            );
          }
        )}
        {NAV_LINKS.filter(({ inMoreMenu }) => inMoreMenu).map(
          ({ href, label, active }, index) => {
            const isActive = active(pathname);
            return (
              <li
                key={href}
                className={classnames(styles.narrowOnly, {
                  [styles.moreDivider]: index === 0
                })}
              >
                <Link
                  href={href}
                  className={classnames(styles.moreItem, {
                    [styles.moreItemActive]: isActive
                  })}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={close}
                >
                  {label}
                </Link>
              </li>
            );
          }
        )}
        <li className={styles.narrowOnly}>
          <a href={GITHUB_URL} className={styles.moreItem} onClick={close}>
            GitHub
            <ExternalIcon />
          </a>
        </li>
        {isIconsPage(pathname) && (
          <li className={styles.narrowOnly}>
            <a
              href="/icons.zip"
              className={classnames(styles.moreItem, styles.moreDownload)}
              onClick={close}
            >
              Download all
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

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
      // React removes the header (when changing pages) a moment before this
      // effect's cleanup stops these updates; a scroll in between finds it gone
      if (!nav.current || !navEnd.current) {
        return;
      }
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
    if (mode === 'shown' && nav.current) {
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
          {NAV_LINKS.map(({ href, label, shortLabel, inMoreMenu, active }) => {
            const isActive = active(pathname);
            return (
              <li
                key={href}
                className={classnames({ [styles.wideOnly]: inMoreMenu })}
              >
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
          <li className={styles.wideOnly}>
            <a href={GITHUB_URL} className={styles.link}>
              GitHub
              <ExternalIcon />
            </a>
          </li>
          <li className={styles.moreLinksItem}>
            <MoreMenu pathname={pathname} headerHidden={mode === 'hidden'} />
          </li>
        </ul>
        <div className={styles.topbarDownload}>
          <ThemeToggle />
          {/* only offered alongside the icons themselves */}
          {isIconsPage(pathname) && (
            <a
              href="/icons.zip"
              className={classnames(styles.buttonLink, styles.wideOnly)}
            >
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
