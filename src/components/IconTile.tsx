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

  const image = (type: 'filled' | 'outline') => (
    <div className={styles.iconThumb}>
      <IconImage
        src={`/icons/svg/${type}${formatSuffix}/${props.icon.category}/${props.icon.id}.svg`}
        size={48}
        alt={`${props.icon.title} ${type} style icon`}
        colored={props.colored}
        lazy={true}
        className={styles.iconImage}
      />
    </div>
  );

  const link = (type: 'filled' | 'outline') => ({
    href: `/icon/${type}/${props.icon.category}/${props.icon.id}`,
    title: `${props.icon.title} (${type})`,
    onClick: (e: MouseEvent) => openInModal(e, type)
  });

  const title = (
    <div className={styles.iconTitle}>
      {props.icon.title}
      {/* marks icons with no 24px version; a non-breaking space keeps the *
          on the same line as the name */}
      {!props.icon.formats.includes('24px') && props.iconFormat !== '24px' && (
        <span className={styles.iconSize}>{'\u00a0*'}</span>
      )}
    </div>
  );

  // with one style showing, the whole tile (icon and name) is a single link
  // with a single hover state; with both, each style gets its own link
  if (props.iconStyle !== 'all') {
    return (
      <a
        {...link(props.iconStyle)}
        className={classnames(classes, styles.singleLink)}
      >
        {image(props.iconStyle)}
        {title}
      </a>
    );
  }

  return (
    <div className={classes}>
      <div className={styles.iconRow}>
        <a {...link('filled')} className={styles.iconItem}>
          {image('filled')}
        </a>
        <a {...link('outline')} className={styles.iconItem}>
          {image('outline')}
        </a>
      </div>
      {title}
    </div>
  );
}
