import { getCategoriesAndIcons } from '../lib/icons';
import path from 'path';
import { writeFileSync } from 'fs';

const PUBLIC_PATH = path.join(process.cwd(), 'public');

async function generateSiteMap() {
  const categories = await getCategoriesAndIcons();
  const icons = categories.flatMap((category) => category.icons);

  const paths = [
    'https://healthicons.org/about',
    'https://healthicons.org/request-icon',
    'https://healthicons.org/icons.zip'
  ];

  for (let i = 0; i < icons.length; i++) {
    paths.push(
      `https://healthicons.org/icon/filled/${icons[i].category}/${icons[i].id}`
    );
  }

  writeFileSync(`${PUBLIC_PATH}/sitemap.txt`, paths.join('\n'));
}

generateSiteMap();
