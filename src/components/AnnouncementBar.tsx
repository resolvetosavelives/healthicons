import { useEffect, useState } from 'react';
import styles from './AnnouncementBar.module.scss';

export const STORAGE_KEY = 'announcementDismissed';

// set on <html> when the bar has been dismissed; CSS hides the bar while it's
// present, so the bar never flashes up on later visits
export const DISMISSED_ATTRIBUTE = 'data-announcement-dismissed';

// Runs in the page <head> (see _document.tsx) before anything is drawn. The
// pages are pre-built with the bar in them, so without this a dismissed bar
// would show until the page's JavaScript loaded and removed it.
export const HIDE_IF_DISMISSED_SCRIPT = `try{if(localStorage.getItem('${STORAGE_KEY}')==='true')document.documentElement.setAttribute('${DISMISSED_ATTRIBUTE}','')}catch(e){}`;

// how often a new icon pops in; the pop animation (in the CSS) lasts as long
const ICON_INTERVAL = 2000;

// the categories the icons are picked from
const ICON_CATEGORIES = ['body', 'conditions'];

// A random health icon every couple of seconds, popping in and out. The list
// is loaded once the page is up, so the bar doesn't hold up anything else.
function RandomIcon() {
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    let paths: string[] = [];
    let timer: number;
    let cancelled = false;
    const randomPath = () => paths[Math.floor(Math.random() * paths.length)];

    fetch('/icons/meta-data.json')
      .then((response) => response.json())
      .then((icons: Array<{ category: string; id: string }>) => {
        if (cancelled) {
          return;
        }
        paths = icons
          .filter((icon) => ICON_CATEGORIES.includes(icon.category))
          .map((icon) => `/icons/svg/outline/${icon.category}/${icon.id}.svg`);
        // the next icon is loaded a step ahead so it's ready to pop in
        let next = randomPath();
        const show = () => {
          setSrc(next);
          next = randomPath();
          new Image().src = next;
        };
        show();
        // with reduced motion, one icon stays put
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          timer = window.setInterval(show, ICON_INTERVAL);
        }
      })
      .catch(() => {
        // no icon; the bar reads fine without one
      });

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  return (
    <span className={styles.iconSlot} aria-hidden="true">
      {src && (
        <span key={src} className={styles.iconCircle}>
          <span
            className={styles.icon}
            style={{
              // eslint-disable-next-line @typescript-eslint/naming-convention
              WebkitMaskImage: `url(${src})`,
              maskImage: `url(${src})`
            }}
          />
        </span>
      )}
    </span>
  );
}

// A bar across the top of the page; once dismissed it stays hidden on later
// visits (remembered in this browser only).
export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === 'true') {
        setDismissed(true);
      }
    } catch {
      // storage can be unavailable (e.g. blocked in private browsing)
    }
  }, []);

  if (dismissed) {
    return null;
  }

  return (
    <div className={styles.bar} role="region" aria-label="About these icons">
      <RandomIcon />
      <p className={styles.text}>
        <strong>Free open-source health icons</strong> for use in your next
        commercial or personal project. Editing is ok. Republishing is ok. No
        need to give credit.
      </p>
      <button
        type="button"
        className={styles.close}
        aria-label="Dismiss"
        onClick={() => {
          setDismissed(true);
          document.documentElement.setAttribute(DISMISSED_ATTRIBUTE, '');
          try {
            localStorage.setItem(STORAGE_KEY, 'true');
          } catch {
            // the bar still hides for this visit
          }
        }}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
