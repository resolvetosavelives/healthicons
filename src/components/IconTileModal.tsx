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
          Close
        </button>
        <img
          src={`icons/svg/filled/${props.icon.path}`}
          className={styles.modalImage}
          width="96"
          height="96"
        />
        <div className={styles.iconTitle}>{props.icon.title}</div>
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
      </>
    </ReactModal>
  );
}
