import { LazyLoadComponent } from 'react-lazy-load-image-component';
import classnames from 'classnames';

interface IconImageProps {
  src: string;
  alt: string;
  size: number;
  // when true the icon is drawn in the user's chosen color (the --icon-color
  // CSS variable) using the SVG as a mask; otherwise the SVG is shown as-is
  colored: boolean;
  lazy?: boolean;
  className?: string;
}

export function IconImage({
  src,
  alt,
  size,
  colored,
  lazy = false,
  className
}: IconImageProps) {
  if (!colored) {
    // a plain <img> (lazy-loaded natively by the browser) so the image and its
    // alt text are in the page's HTML for search engines
    return (
      <img
        src={src}
        width={size}
        height={size}
        alt={alt}
        loading={lazy ? 'lazy' : undefined}
        decoding="async"
        // icon-image: shown light in night mode (see global.css)
        className={classnames('icon-image', className)}
      />
    );
  }

  const mask = (
    <span
      role="img"
      aria-label={alt}
      className={classnames('icon-mask', className)}
      style={{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`
      }}
    />
  );

  return lazy ? <LazyLoadComponent>{mask}</LazyLoadComponent> : mask;
}
