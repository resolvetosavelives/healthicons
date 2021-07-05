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

const allComponents = [];

function getMetadataFromDescription(name: string, description: string) {
  const metaData = description.trim().match(metadataRegex);
  if (!metaData || metaData.length < 3) {
    console.log(
      `Missing or incorrectly formatted title/tags for component: ${name}. Found: ${description}`
    );
  }

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

function verifyStyleExists(components, name, style) {
  if (
    !components.some((c) => {
      return c.name === name && c.style === style;
    })
  ) {
    console.log(`Missing ${style} version of: ${name}`);
  }
}

function verifyNameIsUnique(components, category, name) {
  const matches = components.filter((c) => {
    return c.name === name && c.category === category && c.style === 'filled';
  });

  if (matches.length !== 1) {
    console.log(`More than one component is named: ${name}`);
  }
}

client.file(figmaFilename).then(({ data }) => {
  const metaDataArray = [];

  // look for icon components on the page "Export"
  // with names that match the pattern: filled/{category}/{name}
  data.document.children.map((child) => {
    if (
      child.type === 'CANVAS' &&
      child.name.trim().toLowerCase() === 'export'
    ) {
      child.children.map((component) => {
        if (component.type === 'COMPONENT' && component.name) {
          const matches = component.name.match(filenameRegex);
          if (!matches) {
            console.log(`Incorrect id: ${component.name}`);
            return component;
          }

          const [, style, category, name] = matches;
          const description = data.components[component.id].description;

          allComponents.push({
            style,
            category,
            name,
            description
          });
        }

        return component;
      });
    }
    return child;
  });

  allComponents.map((component) => {
    if (component.style === 'filled') {
      verifyStyleExists(allComponents, component.name, 'outline');
      verifyStyleExists(allComponents, component.name, 'negative');
      verifyNameIsUnique(allComponents, component.category, component.name);

      const metaData = getMetadataFromDescription(
        component.name,
        component.description
      );

      metaDataArray.push({
        id: component.name,
        category: component.category,
        path: `${component.category}/${component.name}`,
        tags: metaData.tags,
        title: metaData.title
      });
    } else {
      verifyStyleExists(allComponents, component.name, 'filled');
    }

    return component;
  });

  fs.writeFile(
    `${ICONS_PATH}/meta-data.json`,
    JSON.stringify(metaDataArray, null, ' ')
  );
});
