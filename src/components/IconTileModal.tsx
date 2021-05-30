import styles from './IconTileModal.module.scss';
import ReactModal from 'react-modal';
import { Icon } from '../lib/icons';

interface IconTileModalProps {
  icon: Icon;
  isOpen: boolean;
  onClose: () => void;
}

export function IconTileModal(props: IconTileModalProps) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      overlayClassName="modal__overlay"
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
          src={`icons/svg/filled/${props.icon.path}`}
          className={styles.modalImage}
          width="96"
          height="96"
        />
        <div className={styles.modalLabel}>Filename</div>
        <div className={styles.modalTitle}>{props.icon.title}</div>

        <div className={styles.modalButtons}>
          <a
            href={`icons/svg/outline/${props.icon.path}`}
            download={props.icon.fileName}
            className={styles.modalButton}
          >
            <span>SVG</span>
          </a>
          <a
            href={`icons/png/outline/${props.icon.path}`}
            download={props.icon.fileName}
            className={styles.modalButton}
          >
            <span>PNG</span>
          </a>
        </div>
        <div className={styles.modalLabel}>Tags</div>
        <div className={styles.modalTags}><span>Coming soon...</span></div>
      </>
    </ReactModal>
  );
}
