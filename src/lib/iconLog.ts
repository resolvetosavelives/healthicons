import metaData from '../../public/icons/meta-data.json';
import iconDates from './iconDates.json';

export interface DatedIcon {
  id: string;
  category: string;
  title: string;
}

export interface IconsAdded {
  date: string;
  icons: DatedIcon[];
}

// the icons grouped by the day they were added, newest first (the dates come
// from src/lib/iconDates.json: see src/scripts/generateIconDates.ts)
export function getIconsAdded(): IconsAdded[] {
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

  return Array.from(byDate.entries())
    .sort(([d1], [d2]) => (d1 < d2 ? 1 : -1))
    .map(([date, icons]) => ({
      date,
      icons: icons.sort((i1, i2) =>
        i1.title.toLowerCase() > i2.title.toLowerCase() ? 1 : -1
      )
    }));
}

// the groups from the last year (counted back from when the site is built)
export function getRecentlyAdded(): IconsAdded[] {
  const yearAgo = new Date();
  yearAgo.setUTCFullYear(yearAgo.getUTCFullYear() - 1);
  const cutoff = yearAgo.toISOString().slice(0, 10);
  return getIconsAdded().filter((group) => group.date >= cutoff);
}
