import styles from './IconTile.module.scss';
import { Icon } from '../lib/icons';

// TODO: replace placeholder icons
// import { ReactComponent as DoctorFemale } from '../../public/icons/humans/doctor_female_positive.svg';

interface IconTileProps {
  icon: Icon;
}

export function IconTile(props: IconTileProps) {
  return (
    <div className={styles.iconGroup}>
      <div className={styles.iconItem}>
        <div className={styles.iconThumb}>
          <img
            src={`icons/svg/filled/${props.icon.path}`}
            width="48"
            height="48"
            alt="{props.icon.title} filled icon"
          />
        </div>
        <div className={styles.iconTitle}>{props.icon.title}</div>
      </div>
      <div className={styles.iconItem}>
        <div className={styles.iconThumb}>
          <img
            src={`icons/svg/outline/${props.icon.path}`}
            width="48"
            height="48"
            alt="{props.icon.title} outline icon"
          />
        </div>
        <div className={styles.iconTitle}>{props.icon.title}</div>
      </div>
    </div>
  );
}
