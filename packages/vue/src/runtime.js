import { defineComponent, h } from 'vue';
import { DEFAULT_SIZE, getDrawing, svgAttributes } from './shared.js';

function renderNode(node) {
  return h(node[0], node[1], node[2] && node[2].map(renderNode));
}

export function createIcon(name, icon) {
  return defineComponent({
    name,
    props: {
      variant: { type: String, default: 'outline' },
      size: { type: [Number, String], default: DEFAULT_SIZE },
      color: { type: String, default: undefined },
      title: { type: String, default: undefined }
    },
    setup(props, { attrs, slots }) {
      return () => {
        const drawing = getDrawing(icon, props.variant, props.size);
        // other attributes (class, style, aria-label...) are added by Vue
        return h(
          'svg',
          svgAttributes(icon, drawing, {
            size: props.size,
            color: props.color,
            title: props.title,
            'aria-label': attrs['aria-label'],
            'aria-labelledby': attrs['aria-labelledby']
          }),
          [
            ...(props.title ? [h('title', props.title)] : []),
            ...drawing.nodes.map(renderNode),
            ...(slots.default ? slots.default() : [])
          ]
        );
      };
    }
  });
}
