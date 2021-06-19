import config from '../config';
import * as Figma from 'figma-js';
import { promises as fs } from 'fs';
import startCase from 'lodash.startcase';
import path from 'path';

if (!config.figma.filename || !config.figma.personalAccessToken) {
  throw new Error(
    'You must have .env.local with FIGMA_PERSONAL_ACCESS_TOKEN and FIGMA_FILENAME'
  );
}

const figmaPersonalAccessToken = config.figma.personalAccessToken;
const figmaFilename = config.figma.filename;

const client = Figma.Client({ personalAccessToken: figmaPersonalAccessToken });
const filenameRegex = /([^//]*)\/([^//]*)\/(.*)$/;
const metadataRegex = /([^/[]*) \[(.*)\]$/;

const ICONS_PATH = path.join(process.cwd(), 'public', 'icons');

function getMetadataFromDescription(name: string, description: string) {
  const metaData = description.match(metadataRegex);
  return metaData && metaData.length > 2
    ? {
        title: metaData[1].trim(),
        tags: metaData[2]
          .split(',')
          .map((tag) => tag.trim())
          .sort()
      }
    : {
        title: startCase(name),
        tags: []
      };
}

client.file(figmaFilename).then(({ data }) => {
  const metaDataArray = [];

  // look for icon components on the page "EXPORT"
  // with names that match the pattern: filled/{category}/{name}
  data.document.children.map((child) => {
    if (child.type === 'CANVAS' && child.name.trim() === 'EXPORT') {
      child.children.map((component) => {
        if (component.type === 'COMPONENT' && component.name) {
          const matches = component.name.match(filenameRegex);
          if (!matches) {
            console.log(`Incorrect id: ${component.name}`);
            return component;
          }

          const [, style, category, name] = matches;

          if (style === 'filled') {
            const metaData = getMetadataFromDescription(
              name,
              data.components[component.id].description
            );

            metaDataArray.push({
              id: name,
              category,
              path: `${category}/${name}`,
              tags: metaData.tags,
              title: metaData.title
            });
          }
        }

        return component;
      });
    }
    return child;
  });

  fs.writeFile(
    `${ICONS_PATH}/meta-data.json`,
    JSON.stringify(metaDataArray, null, ' ')
  );
});
