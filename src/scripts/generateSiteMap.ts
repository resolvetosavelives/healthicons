import { getCategoriesAndIcons } from '../lib/icons';
import path from 'path';
import { writeFileSync } from 'fs';

const PUBLIC_PATH = path.join(process.cwd(), 'public');
const SITE_URL = 'https://healthicons.org';

// Runs before every build (see "prebuild" in package.json) so the sitemap
// always matches the icons being published.
async function generateSiteMap() {
  const categories = await getCategoriesAndIcons();
  const icons = categories.flatMap((category) => category.icons);

  const paths = ['/', '/about', '/history', '/request-icon'];

  // each icon has an outline and a filled page; the outline one is canonical
  // (see the icon page), so only it is listed
  icons.forEach((icon) => {
    paths.push(`/icon/outline/${icon.category}/${icon.id}`);
  });

  const urls = paths.map((p) => `${SITE_URL}${p}`);

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
    '</urlset>',
    ''
  ].join('\n');
  writeFileSync(`${PUBLIC_PATH}/sitemap.xml`, xml);

  // the plain-text sitemap is kept for anything already pointing at it
  writeFileSync(`${PUBLIC_PATH}/sitemap.txt`, urls.join('\n'));

  console.log(`Sitemap written with ${urls.length} URLs`);
}

generateSiteMap();
