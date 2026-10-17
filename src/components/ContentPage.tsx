import { ReactNode } from 'react';
import { TopBar } from './TopBar';
import styles from './ContentPage.module.scss';

interface ContentPageProps {
  title: string;
  // id for the title, e.g. for linking to the top of the page
  titleId?: string;
  // the larger lead paragraph under the title
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
