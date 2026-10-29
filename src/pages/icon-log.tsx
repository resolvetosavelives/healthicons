import { GetStaticProps } from 'next';
import Link from 'next/link';
import HeadTags from '../components/HeadTags';
import { AboutNav } from '../components/AboutNav';
import { ContentPage } from '../components/ContentPage';
import { IconImage } from '../components/IconImage';
import metaData from '../../public/icons/meta-data.json';
import iconDates from '../lib/iconDates.json';
import styles from './icon-log.module.scss';

interface DatedIcon {
  id: string;
  category: string;
  title: string;
}

interface IconsAdded {
  date: string;
  icons: DatedIcon[];
}

interface IconLogProps {
  iconsAdded: IconsAdded[];
}

// the icons grouped by the day they were added, newest first (the dates come
// from src/lib/iconDates.json: see src/scripts/generateIconDates.ts)
export const getStaticProps: GetStaticProps<IconLogProps> = async () => {
  const dates: Record<string, string> = iconDates;
  const byDate = new Map<string, DatedIcon[]>();
  for (const icon of metaData) {
    const date = dates[icon.path];
    if (!date) {
      continue;
    }
    if (!byDate.has(date)) {
      byDate.set(date, []);
    }
    byDate
      .get(date)!
      .push({ id: icon.id, category: icon.category, title: icon.title });
  }

  const iconsAdded = Array.from(byDate.entries())
    .sort(([d1], [d2]) => (d1 < d2 ? 1 : -1))
    .map(([date, icons]) => ({
      date,
      icons: icons.sort((i1, i2) =>
        i1.title.toLowerCase() > i2.title.toLowerCase() ? 1 : -1
      )
    }));

  return { props: { iconsAdded } };
};

// e.g. "Oct 5, 2026": dates are formatted as UTC so the day doesn't shift
// with the time zone of the machine building the site
function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  });
}

export default function IconLog({ iconsAdded }: IconLogProps) {
  const total = iconsAdded.reduce((sum, group) => sum + group.icons.length, 0);

  return (
    <>
      <HeadTags
        title="Icon Log | Health Icons"
        description="Every Health Icon, grouped by the day it was added to the website, newest first."
        path="/icon-log"
      />
      <ContentPage
        title="Icon log"
        titleId="icon-log"
        nav={<AboutNav />}
        intro={
          <p>
            All {total} icons, grouped by the day they were added to the
            website.
          </p>
        }
      >
        {iconsAdded.map((group) => (
          <section key={group.date} className={styles.dateGroup}>
            <h2 className={styles.dateHeading}>
              <time dateTime={group.date} className={styles.date}>
                {formatDate(group.date)}
              </time>
              <span className={styles.count}>
                {group.icons.length}{' '}
                {group.icons.length === 1 ? 'icon' : 'icons'}
              </span>
            </h2>
            <ul className={styles.iconList}>
              {group.icons.map((icon) => (
                <li key={`${icon.category}/${icon.id}`}>
                  <Link
                    href={`/icon/outline/${icon.category}/${icon.id}`}
                    title={icon.title}
                    className={styles.icon}
                  >
                    <IconImage
                      src={`/icons/svg/outline/${icon.category}/${icon.id}.svg`}
                      alt={icon.title}
                      size={48}
                      colored={true}
                      lazy={true}
                      className={styles.iconImage}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </ContentPage>
    </>
  );
}
