import classnames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './IconTile.module.scss';
import { Icon } from '../lib/icons';

interface IconTileProps {
  icon: Icon;
  visible: boolean;
  onClick: (type: string) => void;
}

export function IconTile(props: IconTileProps) {
  const classes = classnames(styles.iconGroup, {
    [styles.hidden]: !props.visible
  });

  return (
    <div className={classes}>
      <button
        className={styles.iconItem}
        onClick={() => {
          props.onClick.call(this, 'filled');
        }}
      >
        <div className={styles.iconThumb}>
          <LazyLoadImage
            src={`icons/svg/filled/${props.icon.path}/${props.icon.fileName}.svg`}
            width="48"
            height="48"
            alt={`${props.icon.title} outline icon`}
            effect="blur"
          />
        </div>
        <div className={styles.iconTitle}>{props.icon.title}</div>
      </button>
      <button
        className={styles.iconItem}
        onClick={() => {
          props.onClick.call(this, 'outline');
        }}
      >
        <div className={styles.iconThumb}>
          <LazyLoadImage
            src={`icons/svg/outline/${props.icon.path}/${props.icon.fileName}.svg`}
            width="48"
            height="48"
            alt={`${props.icon.title} outline icon`}
            effect="blur"
          />
        </div>
        <div className={styles.iconTitle}>{props.icon.title}</div>
      </button>
    </div>
  );
}
