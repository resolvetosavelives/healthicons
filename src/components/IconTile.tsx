import styles from './IconTile.module.scss';
import { Icon } from '../lib/icons';

// TODO: replace placeholder icons
// import { ReactComponent as DoctorFemale } from '../../public/icons/humans/doctor_female_positive.svg';

interface IconTileProps {
  icon: Icon;
}

export function IconTile(props: IconTileProps) {
  return (
    <div className={styles.iconTile}>
      <div className={styles.iconVariations}>
        <img
          src={`icons/svg/filled/${props.icon.path}`}
          width="48"
          height="48"
          alt=""
        />
        <img
          src={`icons/svg/outline/${props.icon.path}`}
          width="48"
          height="48"
          alt=""
        />
      </div>
      <div className={styles.iconTileLabel}>{props.icon.title}</div>
    </div>
  );
}
