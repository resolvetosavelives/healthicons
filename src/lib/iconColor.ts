// Icons are single-color SVGs drawn with `currentColor` (a handful use
// `stroke="black"`), so recoloring one is a matter of swapping those values.

const HEX_COLOR = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;

// returns a normalized "#rrggbb" value, or null if the input isn't a hex color
export function parseHexColor(value: string): string | null {
  const match = value.trim().match(HEX_COLOR);
  if (!match) {
    return null;
  }
  let hex = match[1].toLowerCase();
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('');
  }
  return `#${hex}`;
}

export function colorizeSvg(svg: string, color: string): string {
  if (!color) {
    return svg;
  }
  return svg
    .replace(/"currentColor"/g, `"${color}"`)
    .replace(/(fill|stroke)="black"/g, `$1="${color}"`);
}

export function svgDataUrl(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// renders the SVG to a square PNG of the given size and downloads it
export function downloadSvgAsPng(svg: string, size: number, filename: string) {
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    canvas.getContext('2d').drawImage(image, 0, 0, size, size);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = filename;
    link.click();
  };
  image.src = svgDataUrl(svg);
}
