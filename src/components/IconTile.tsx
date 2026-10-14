import classnames from 'classnames';
import { IconImage } from './IconImage';
import styles from './IconTile.module.scss';
import { Icon, IconFormat } from '../lib/icons';
import { SearchStyle } from '../store/search';

interface IconTileProps {
  icon: Icon;
  visible: boolean;
  iconStyle: SearchStyle;
  iconFormat: IconFormat;
  colored: boolean;
  onClick: (type: string) => void;
}

export function IconTile(props: IconTileProps) {
  const classes = classnames(styles.iconGroup, {
    [styles.hidden]: !props.visible,
    [styles.small]: props.iconFormat === '24px'
  });

  const formatSuffix = props.iconFormat === '24px' ? '-24px' : '';

  return (
    <div className={classes}>
      <div className={styles.iconRow}>
        {['all', 'filled'].includes(props.iconStyle) && (
          <button
            className={styles.iconItem}
            title={`${props.icon.title} (filled)`}
            onClick={() => {
              props.onClick.call(this, 'filled');
            }}
          >
            <div className={styles.iconThumb}>
              <IconImage
                src={`/icons/svg/filled${formatSuffix}/${props.icon.category}/${props.icon.id}.svg`}
                size={48}
                alt={`${props.icon.title} filled icon`}
                colored={props.colored}
                lazy={true}
                className={styles.iconImage}
              />
            </div>
          </button>
        )}
        {['all', 'outline'].includes(props.iconStyle) && (
          <button
            className={styles.iconItem}
            title={`${props.icon.title} (outline)`}
            onClick={() => {
              props.onClick.call(this, 'outline');
            }}
          >
            <div className={styles.iconThumb}>
              <IconImage
                src={`/icons/svg/outline${formatSuffix}/${props.icon.category}/${props.icon.id}.svg`}
                size={48}
                alt={`${props.icon.title} outline icon`}
                colored={props.colored}
                lazy={true}
                className={styles.iconImage}
              />
            </div>
          </button>
        )}
      </div>
      <div className={styles.iconTitle}>
        {props.icon.title}
        {!props.icon.formats.includes('24px') &&
          props.iconFormat !== '24px' && (
            <span className={styles.iconSize}> *</span>
          )}
      </div>
    </div>
  );
}
