import { MouseEvent } from 'react';
import classnames from 'classnames';
import { IconImage } from './IconImage';
import styles from './IconTile.module.scss';
import { Icon } from '../lib/icons';
import { SearchStyle, DisplaySize } from '../store/search';

interface IconTileProps {
  icon: Icon;
  visible: boolean;
  iconStyle: SearchStyle;
  iconFormat: DisplaySize;
  colored: boolean;
  onClick: (type: string) => void;
}

export function IconTile(props: IconTileProps) {
  const classes = classnames(styles.iconGroup, {
    [styles.hidden]: !props.visible,
    [styles.small]: props.iconFormat === '24px',
    [styles.large]: props.iconFormat === '64px'
  });

  const formatSuffix = props.iconFormat === '24px' ? '-24px' : '';

  // tiles are real links to each icon's page (so search engines can find
  // them), but a plain click opens the icon in the modal instead; modified
  // clicks (e.g. cmd-click for a new tab) behave like normal links
  const openInModal = (e: MouseEvent, type: string) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    props.onClick(type);
  };

  return (
    <div className={classes}>
      <div className={styles.iconRow}>
        {['all', 'filled'].includes(props.iconStyle) && (
          <a
            href={`/icon/filled/${props.icon.category}/${props.icon.id}`}
            className={styles.iconItem}
            title={`${props.icon.title} (filled)`}
            onClick={(e) => openInModal(e, 'filled')}
          >
            <div className={styles.iconThumb}>
              <IconImage
                src={`/icons/svg/filled${formatSuffix}/${props.icon.category}/${props.icon.id}.svg`}
                size={48}
                alt={`${props.icon.title} filled style icon`}
                colored={props.colored}
                lazy={true}
                className={styles.iconImage}
              />
            </div>
          </a>
        )}
        {['all', 'outline'].includes(props.iconStyle) && (
          <a
            href={`/icon/outline/${props.icon.category}/${props.icon.id}`}
            className={styles.iconItem}
            title={`${props.icon.title} (outline)`}
            onClick={(e) => openInModal(e, 'outline')}
          >
            <div className={styles.iconThumb}>
              <IconImage
                src={`/icons/svg/outline${formatSuffix}/${props.icon.category}/${props.icon.id}.svg`}
                size={48}
                alt={`${props.icon.title} outline style icon`}
                colored={props.colored}
                lazy={true}
                className={styles.iconImage}
              />
            </div>
          </a>
        )}
      </div>
      <div className={styles.iconTitle}>
        {props.icon.title}
        {/* marks icons with no 24px version; a non-breaking space keeps the *
            on the same line as the name */}
        {!props.icon.formats.includes('24px') &&
          props.iconFormat !== '24px' && (
            <span className={styles.iconSize}>{'\u00a0*'}</span>
          )}
      </div>
    </div>
  );
}
