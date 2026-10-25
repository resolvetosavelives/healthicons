import { promises as fs } from 'fs';
import path from 'path';

// Tidies the SVGs exported from Figma so every icon can be recolored: black
// (fills and outlines) becomes currentColor, and white backgrounds go. Runs
// as part of `yarn update-icons`, before anything is made from the SVGs.

const SVG_PATH = path.join(process.cwd(), 'public', 'icons', 'svg');

// the ways Figma writes the icon color (#333333 was the old icon color)
const BLACK = /^(black|#000|#000000|#333|#333333)$/i;
const WHITE = /^(white|#fff|#ffffff)$/i;

// a full-size rectangle with no fill or a white one: a background
const BACKGROUND =
  /<rect width="(48|24)" height="\1"(?: fill="([^"]*)")?\/>\n?/g;

// recolors the attributes of the elements in one stretch of SVG
function recolor(svg: string) {
  return svg.replace(
    /\s(fill|stroke)="([^"]*)"/g,
    (attribute, name: string, value: string) => {
      if (BLACK.test(value)) {
        return ` ${name}="currentColor"`;
      }
      if (name === 'fill' && WHITE.test(value)) {
        return ' fill="none"';
      }
      return attribute;
    }
  );
}

export function cleanSvg(svg: string) {
  const withoutBackground = svg.replace(
    BACKGROUND,
    (rect, size, fill: string | undefined) =>
      !fill || fill === 'none' || WHITE.test(fill) ? '' : rect
  );
  // masks are left alone: in them black and white mean hidden and shown
  return withoutBackground
    .split(/(<mask[\s\S]*?<\/mask>)/)
    .map((part) => (part.startsWith('<mask') ? part : recolor(part)))
    .join('');
}

async function svgFiles(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return svgFiles(file);
      }
      return entry.name.endsWith('.svg') ? [file] : [];
    })
  );
  return files.flat();
}

async function cleanSvgs() {
  const files = await svgFiles(SVG_PATH);
  let changed = 0;
  for (const file of files) {
    const svg = await fs.readFile(file, 'utf8');
    const cleaned = cleanSvg(svg);
    if (cleaned !== svg) {
      await fs.writeFile(file, cleaned);
      changed++;
    }
  }
  console.log(`Cleaned ${changed} of ${files.length} SVGs`);
}

if (require.main === module) {
  cleanSvgs();
}
