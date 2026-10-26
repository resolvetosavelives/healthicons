import { createElement, forwardRef } from 'react';
import { DEFAULT_SIZE, getDrawing, svgAttributes } from './shared.js';

// the icons' drawings use SVG attribute names (fill-rule); React wants
// fillRule. Converted once per icon, the first time it's drawn.
function toReactNodes(nodes) {
  return nodes.map((node, index) => [
    node[0],
    toReactProps(node[1], index),
    node[2] && toReactNodes(node[2])
  ]);
}

function toReactProps(attributes, key) {
  const props = { key };
  Object.keys(attributes).forEach((name) => {
    const reactName =
      name === 'class'
        ? 'className'
        : /^(aria|data)-/.test(name)
        ? name
        : name.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
    props[reactName] = attributes[name];
  });
  return props;
}

function renderNode(node) {
  return createElement(node[0], node[1], node[2] && node[2].map(renderNode));
}

export function createIcon(displayName, icon) {
  const reactNodes = new Map();

  const Icon = forwardRef(function HealthIcon(props, ref) {
    const {
      variant,
      size = DEFAULT_SIZE,
      color,
      title,
      className,
      children,
      ...rest
    } = props;
    const drawing = getDrawing(icon, variant, size);
    if (!reactNodes.has(drawing)) {
      reactNodes.set(drawing, toReactNodes(drawing.nodes));
    }
    const svgProps = toReactProps(
      svgAttributes(icon, drawing, {
        size,
        color,
        title,
        class: className,
        'aria-label': rest['aria-label'],
        'aria-labelledby': rest['aria-labelledby']
      })
    );
    delete svgProps.key;
    return createElement(
      'svg',
      { ...svgProps, ...rest, ref },
      title ? createElement('title', null, title) : null,
      reactNodes.get(drawing).map(renderNode),
      children
    );
  });
  Icon.displayName = displayName;
  return Icon;
}
