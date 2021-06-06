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
  fileName: string;
  path: string;
  tags: string[];
}

export async function getCategoriesAndIcons(): Promise<Category[]> {
  const dirNames = await fs.readdir(ICONS_DIRECTORY);
  return await Promise.all(
    dirNames.map(async (dirName) => {
      return {
        title: dirName,
        icons: await getIcons(dirName)
      };
    })
  );
}

async function getIcons(dirName: string): Promise<Icon[]> {
  const dirPath = path.join(ICONS_DIRECTORY, dirName);
  const fileNames = await fs.readdir(dirPath);
  return await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.[^/.]+$/, '');

      const md = metaData.find((m) => m.id === id);

      return {
        title: md && md.title ? md.title : fileName.replace(/\.[^/.]+$/, ''),
        tags: md && md.tags ? md.tags : [],
        fileName: fileName.replace(/\.[^/.]+$/, ''),
        path: dirName
      };
    })
  );
}
