import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.scss';

// Night mode: data-theme="dark" on <html> switches the site's colors (see
// global.css). It's only ever on by choice: the site starts in normal mode
// (whatever the device's setting) and someone's choice is remembered in this
// browser.

export const THEME_KEY = 'theme';

export type Theme = 'light' | 'dark';

// the icons' color when none is chosen: they're drawn and downloaded black,
// or white in night mode
export const DEFAULT_ICON_COLOR: Record<Theme, string> = {
  light: '#000000',
  dark: '#ffffff'
};

// sent on window when the theme changes, for useTheme
const THEME_CHANGE = 'healthicons-themechange';

// Runs in the page <head> (see _document.tsx) before anything is drawn, so
// pages never flash in the wrong colors
export const SET_THEME_SCRIPT = `(function(){var t;try{t=localStorage.getItem('${THEME_KEY}')}catch(e){}document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light')})()`;

function currentTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light';
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  window.dispatchEvent(new Event(THEME_CHANGE));
}

// the theme that's showing, kept up to date as it changes ('light' until the
// page's code runs: the server doesn't know)
export function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    const update = () => setTheme(currentTheme());
    update();
    window.addEventListener(THEME_CHANGE, update);
    return () => window.removeEventListener(THEME_CHANGE, update);
  }, []);
  return theme;
}

export function ThemeToggle() {
  const dark = useTheme() === 'dark';

  const toggle = () => {
    const next: Theme = dark ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // storage can be unavailable (e.g. blocked in private browsing); it
      // still switches for this visit
    }
  };

  // both icons are drawn and the theme's CSS shows the right one, so the
  // button is right from the first paint, before this code has run
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="Night mode"
      aria-pressed={dark}
      title={dark ? 'Turn off night mode' : 'Turn on night mode'}
    >
      {/* Lucide's moon and sun */}
      <svg
        className={styles.moon}
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
      <svg
        className={styles.sun}
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </button>
  );
}
