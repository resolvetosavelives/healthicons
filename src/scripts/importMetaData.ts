import config from '../config';
import * as Figma from 'figma-js';
import { promises as fs } from 'fs';
import startCase from 'lodash.startcase';
import { IconFormat } from '../lib/icons';
import path from 'path';
// import cliProgress from 'cli-progress';

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
      ` ⚠️ Missing or incorrectly formatted title/tags for component: ${name}. Found: ${description}`
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

function styleExists(components, name, style) {
  return components.some((c) => {
    return c.name === name && c.style === style;
  });
}

function verifyStyleExists(components, name, style) {
  if (!styleExists(components, name, style)) {
    console.log(` ⚠️ Missing ${style} version of: ${name}`);
  }
}

function verifyNameIsUnique(components, category, name) {
  const matches = components.filter((c) => {
    return c.name === name && c.category === category && c.style === 'filled';
  });

  if (matches.length !== 1) {
    console.log(` ⚠️ More than one component is named: ${name}`);
  }
}

function has24pxVersion(components, name) {
  return (
    styleExists(components, name, 'filled-24px') &&
    styleExists(components, name, 'outline-24px')
  );
}

console.log('🔎 Reading data from Figma');
client.file(figmaFilename).then(({ data }) => {
  const metaDataArray = [];

  // look for icon components on the page "Export"
  // with names that match the pattern: filled/{category}/{name}
  console.log(' 🏭 Validating & processing icons');
  data.document.children.map((child) => {
    if (
      child.type === 'CANVAS' &&
      child.name.trim().toLowerCase() === 'export'
    ) {
      child.children.map((component) => {
        if (component.type === 'COMPONENT' && component.name) {
          const matches = component.name.match(filenameRegex);
          if (!matches) {
            console.log(` ⚠️ incorrect id: ${component.name}`);
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
        title: metaData.title,
        formats: has24pxVersion(allComponents, component.name)
          ? (['24px', '48px'] as IconFormat[])
          : (['48px'] as IconFormat[])
      });
    } else {
      verifyStyleExists(allComponents, component.name, 'filled');
    }

    return component;
  });

  console.log(' 💾 Writing JSON file');
  fs.writeFile(
    `${ICONS_PATH}/meta-data.json`,
    JSON.stringify(metaDataArray, null, ' ')
  );
});
