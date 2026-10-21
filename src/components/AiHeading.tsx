import { IconPreview } from './IconPreview';
import styles from './Packages.module.scss';

// "Using AI?" with a sparkle, heading the AI prompt (on /packages) and the
// link to it (on each package page)
export function AiHeading({
  id,
  className
}: {
  id?: string;
  className?: string;
}) {
  return (
    <h2 id={id} className={className}>
      Using AI?
      <span className={styles.aiSparkle}>
        <IconPreview
          icon="symbols/artificial-intelligence"
          variant="filled"
          size="1em"
          color="var(--link-color)"
        />
      </span>
    </h2>
  );
}
