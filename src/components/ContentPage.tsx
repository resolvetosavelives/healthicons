import { ReactNode } from 'react';
import classnames from 'classnames';
import { TopBar } from './TopBar';
import styles from './ContentPage.module.scss';

interface ContentPageProps {
  title: string;
  titleId?: string;
  // shown after the title, like a package's logo
  titleIcon?: ReactNode;
  // links above the title: a link back on the left, others on the right
  // (stacked on mobile)
  topLinks?: ReactNode;
  intro: ReactNode;
  // optional side column: beside the text on desktop, below it on mobile
  aside?: ReactNode;
  // optional menu for a group of pages (like the About pages): a column on
  // the left on desktop (it hides itself on mobile)
  nav?: ReactNode;
  children: ReactNode;
}

// The shared layout for the site's text pages (About, History, Request an
// icon) so their titles, spacing and text width are the same everywhere.
export function ContentPage({
  title,
  titleId,
  titleIcon,
  topLinks,
  intro,
  aside,
  nav,
  children
}: ContentPageProps) {
  return (
    <div className={classnames('container', { [styles.hasNav]: nav })}>
      <TopBar />
      <div className={nav ? styles.withNav : undefined}>
        {nav}
        <main id="main" className={styles.page}>
          <article className={styles.main}>
            <header className={styles.header}>
              {topLinks && <nav className={styles.topLinks}>{topLinks}</nav>}
              <h1 id={titleId} className={styles.title}>
                {title}
                {titleIcon && (
                  <span className={styles.titleIcon}>{titleIcon}</span>
                )}
              </h1>
              <div className={styles.intro}>{intro}</div>
            </header>
            <div className={styles.body}>{children}</div>
          </article>
          {aside && <aside className={styles.aside}>{aside}</aside>}
        </main>
      </div>
    </div>
  );
}
