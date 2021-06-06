import * as Figma from 'figma-js';
import { promises as fs } from 'fs';
import startCase from 'lodash.startcase';
import path from 'path';

if (!process.env.FIGMA_FILENAME || !process.env.FIGMA_PERSONAL_ACCESS_TOKEN) {
  console.log(
    'You must have .env.local with FIGMA_PERSONAL_ACCESS_TOKEN and FIGMA_FILENAME'
  );
  process.exit();
}

const figmaPersonalAccessToken = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
const figmaFilename = process.env.FIGMA_FILENAME;

const client = Figma.Client({ personalAccessToken: figmaPersonalAccessToken });
const filenameRegex = /([^//]*)_positive$/;
const metadataRegex = /([^/[]*) \[(.*)\]$/;

const ICONS_PATH = path.join(process.cwd(), 'public', 'icons');

function getMetadataFromDescription(name: string, description: string) {
  const metaData = description.match(metadataRegex);
  return metaData && metaData.length > 2
    ? {
        title: metaData[1],
        tags: metaData[2].split(',').map((s) => s.trim())
      }
    : {
        title: startCase(name),
        tags: []
      };
}

client.file(figmaFilename).then(({ data }) => {
  const metaData = [];

  // look for icon components in: "export" with name "/filled/{category}/{name}_positive"
  data.document.children.map((child) => {
    if (child.type === 'CANVAS' && child.name === 'export') {
      child.children.map((component) => {
        if (
          component.type === 'COMPONENT' &&
          component.name.match(/^filled\//)
        ) {
          const idMatch = component.name.match(filenameRegex);
          if (idMatch) {
            const m = getMetadataFromDescription(
              idMatch[1],
              data.components[component.id].description
            );

            metaData.push({
              id: idMatch[1],
              title: m.title,
              tags: m.tags
            });
          } else {
            console.log(`Incorrect id: ${component.name}`);
          }
        }

        return component;
      });
    }
    return child;
  });

  fs.writeFile(
    `${ICONS_PATH}/meta-data.json`,
    JSON.stringify(metaData, null, ' ')
  );
});
