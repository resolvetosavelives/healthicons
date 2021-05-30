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
    >
      <>
        <button onClick={props.onClose}>Close</button>
        <div className={styles.iconTitle}>{props.icon.title}</div>
        <a
          href={`icons/svg/filled/${props.icon.path}`}
          download={props.icon.fileName}
        >
          <img
            src={`icons/svg/filled/${props.icon.path}`}
            width="48"
            height="48"
            alt={`${props.icon.title} outline icon`}
          />
          <span>Download SVG</span>
        </a>
        <a
          href={`icons/svg/outline/${props.icon.path}`}
          download={props.icon.fileName}
        >
          <img
            src={`icons/svg/outline/${props.icon.path}`}
            width="48"
            height="48"
            alt={`${props.icon.title} outline icon`}
          />

          <span>Download SVG</span>
        </a>
      </>
    </ReactModal>
  );
}
