import { getCategoriesAndIcons, Icon } from '../lib/icons';
import sharp from 'sharp';
import TextToSVG from 'text-to-svg';
import mkdirp from 'mkdirp';
import path from 'path';
import cliProgress from 'cli-progress';
import { readdirSync, readFileSync, rmdirSync, statSync, unlinkSync } from 'fs';

// Makes the image shown when an icon's page is shared (on social media, in
// chat apps...): the icon in purple on a tile, with "Free health icon:", its
// name and healthicons.org beside it. Runs as part of `yarn update-icons`.

const PUBLIC_PATH = path.join(process.cwd(), 'public');
const OUTPUT_PATH = `${PUBLIC_PATH}/og-icon-images`;
const FONT_PATH = path.join(process.cwd(), 'src', 'scripts');

// 1.91:1, the shape social sites and chat apps expect (the icon pages tell
// them this size)
const WIDTH = 1200;
const HEIGHT = 630;

// the site's colors
const PURPLE = '#6666ff';
const TILE = '#ebebff';
const TEXT = '#063f39';
const MUTED = '#6b6b80';
const LINK = '#4a4ad9';

const TILE_LEFT = 100;
const TILE_SIZE = 380;
const ICON_SIZE = 260;
const TEXT_LEFT = 560;
const TEXT_MAX_WIDTH = WIDTH - TEXT_LEFT - 80;

const font = TextToSVG.loadSync(`${FONT_PATH}/Bariol_Regular.otf`);

// the logo's shapes, without its <svg> (it's drawn on a 128 grid)
const LOGO = readFileSync(`${PUBLIC_PATH}/health-icons-logo.svg`, 'utf8')
  .replace(/^[\s\S]*?<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '');

function text(
  content: string,
  x: number,
  y: number,
  size: number,
  fill: string
) {
  return font.getPath(content, {
    x,
    y,
    fontSize: size,
    anchor: 'left baseline',
    attributes: { fill }
  });
}

// the name split into lines that fit beside the tile (up to three), in the
// largest of a few sizes that works
function titleLines(title: string) {
  for (const size of [88, 76, 64, 54]) {
    const lines: string[] = [];
    let line = '';
    for (const word of title.split(' ')) {
      const longer = line ? `${line} ${word}` : word;
      if (
        !line ||
        font.getMetrics(longer, { fontSize: size }).width <= TEXT_MAX_WIDTH
      ) {
        line = longer;
      } else {
        lines.push(line);
        line = word;
      }
    }
    lines.push(line);
    const widest = Math.max(
      ...lines.map((l) => font.getMetrics(l, { fontSize: size }).width)
    );
    if (lines.length <= 3 && widest <= TEXT_MAX_WIDTH) {
      return { size, lines };
    }
  }
  return { size: 54, lines: [title] };
}

function cardSvg(icon: Icon) {
  // the filled icon's shapes, in purple (the SVGs use currentColor, and a
  // few have black). They're drawn in a group with fill="none", like the
  // <svg> they came from, for shapes that are only outlined
  const iconShapes = readFileSync(
    `${PUBLIC_PATH}/icons/svg/filled/${icon.category}/${icon.id}.svg`,
    'utf8'
  )
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/currentColor/g, PURPLE)
    .replace(/(fill|stroke)="black"/g, `$1="${PURPLE}"`);
  const tileTop = (HEIGHT - TILE_SIZE) / 2;
  const iconLeft = TILE_LEFT + (TILE_SIZE - ICON_SIZE) / 2;
  const iconTop = tileTop + (TILE_SIZE - ICON_SIZE) / 2;
  // icons are drawn on a 48 grid
  const iconScale = ICON_SIZE / 48;

  // "Free health icon:", the name, then the logo and address, centered as a
  // block beside the tile
  const { size, lines } = titleLines(icon.title);
  const lineHeight = size * 1.08;
  const labelSize = 32;
  const labelGap = 26 + size * 0.78;
  const brandGap = 56;
  const brandHeight = 44;
  const blockHeight =
    labelSize +
    labelGap +
    (lines.length - 1) * lineHeight +
    brandGap +
    brandHeight;
  const top = HEIGHT / 2 - blockHeight / 2;
  const titleTop = top + labelSize + labelGap;
  const brandTop = titleTop + (lines.length - 1) * lineHeight + brandGap;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#fff"/>
  <rect width="${WIDTH}" height="12" fill="${PURPLE}"/>
  <rect x="${TILE_LEFT}" y="${tileTop}" width="${TILE_SIZE}" height="${TILE_SIZE}" rx="56" fill="${TILE}"/>
  <g transform="translate(${iconLeft} ${iconTop}) scale(${iconScale})" fill="none">${iconShapes}</g>
  ${text(
    'Free health icon:',
    TEXT_LEFT,
    top + labelSize * 0.8,
    labelSize,
    MUTED
  )}
  ${lines
    .map((line, i) =>
      text(line, TEXT_LEFT, titleTop + i * lineHeight, size, TEXT)
    )
    .join('\n  ')}
  <g transform="translate(${TEXT_LEFT} ${brandTop}) scale(${
    brandHeight / 128
  })">${LOGO}</g>
  ${text(
    'healthicons.org',
    TEXT_LEFT + brandHeight + 12,
    brandTop + 32,
    32,
    LINK
  )}
</svg>`;
}

async function createImage(icon: Icon) {
  const outputDir = `${OUTPUT_PATH}/${icon.category}`;
  mkdirp.sync(outputDir);
  // flat colors, so a 64-color palette looks the same as full color at a
  // fraction of the size (around 15 KB)
  await sharp(Buffer.from(cardSvg(icon)))
    .png({ palette: true, colours: 64, compressionLevel: 9, effort: 10 })
    .toFile(`${outputDir}/${icon.id}.png`);
}

async function processIcons() {
  const categories = await getCategoriesAndIcons();
  const icons = categories.flatMap((category) => category.icons);

  const progress = new cliProgress.SingleBar({
    format:
      '🖼️  Processing OG icon images {bar} {percentage}% ({value}/{total})',
    barCompleteChar: '█',
    barIncompleteChar: '░',
    hideCursor: true
  });

  progress.start(icons.length, 0);
  for (let i = 0; i < icons.length; i++) {
    await createImage(icons[i]);
    progress.increment();
  }

  progress.stop();

  removeStaleImages(icons);
}

// deletes the images of icons that were renamed or removed (and any category
// folders left empty), so they aren't deployed with the site. Files directly
// in the output folder, like og_image.png, aren't icon images and are kept.
function removeStaleImages(icons: Icon[]) {
  const current = new Set(
    icons.map((icon) => `${icon.category}/${icon.id}.png`)
  );
  let removed = 0;
  for (const category of readdirSync(OUTPUT_PATH)) {
    const categoryDir = `${OUTPUT_PATH}/${category}`;
    if (!statSync(categoryDir).isDirectory()) {
      continue;
    }
    for (const fileName of readdirSync(categoryDir)) {
      if (!current.has(`${category}/${fileName}`)) {
        unlinkSync(`${categoryDir}/${fileName}`);
        removed++;
      }
    }
    if (readdirSync(categoryDir).length === 0) {
      rmdirSync(categoryDir);
    }
  }
  console.log(`Removed ${removed} stale OG icon images`);
}

processIcons();
