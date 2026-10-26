import { promises as fs, existsSync } from 'fs';
import path from 'path';
import ts from 'typescript';
import { componentName } from '../lib/componentName';

// Builds the framework packages in packages/ (@healthicons/core, react, vue
// and svelte) from the icons in public/icons: each icon becomes a module with
// its drawings, wrapped for each framework. The output goes in each package's
// dist folder, ready for `npm publish`.

const ROOT = process.cwd();
const ICONS_PATH = path.join(ROOT, 'public', 'icons');
const PACKAGES_PATH = path.join(ROOT, 'packages');

type IconNode = [string, Record<string, string>, IconNode[]?];

interface Drawing {
  size: number;
  nodes: IconNode[];
}

interface IconData {
  name: string;
  category: string;
  outline: Drawing;
  filled: Drawing;
  outline24?: Drawing;
  filled24?: Drawing;
}

interface Icon {
  componentName: string;
  title: string;
  data: IconData;
}

const DRAWINGS = {
  outline: 'outline',
  filled: 'filled',
  outline24: 'outline-24px',
  filled24: 'filled-24px'
} as const;

// Figma exports simple SVGs: elements with attributes and no text. Anything
// else is an error rather than something to guess about.
function parseSvg(source: string, file: string): Drawing {
  const tagPattern =
    /<(\/?)([a-zA-Z][\w:-]*)((?:\s+[\w:-]+="[^"]*")*)\s*(\/?)>/g;
  const root: IconNode = ['root', {}, []];
  const stack: IconNode[] = [root];
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = tagPattern.exec(source))) {
    const between = source.slice(last, match.index);
    if (between.trim() && !/^<\?xml[^>]*\?>\s*$/.test(between.trim())) {
      throw new Error(`${file}: unexpected content "${between.trim()}"`);
    }
    last = tagPattern.lastIndex;
    const [, closing, tag, attributeText, selfClosing] = match;
    if (closing) {
      const open = stack.pop();
      if (!open || open[0] !== tag) {
        throw new Error(`${file}: mismatched </${tag}>`);
      }
      continue;
    }
    const attributes: Record<string, string> = {};
    attributeText.replace(/([\w:-]+)="([^"]*)"/g, (all, name, value) => {
      attributes[name] = value;
      return all;
    });
    const node: IconNode = [tag, attributes];
    const parent = stack[stack.length - 1];
    (parent[2] = parent[2] || []).push(node);
    if (!selfClosing) {
      node[2] = [];
      stack.push(node);
    }
  }
  if (source.slice(last).trim() || stack.length !== 1) {
    throw new Error(`${file}: unexpected end of file`);
  }

  const svg = root[2]?.[0];
  if (!svg || svg[0] !== 'svg' || root[2]?.length !== 1) {
    throw new Error(`${file}: expected one <svg> element`);
  }
  const { width, height, viewBox } = svg[1];
  if (width !== height || viewBox !== `0 0 ${width} ${height}`) {
    throw new Error(`${file}: not square (${width}×${height}, ${viewBox})`);
  }
  return { size: Number(width), nodes: svg[2] || [] };
}

