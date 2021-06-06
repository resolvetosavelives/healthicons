import styles from './IconTileModal.module.scss';
import ReactModal from 'react-modal';
import { Icon } from '../lib/icons';

interface IconTileModalProps {
  icon: Icon;
  iconType: string;
  isOpen: boolean;
  onClose: () => void;
}

export function IconTileModal(props: IconTileModalProps) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      bodyOpenClassName="modal--open"
      onRequestClose={props.onClose}
      className={styles.modalContainer}
      overlayClassName={styles.modalBody}
      closeTimeoutMS={200}
    >
      <>
        <button onClick={props.onClose} className={styles.modalClose}>
          ×
        </button>
        <img
          src={`icons/svg/${props.iconType}/${props.icon.path}/${props.icon.fileName}.svg`}
          className={styles.modalImage}
          width="96"
          height="96"
          alt=""
        />
        <div className={styles.modalLabel}>Icon</div>
        <div className={styles.modalTitle}>{props.icon.title}</div>

        <div className={styles.modalButtons}>
          <a
            href={`icons/svg/${props.iconType}/${props.icon.path}/${props.icon.fileName}.svg`}
            download={`${props.icon.fileName}.svg`}
            className={styles.modalButton}
          >
            <span>SVG</span>
          </a>
          <a
            href={`icons/png/${props.iconType}/${props.icon.path}/${props.icon.fileName}.png`}
            download={`${props.icon.fileName}.png`}
            className={styles.modalButton}
          >
            <span>48px PNG</span>
          </a>
          <a
            href={`icons/png/${props.iconType}/${props.icon.path}/${props.icon.fileName}@2x.png`}
            download={`${props.icon.fileName}@2x.png`}
            className={styles.modalButton}
          >
            <span>96px PNG</span>
          </a>
        </div>
        {props.icon.tags.length > 0 && (
          <>
            <div className={styles.modalLabel}>Tags</div>
            <div className={styles.modalTags}>
              {props.icon.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </>
        )}
      </>
    </ReactModal>
  );
}
