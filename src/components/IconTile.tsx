import styles from './IconTile.module.scss';
import { Icon } from '../lib/icons';
import classnames from 'classnames';

// TODO: replace placeholder icons
// import { ReactComponent as DoctorFemale } from '../../public/icons/humans/doctor_female_positive.svg';

interface IconTileProps {
  icon: Icon;
  visible: boolean;
  onClick: () => void;
}

export function IconTile(props: IconTileProps) {
  const classes = classnames(styles.iconGroup, {
    [styles.hidden]: !props.visible
  });

  return (
    <div className={classes} onClick={props.onClick}>
      <div className={styles.iconItem}>
        <div className={styles.iconThumb}>
          <img
            src={`icons/svg/filled/${props.icon.path}`}
            width="48"
            height="48"
            alt={`${props.icon.title} outline icon`}
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
            alt={`${props.icon.title} outline icon`}
          />
        </div>
        <div className={styles.iconTitle}>{props.icon.title}</div>
      </div>
    </div>
  );
}