// Tidies a drawing for use on any page:
// - shapes colored black (a few icons) use currentColor like the rest, so the
//   whole icon takes the color it's given. Not inside masks, where black and
//   white mean hidden and shown.
// - ids (only used by masks) are prefixed with the icon and drawing, so two
//   different icons on one page can't clash
function tidyNodes(nodes: IconNode[], idPrefix: string, inMask = false) {
  const ids: Record<string, string> = {};
  const rename = (list: IconNode[]) =>
    list.forEach((node) => {
      if (node[1].id) {
        ids[node[1].id] = `${idPrefix}-${node[1].id}`;
      }
      rename(node[2] || []);
    });
  rename(nodes);

  const tidy = (list: IconNode[], masked: boolean): IconNode[] =>
    list.map(([tag, attributes, children]) => {
      const tidied: Record<string, string> = {};
      Object.entries(attributes).forEach(([name, value]) => {
        let newValue = value;
        if (
          !masked &&
          (name === 'fill' || name === 'stroke') &&
          /^(black|#000|#000000)$/i.test(value)
        ) {
          newValue = 'currentColor';
        }
        if (name === 'id') {
          newValue = ids[value];
        }
        newValue = newValue.replace(
          /url\(#([^)]+)\)/g,
          (all, id) => `url(#${ids[id] || id})`
        );
        tidied[name] = newValue;
      });
      const node: IconNode = [tag, tidied];
      if (children && children.length) {
        if (children.some((child) => child[2] && child[2].length)) {
          // the Svelte component draws two levels; no icon needs more yet
          throw new Error(`${idPrefix}: elements nested too deeply`);
        }
        node[2] = tidy(children, masked || tag === 'mask');
      }
      return node;
    });
  return tidy(nodes, inMask);
}

async function loadIcons(): Promise<Icon[]> {
  const metaData: Array<{ id: string; category: string; title: string }> =
    JSON.parse(
      await fs.readFile(path.join(ICONS_PATH, 'meta-data.json'), 'utf8')
    );

  const icons = await Promise.all(
    metaData.map(async ({ id, category, title }) => {
      const name = componentName(id, title);
      const data: Partial<IconData> = { name: id, category };
      for (const [key, folder] of Object.entries(DRAWINGS)) {
        const file = path.join(
          ICONS_PATH,
          'svg',
          folder,
          category,
          `${id}.svg`
        );
        if (!existsSync(file)) {
          if (key === 'outline' || key === 'filled') {
            throw new Error(`Missing ${folder}/${category}/${id}.svg`);
          }
          continue;
        }
        const drawing = parseSvg(await fs.readFile(file, 'utf8'), file);
        drawing.nodes = tidyNodes(drawing.nodes, `healthicon-${id}-${key}`);
        data[key as keyof typeof DRAWINGS] = drawing;
      }
      return { componentName: name, title, data: data as IconData };
    })
  );

  // names must be unique, also ignoring case (file names on Mac and Windows)
  const seen = new Map<string, Icon>();
  icons.forEach((icon) => {
    const key = icon.componentName.toLowerCase();
    const other = seen.get(key);
    if (other) {
      throw new Error(
        `${icon.data.category}/${icon.data.name} and ${other.data.category}/${other.data.name} would both be called ${icon.componentName}`
      );
    }
    seen.set(key, icon);
  });
  return icons.sort((a, b) => a.componentName.localeCompare(b.componentName));
}

function iconComment(icon: Icon) {
  const page = `https://healthicons.org/icon/outline/${icon.data.category}/${icon.data.name}`;
  return `/** ${icon.title}: ${page} */`;
}

async function write(file: string, contents: string) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, contents);
}

// writes an ES module and its CommonJS copy (dist/esm and dist/cjs)
async function writeModule(dist: string, file: string, source: string) {
  await write(path.join(dist, 'esm', file), source);
  const commonJs = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2018,
      esModuleInterop: true
    }
  }).outputText;
  await write(path.join(dist, 'cjs', file), commonJs);
}

// bundlers read sideEffects from the nearest package.json, so these repeat
// the package's "sideEffects": false: without it esbuild keeps every icon
async function writeModuleTypes(dist: string) {
  await write(
    path.join(dist, 'esm', 'package.json'),
    '{ "type": "module", "sideEffects": false }\n'
  );
  await write(
    path.join(dist, 'cjs', 'package.json'),
    '{ "type": "commonjs", "sideEffects": false }\n'
  );
}

async function readSource(packageName: string, file: string) {
  return fs.readFile(
    path.join(PACKAGES_PATH, packageName, 'src', file),
    'utf8'
  );
}

async function sharedSource() {
  return fs.readFile(path.join(PACKAGES_PATH, 'shared', 'shared.js'), 'utf8');
}

async function writeTypes(
  packageName: string,
  dist: string,
  declarations: string
) {
  const template = await readSource(packageName, 'index.d.ts');
  await write(
    path.join(dist, 'index.d.ts'),
    template.replace('/* ICONS */', declarations)
  );
}

async function cleanDist(packageName: string) {
  const dist = path.join(PACKAGES_PATH, packageName, 'dist');
  await fs.rm(dist, { recursive: true, force: true });
  return dist;
}

