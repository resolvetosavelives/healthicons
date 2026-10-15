import { useEffect, useState } from 'react';
import styles from './AnnouncementBar.module.scss';

const STORAGE_KEY = 'announcementDismissed';

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
