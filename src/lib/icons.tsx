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

export interface Icon {
  title: string;
  iconId: string;
  categoryId: string;
  tags: string[];
}

export async function getCategoriesAndIcons(): Promise<Category[]> {
  const dirNames = await fs.readdir(ICONS_DIRECTORY);
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
  const fileNames = await fs.readdir(dirPath);
  const icons = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.[^/.]+$/, '');

      const currentFileMetaData = metaData.find((m) => m.id === id);

      return {
        title: currentFileMetaData?.title || id,
        tags: currentFileMetaData?.tags || [],
        iconId: id,
        categoryId: dirName
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
