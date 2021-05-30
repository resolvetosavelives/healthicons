import classnames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './IconTile.module.scss';
import { Icon } from '../lib/icons';

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
          <LazyLoadImage
            src={`icons/svg/filled/${props.icon.path}`}
            width="48"
            height="48"
            alt={`${props.icon.title} outline icon`}
            effect="blur"
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
