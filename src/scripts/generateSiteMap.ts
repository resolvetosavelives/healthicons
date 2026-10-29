import { getCategoriesAndIcons, Icon } from '../lib/icons';
import path from 'path';
import { writeFileSync } from 'fs';

const PUBLIC_PATH = path.join(process.cwd(), 'public');
const SITE_URL = 'https://healthicons.org';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlEntry(pagePath: string, imagePaths: string[] = []) {
  const images = imagePaths.map(
    (imagePath) =>
      `    <image:image><image:loc>${escapeXml(
        SITE_URL + imagePath
      )}</image:loc></image:image>`
  );
  return [
    '  <url>',
    `    <loc>${escapeXml(SITE_URL + pagePath)}</loc>`,
    ...images,
    '  </url>'
  ].join('\n');
}

// the icon images shown on an icon's (outline) page: the standard icon, and
// the 24px version when there is one. Listing them helps the icons themselves
// show up in image search.
function iconImages(icon: Icon) {
  const images = [`/icons/svg/outline/${icon.category}/${icon.id}.svg`];
  if (icon.formats.includes('24px')) {
    images.push(`/icons/svg/outline-24px/${icon.category}/${icon.id}.svg`);
  }
  return images;
}

// Runs before every build (see "prebuild" in package.json) so the sitemap
// always matches the icons being published.
async function generateSiteMap() {
  const categories = await getCategoriesAndIcons();
  const icons = categories.flatMap((category) => category.icons);

  const entries = [
    '/',
    '/packages',
    '/packages/react',
    '/packages/vue',
    '/packages/svelte',
    '/packages/javascript',
    '/about',
    '/contribute',
    '/history',
    '/icon-log',
    '/licenses',
    '/request-icon'
  ].map((p) => urlEntry(p));

  // each icon has an outline and a filled page; the outline one is canonical
  // (see the icon page), so only it is listed
  icons.forEach((icon) => {
    entries.push(
      urlEntry(`/icon/outline/${icon.category}/${icon.id}`, iconImages(icon))
    );
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries,
    '</urlset>',
    ''
  ].join('\n');
  writeFileSync(`${PUBLIC_PATH}/sitemap.xml`, xml);

  console.log(`Sitemap written with ${entries.length} pages`);
}

generateSiteMap();
