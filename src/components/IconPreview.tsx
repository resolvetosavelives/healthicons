import { ReactNode } from 'react';
import styles from './Packages.module.scss';

// the icons used in the packages pages (category/name). All but the AI
// sparkle have versions drawn for small sizes; it's only shown at "1em", which
// uses the standard drawing.
export type PreviewIconName =
  | 'blood/blood-bag'
  | 'body/dna'
  | 'body/lungs'
  | 'devices/stethoscope'
  | 'devices/syringe'
  | 'medications/medicines'
  | 'people/doctor'
  | 'places/hospital'
  | 'symbols/artificial-intelligence'
  | 'symbols/heart'
  | 'symbols/virus'
  | 'vehicles/ambulance'
  | 'zoonoses/mosquito';

interface IconPreviewProps {
  icon: PreviewIconName;
  variant?: 'outline' | 'filled';
  size?: number | string;
  color?: string;
  title?: string;
}

// An icon drawn the way the packages draw it, for showing what the examples'
// code makes: the 24px drawing at 24px and smaller, in the text color unless
// given another. (The site can't use the packages themselves, which are built
// separately.)
export function IconPreview({
  icon,
  variant = 'outline',
  size = 24,
  color,
  title
}: IconPreviewProps) {
  const small = typeof size === 'number' && size <= 24;
  const src = `/icons/svg/${variant}${small ? '-24px' : ''}/${icon}.svg`;
  return (
    <span
      className={styles.previewIcon}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      title={title}
      style={{
        width: size,
        height: size,
        color,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`
      }}
    />
  );
}

// looks like a button, for showing an icon in one (it isn't one, so it can't
// be clicked or tabbed to)
export function PreviewButton({ children }: { children: ReactNode }) {
  return <span className={styles.previewButton}>{children}</span>;
}
