import { promises as fs } from 'fs';
import path from 'path';
import metaData from '../../public/icons/meta-data.json';

const ICONS_DIRECTORY = path.join(
  process.cwd(),
  'public',
  'icons',
  'svg',
  'filled'
);

export interface Category {
  title: string;
  icons: Icon[];
}

export type IconFormat = '48px' | '24px';

export interface Icon {
  id: string;
  category: string;
  title: string;
  tags: string[];
  formats: IconFormat[];
}

export async function getCategoriesAndIcons(): Promise<Category[]> {
  // only the category folders: other files can turn up, like macOS's
  // .DS_Store
  const dirNames = (await fs.readdir(ICONS_DIRECTORY, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const categories = await Promise.all(
    dirNames.map(async (dirName) => {
      return {
        title: dirName,
        icons: await getIcons(dirName)
      };
    })
  );

  return categories.sort((c1, c2) => {
    return c1.title.toLowerCase() > c2.title.toLowerCase() ? 1 : -1;
  });
}

async function getIcons(dirName: string): Promise<Icon[]> {
  const dirPath = path.join(ICONS_DIRECTORY, dirName);
  // only the SVGs: other files can turn up, like macOS's .DS_Store
  const fileNames = (await fs.readdir(dirPath)).filter((fileName) =>
    fileName.endsWith('.svg')
  );
  const icons = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.[^/.]+$/, '');

      // find same icon id in the same category from the meta-data JSON file
      const currentFileMetaData = metaData.find(
        (m) => m.id === id && m.category === dirName
      );

      return {
        title: currentFileMetaData?.title || id,
        tags: currentFileMetaData?.tags || [],
        id,
        category: dirName,
        formats: (currentFileMetaData?.formats as IconFormat[]) || ['48px']
      };
    })
  );

  return icons.sort((i1, i2) => {
    return i1.title.toLowerCase() > i2.title.toLowerCase() ? 1 : -1;
  });
}

export function findIconTest() {
  return 'hello';
}
