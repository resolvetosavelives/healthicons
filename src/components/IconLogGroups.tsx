import Link from 'next/link';
import { IconImage } from './IconImage';
import { IconsAdded } from '../lib/iconLog';
import styles from './IconLogGroups.module.scss';

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

// icons grouped under the day they were added (on the Icon log, and the
// recent ones beside Request an icon)
export function IconLogGroups({ iconsAdded }: { iconsAdded: IconsAdded[] }) {
  return (
    <>
      {iconsAdded.map((group) => (
        <section key={group.date} className={styles.dateGroup}>
          <h2 className={styles.dateHeading}>
            <time dateTime={group.date} className={styles.date}>
              {formatDate(group.date)}
            </time>
            <span className={styles.count}>
              {group.icons.length} {group.icons.length === 1 ? 'icon' : 'icons'}
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
    </>
  );
}
