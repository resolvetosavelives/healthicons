import { ReactNode } from 'react';
import { TopBar } from './TopBar';
import styles from './ContentPage.module.scss';

interface ContentPageProps {
  title: string;
  titleId?: string;
  // links above the title: a link back on the left, others on the right
  // (stacked on mobile)
  topLinks?: ReactNode;
  intro: ReactNode;
  // optional side column: beside the text on desktop, below it on mobile
  aside?: ReactNode;
  children: ReactNode;
}

// The shared layout for the site's text pages (About, History, Request an
// icon) so their titles, spacing and text width are the same everywhere.
export function ContentPage({
  title,
  titleId,
  topLinks,
  intro,
  aside,
  children
}: ContentPageProps) {
  return (
    <div className="container">
      <TopBar />
      <main id="main" className={styles.page}>
        <article className={styles.main}>
          <header className={styles.header}>
            {topLinks && <nav className={styles.topLinks}>{topLinks}</nav>}
            <h1 id={titleId} className={styles.title}>
              {title}
            </h1>
            <div className={styles.intro}>{intro}</div>
          </header>
          <div className={styles.body}>{children}</div>
        </article>
        {aside && <aside className={styles.aside}>{aside}</aside>}
      </main>
    </div>
  );
}
