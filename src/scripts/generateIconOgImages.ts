import { getCategoriesAndIcons, Icon } from '../lib/icons';
import sharp from 'sharp';
import TextToSVG from 'text-to-svg';
import mkdirp from 'mkdirp';
import path from 'path';
import cliProgress from 'cli-progress';
import { readdirSync, readFileSync, rmdirSync, statSync, unlinkSync } from 'fs';

const PUBLIC_PATH = path.join(process.cwd(), 'public');
const OUTPUT_PATH = `${PUBLIC_PATH}/og-icon-images`;
const FONT_PATH = path.join(process.cwd(), 'src', 'scripts');
const BLUE = '#474FCA';

const textToSVG = TextToSVG.loadSync(`${FONT_PATH}/Bariol_Regular.otf`);
const textToSVGOptions = {
  fontSize: 72,
  anchor: 'top',
  attributes: { fill: BLUE }
};

async function processIcons() {
  const categories = await getCategoriesAndIcons();
  const icons = categories.flatMap((category) => category.icons);

  const progress = new cliProgress.SingleBar({
    format:
      '🖼️  Processing OG icon images {bar} {percentage}% ({value}/{total})',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
  });

  progress.start(icons.length, 0);
  for (let i = 0; i < icons.length; i++) {
    await createComposite(icons[i]);
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

async function createComposite(icon: Icon) {
  const svgPath = `${PUBLIC_PATH}/icons/svg/filled/${icon.category}/${icon.id}.svg`;
  const iconSvg = readFileSync(svgPath)
    .toString()
    .replace(/#333333/gi, BLUE);

  const outputDir = `${OUTPUT_PATH}/${icon.category}`;
  mkdirp.sync(outputDir);

  const titleSvg = textToSVG.getSVG(`Icon: ${icon.title}`, textToSVGOptions);
  const titleImage = await sharp(Buffer.from(titleSvg), { density: 500 })
    .resize({
      width: 1280,
      height: 50,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();

  const iconImage = await sharp(Buffer.from(iconSvg), { density: 500 })
    .resize({
      width: 1280,
      height: 420,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();

  await sharp(`${PUBLIC_PATH}/og_icon_image.png`)
    .composite([
      { input: titleImage, top: 450, left: 0 },
      { input: iconImage, top: 10, left: 0 }
    ])
    .png()
    .toFile(`${outputDir}/${icon.id}.png`);
}

processIcons();
