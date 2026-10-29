import { execFileSync } from 'child_process';
import { existsSync, writeFileSync } from 'fs';
import path from 'path';
import metaData from '../../public/icons/meta-data.json';

// Works out the date each icon was added to the website from the git history
// and saves it to src/lib/iconDates.json for the Icon log page. It runs as part
// of `yarn update-icons`, and can be run on its own with
// `yarn generate-icon-dates`.
//
// An icon's date is when its 48px SVG (filled or outline) first landed on the
// main branch. Only main's own commits are followed (--first-parent), so a
// pull request counts on the day it was merged rather than when its commits
// were made.
//
// Icons that aren't committed yet (like ones just exported by
// `yarn update-icons`) get today's date. Running it again after they're
// merged changes that to the day they landed on main.

const OUTPUT_PATH = path.join(process.cwd(), 'src', 'lib', 'iconDates.json');
const SVG_PATH = 'public/icons/svg';

const log = execFileSync(
  'git',
  [
    '-c',
    'diff.renameLimit=20000',
    'log',
    'HEAD',
    '--first-parent',
    '-m',
    '--reverse',
    '--format=COMMIT %cs',
    '--name-status',
    '-M50%'
  ],
  { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 }
);

// moving an icon to a new category (or renaming it) shouldn't reset its date,
// so each file carries the date of the file it came from. When git doesn't
// see a move as a rename (because the drawing changed too), a deleted file is
// matched to a later added file with the same style and name.
function matchKey(filePath: string) {
  const style = /filled/i.test(filePath) ? 'filled' : 'outline';
  const size = filePath.includes('24px') ? '24' : '48';
  const name = path
    .basename(filePath, path.extname(filePath))
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  return `${style}-${size}-${name}`;
}

const earliest = (a: string, b?: string) => (b && b < a ? b : a);

const added = new Map<string, string>();
const removed = new Map<string, string>();
let date = '';

for (const line of log.split('\n')) {
  if (!line) {
    continue;
  }
  if (line.startsWith('COMMIT ')) {
    date = line.slice('COMMIT '.length);
    continue;
  }
  const [status, from, to] = line.split('\t');
  if (status.startsWith('R') || status.startsWith('C')) {
    if (!added.has(to)) {
      added.set(to, added.get(from) ?? date);
    }
    if (status.startsWith('R')) {
      added.set(to, earliest(added.get(to)!, added.get(from)));
      added.delete(from);
    }
  } else if (status === 'A') {
    if (!added.has(from)) {
      added.set(from, earliest(date, removed.get(matchKey(from))));
    }
  } else if (status === 'D') {
    const fromDate = added.get(from);
    if (fromDate) {
      const key = matchKey(from);
      removed.set(key, earliest(fromDate, removed.get(key)));
      added.delete(from);
    }
  }
}

// in the local time zone, like git's commit dates above
function today() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

const dates: Record<string, string> = {};
let newIcons = 0;
for (const icon of metaData) {
  const svgPaths = ['filled', 'outline'].map(
    (style) => `${SVG_PATH}/${style}/${icon.path}.svg`
  );
  const iconDates = svgPaths
    .map((svgPath) => added.get(svgPath))
    .filter((d): d is string => !!d);
  if (iconDates.length > 0) {
    dates[icon.path] = iconDates.sort()[0];
  } else if (svgPaths.some((svgPath) => existsSync(svgPath))) {
    dates[icon.path] = today();
    newIcons++;
  } else {
    console.warn(`No SVG found for ${icon.path}`);
  }
}

writeFileSync(OUTPUT_PATH, JSON.stringify(dates, null, 2) + '\n');
console.log(
  `Saved dates for ${Object.keys(dates).length} icons (${newIcons} not committed yet, dated today)`
);