async function buildCore(icons: Icon[]) {
  const dist = await cleanDist('core');
  await writeModuleTypes(dist);
  await writeModule(dist, 'shared.js', await sharedSource());
  await writeModule(dist, 'runtime.js', await readSource('core', 'runtime.js'));
  for (const icon of icons) {
    await writeModule(
      dist,
      `icons/${icon.componentName}.js`,
      `export default ${JSON.stringify(icon.data)};\n`
    );
  }
  const exportsList = icons
    .map(
      (icon) =>
        `export { default as ${icon.componentName} } from './icons/${icon.componentName}.js';`
    )
    .join('\n');
  await writeModule(dist, 'icons.js', `${exportsList}\n`);
  await writeModule(
    dist,
    'index.js',
    `export { toSvg, createElement, createIcons } from './runtime.js';\nexport * as icons from './icons.js';\n${exportsList}\n`
  );
  await writeTypes(
    'core',
    dist,
    [
      ...icons.map(
        (icon) =>
          `${iconComment(icon)}\nexport declare const ${
            icon.componentName
          }: HealthIcon;`
      ),
      `/** Every icon, by name. Importing this includes them all. */\nexport declare const icons: {\n${icons
        .map((icon) => `  ${icon.componentName}: HealthIcon;`)
        .join('\n')}\n};`
    ].join('\n')
  );
}

async function buildFrameworkPackage(
  packageName: 'react' | 'vue',
  icons: Icon[]
) {
  const dist = await cleanDist(packageName);
  await writeModuleTypes(dist);
  await writeModule(dist, 'shared.js', await sharedSource());
  await writeModule(
    dist,
    'runtime.js',
    await readSource(packageName, 'runtime.js')
  );
  for (const icon of icons) {
    await writeModule(
      dist,
      `icons/${icon.componentName}.js`,
      `import { createIcon } from '../runtime.js';\nexport default /*#__PURE__*/ createIcon(${JSON.stringify(
        icon.componentName
      )}, ${JSON.stringify(icon.data)});\n`
    );
  }
  await writeModule(
    dist,
    'index.js',
    icons
      .map(
        (icon) =>
          `export { default as ${icon.componentName} } from './icons/${icon.componentName}.js';`
      )
      .join('\n') + '\n'
  );
  await writeTypes(
    packageName,
    dist,
    icons
      .map(
        (icon) =>
          `${iconComment(icon)}\nexport declare const ${
            icon.componentName
          }: HealthIcon;`
      )
      .join('\n')
  );
}

// the events Svelte icons pass on from their <svg>, so on:click and the like
// work on them (Svelte 4 components only pass on the events they list; Svelte
// 5's onclick-style props work without this). Icon.svelte lists them too.
const SVELTE_EVENTS = [
  'click',
  'dblclick',
  'contextmenu',
  'mousedown',
  'mouseup',
  'mouseenter',
  'mouseleave',
  'mouseover',
  'mouseout',
  'pointerdown',
  'pointerup',
  'pointerenter',
  'pointerleave',
  'touchstart',
  'touchend',
  'keydown',
  'keyup',
  'focus',
  'blur'
];

// Svelte packages ship .svelte files, which the app's own build compiles
async function buildSvelte(icons: Icon[]) {
  const dist = await cleanDist('svelte');
  await write(path.join(dist, 'shared.js'), await sharedSource());
  await write(
    path.join(dist, 'Icon.svelte'),
    await readSource('svelte', 'Icon.svelte')
  );
  for (const icon of icons) {
    await write(
      path.join(dist, 'icons', `${icon.componentName}.svelte`),
      `<script>\n  import Icon from '../Icon.svelte';\n  const icon = ${JSON.stringify(
        icon.data
      )};\n</script>\n\n<Icon {icon} {...$$props} ${SVELTE_EVENTS.map(
        (event) => `on:${event}`
      ).join(' ')}><slot /></Icon>\n`
    );
  }
  await write(
    path.join(dist, 'index.js'),
    icons
      .map(
        (icon) =>
          `export { default as ${icon.componentName} } from './icons/${icon.componentName}.svelte';`
      )
      .join('\n') + '\n'
  );
  await writeTypes(
    'svelte',
    dist,
    icons
      .map(
        (icon) =>
          `${iconComment(icon)}\nexport declare class ${
            icon.componentName
          } extends SvelteComponent<HealthIconProps> {}`
      )
      .join('\n')
  );
}

async function buildPackages() {
  const icons = await loadIcons();
  await buildCore(icons);
  await buildFrameworkPackage('react', icons);
  await buildFrameworkPackage('vue', icons);
  await buildSvelte(icons);
  console.log(
    `Built @healthicons/core, react, vue and svelte with ${icons.length} icons`
  );
}

buildPackages().catch((error) => {
  console.error(error);
  process.exit(1);
});
