import {
  DEFAULT_SIZE,
  SVG_NAMESPACE,
  getDrawing,
  svgAttributes
} from './shared.js';

function escape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function attributesToString(attributes) {
  return Object.keys(attributes)
    .filter((key) => attributes[key] !== undefined && attributes[key] !== null)
    .map((key) => ' ' + key + '="' + escape(attributes[key]) + '"')
    .join('');
}

function nodeToString(node) {
  const children = node[2] ? node[2].map(nodeToString).join('') : '';
  return (
    '<' +
    node[0] +
    attributesToString(node[1]) +
    (children ? '>' + children + '</' + node[0] + '>' : '/>')
  );
}

// the <svg> element's attributes: ours, then any extra ones passed in (with
// classes added to ours rather than replacing them)
function rootAttributes(icon, options) {
  const {
    variant,
    size = DEFAULT_SIZE,
    color,
    title,
    class: className,
    ...extra
  } = options || {};
  const drawing = getDrawing(icon, variant, size);
  const attributes = {
    ...svgAttributes(icon, drawing, {
      size,
      color,
      title,
      'aria-label': extra['aria-label'],
      'aria-labelledby': extra['aria-labelledby']
    }),
    ...extra
  };
  attributes.class = svgAttributes(icon, drawing, { class: className }).class;
  return { drawing, title, attributes };
}

/**
 * The icon as an SVG string.
 *
 * toSvg(BloodBag, { variant: 'filled', size: 32, color: '#6666ff' })
 */
export function toSvg(icon, options) {
  const { drawing, title, attributes } = rootAttributes(icon, options);
  return (
    '<svg' +
    attributesToString(attributes) +
    '>' +
    (title ? '<title>' + escape(title) + '</title>' : '') +
    drawing.nodes.map(nodeToString).join('') +
    '</svg>'
  );
}

function nodeToElement(node) {
  const element = document.createElementNS(SVG_NAMESPACE, node[0]);
  Object.keys(node[1]).forEach((key) =>
    element.setAttribute(key, node[1][key])
  );
  (node[2] || []).forEach((child) => element.appendChild(nodeToElement(child)));
  return element;
}

/**
 * The icon as an <svg> element, ready to add to the page.
 *
 * document.body.append(createElement(BloodBag, { size: 32 }))
 */
export function createElement(icon, options) {
  const { drawing, title, attributes } = rootAttributes(icon, options);
  const element = nodeToElement(['svg', {}, drawing.nodes]);
  Object.keys(attributes)
    .filter((key) => attributes[key] !== undefined && attributes[key] !== null)
    .forEach((key) => element.setAttribute(key, attributes[key]));
  if (title) {
    const titleElement = document.createElementNS(SVG_NAMESPACE, 'title');
    titleElement.textContent = title;
    element.insertBefore(titleElement, element.firstChild);
  }
  return element;
}

/**
 * Replaces placeholders like <i data-healthicon="blood-bag"></i> with icons.
 * Placeholders can set data-variant, data-size, data-color and data-title;
 * their other attributes (class, aria-label...) carry over to the icon.
 *
 * createIcons({ icons: { BloodBag, Heart } })
 * createIcons({ icons }) // every icon: simple, but includes them all
 */
export function createIcons(options) {
  const {
    icons,
    attrs = {},
    nameAttr = 'data-healthicon',
    root = document
  } = options || {};
  if (!icons) {
    throw new Error('createIcons needs the icons to use: { icons: {...} }');
  }
  const byName = {};
  Object.keys(icons).forEach((key) => {
    byName[icons[key].name] = icons[key];
  });

  root.querySelectorAll('[' + nameAttr + ']').forEach((placeholder) => {
    const name = placeholder.getAttribute(nameAttr);
    const icon = byName[name];
    if (!icon) {
      console.warn('Health Icons: no icon called "' + name + '"');
      return;
    }
    const fromPlaceholder = {};
    Array.from(placeholder.attributes).forEach((attribute) => {
      const match = /^data-(variant|size|color|title)$/.exec(attribute.name);
      if (match) {
        fromPlaceholder[match[1]] = attribute.value;
      } else if (attribute.name !== nameAttr) {
        fromPlaceholder[attribute.name] = attribute.value;
      }
    });
    if (fromPlaceholder.class && attrs.class) {
      fromPlaceholder.class = attrs.class + ' ' + fromPlaceholder.class;
    }
    placeholder.replaceWith(
      createElement(icon, { ...attrs, ...fromPlaceholder })
    );
  });
}
