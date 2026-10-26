// Shared by every package (copied into each one's dist by
// src/scripts/buildPackages.ts).
//
// An icon is { name, outline, filled, outline24?, filled24? }. Each drawing is
// { size, nodes }, where size is the grid it was drawn on (48 or 24) and each
// node is [tag, attributes, children?].

export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

export const DEFAULT_SIZE = 24;

// The drawing for a variant ('outline' or 'filled') shown at a size: icons
// with a version drawn for 24px use it at 24px and smaller, where the 48px
// drawing's details get too fine.
export function getDrawing(icon, variant, size) {
  const style = variant === 'filled' ? 'filled' : 'outline';
  const pixels =
    typeof size === 'number'
      ? size
      : /^\s*\d+(\.\d+)?(px)?\s*$/.test(String(size))
      ? parseFloat(size)
      : NaN;
  return (pixels <= 24 && icon[style + '24']) || icon[style];
}

// The attributes on the <svg> element (as plain SVG attribute names). Icons
// are hidden from screen readers unless given a title or an aria label.
export function svgAttributes(icon, drawing, options) {
  const labelled =
    options.title || options['aria-label'] || options['aria-labelledby'];
  const attributes = {
    xmlns: SVG_NAMESPACE,
    width: options.size,
    height: options.size,
    viewBox: '0 0 ' + drawing.size + ' ' + drawing.size,
    fill: 'none',
    class: ['healthicon', 'healthicon-' + icon.name, options.class]
      .filter(Boolean)
      .join(' ')
  };
  if (options.color) {
    // the shapes are filled with currentColor
    attributes.color = options.color;
  }
  if (labelled) {
    attributes.role = 'img';
  } else {
    attributes['aria-hidden'] = 'true';
  }
  return attributes;
}
