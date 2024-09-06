import classnames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import styles from './IconTile.module.scss';
import { Icon } from '../lib/icons';
import { SearchStyle, SearchFormat } from '../store/search';

interface IconTileProps {
  icon: Icon;
  visible: boolean;
  iconStyle: SearchStyle;
  iconFormat: SearchFormat;
  onClick: (type: string) => void;
}

export function IconTile(props: IconTileProps) {
  const classes = classnames(styles.iconGroup, {
    [styles.hidden]: !props.visible
  });

  const formatSuffix = props.iconFormat === '24px' ? '-24px' : '';

  return (
    <div className={classes}>
      {['all', 'filled'].includes(props.iconStyle) && (
        <button
          className={styles.iconItem}
          onClick={() => {
            props.onClick.call(this, 'filled');
          }}
        >
          <div className={styles.iconThumb}>
            <LazyLoadImage
              src={`/icons/svg/filled${formatSuffix}/${props.icon.category}/${props.icon.id}.svg`}
              width="48"
              height="48"
              alt={`${props.icon.title} outline icon`}
              effect="opacity"
            />
          </div>
        </button>
      )}
      {['all', 'outline'].includes(props.iconStyle) && (
        <button
          className={styles.iconItem}
          onClick={() => {
            props.onClick.call(this, 'outline');
          }}
        >
          <div className={styles.iconThumb}>
            <LazyLoadImage
              src={`/icons/svg/outline${formatSuffix}/${props.icon.category}/${props.icon.id}.svg`}
              width="48"
              height="48"
              alt={`${props.icon.title} outline icon`}
              effect="opacity"
            />
          </div>
        </button>
      )}
      <div className={styles.iconTitle}>
        {props.icon.title}
        {props.icon.has24pxVersion && <span> (24px)</span>}
      </div>
    </div>
  );
}
