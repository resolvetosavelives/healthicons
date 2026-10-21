import { SvelteComponent } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export interface HealthIconProps
  extends Omit<SVGAttributes<SVGSVGElement>, 'color'> {
  /** default "outline" */
  variant?: 'outline' | 'filled';
  /** width and height; default 24. Icons with a 24px drawing use it at 24px and smaller */
  size?: number | string;
  /** default: the surrounding text color */
  color?: string;
  /** shown as a tooltip and read by screen readers; without it (or an aria-label) the icon is hidden from them */
  title?: string;
}

/* ICONS */
