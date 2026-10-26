export type IconNode = [
  tag: string,
  attributes: Record<string, string>,
  children?: IconNode[]
];

export interface IconDrawing {
  /** the grid it's drawn on: 48, or 24 for the versions made for small sizes */
  size: 48 | 24;
  nodes: IconNode[];
}

export interface HealthIcon {
  /** the icon's name on healthicons.org, e.g. "blood-bag" */
  name: string;
  category: string;
  outline: IconDrawing;
  filled: IconDrawing;
  outline24?: IconDrawing;
  filled24?: IconDrawing;
}

export interface IconOptions {
  /** default "outline" */
  variant?: 'outline' | 'filled';
  /** width and height; default 24. Icons with a 24px drawing use it at 24px and smaller */
  size?: number | string;
  /** default: the surrounding text color */
  color?: string;
  /** shown as a tooltip and read by screen readers; without it (or an aria-label) the icon is hidden from them */
  title?: string;
  /** any other attributes for the <svg> element */
  [attribute: string]: string | number | undefined;
}

/** The icon as an SVG string. */
export declare function toSvg(icon: HealthIcon, options?: IconOptions): string;

/** The icon as an <svg> element. */
export declare function createElement(
  icon: HealthIcon,
  options?: IconOptions
): SVGSVGElement;

/** Replaces placeholders like <i data-healthicon="blood-bag"></i> with icons. */
export declare function createIcons(options: {
  icons: Record<string, HealthIcon>;
  /** options for every icon */
  attrs?: IconOptions;
  /** default "data-healthicon" */
  nameAttr?: string;
  /** default document */
  root?: ParentNode;
}): void;

/* ICONS */
