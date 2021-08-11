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
      <div className={styles.modalWrapper}>
        <>
          <img
            src={`/icons/svg/${props.iconType}/${props.icon.category}/${props.icon.id}.svg`}
            className={styles.modalImage}
            width="96"
            height="96"
            alt=""
          />
          <div className={styles.modalLabel}>Icon</div>
          <div className={styles.modalTitle}>{props.icon.title}</div>

          <div className={styles.modalButtons}>
            <a
              href={`/icons/svg/${props.iconType}/${props.icon.category}/${props.icon.id}.svg`}
              download={`${props.icon.id}.svg`}
              className={styles.modalButton}
            >
              <span>SVG</span>
            </a>
            <a
              href={`/icons/png/${props.iconType}/${props.icon.category}/${props.icon.id}.png`}
              download={`${props.icon.id}.png`}
              className={styles.modalButton}
            >
              <span>48px PNG</span>
            </a>
            <a
              href={`/icons/png/${props.iconType}/${props.icon.category}/${props.icon.id}@2x.png`}
              download={`${props.icon.id}@2x.png`}
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
        <div className={styles.modalLabel}>Filename</div>
        <p className={styles.filename}>{props.icon.id}</p>
        <div className={styles.modalLabel}>License</div>
        <p className={styles.modalLicense}>
          <a
            rel="license"
            href="http://creativecommons.org/publicdomain/zero/1.0/"
          >
            <img
              src="/cc0.png"
              alt="CC0 Public Domain License"
              className="cczero"
              width="120"
              height="39"
            />
          </a>
          To the extent possible under law,
          <a rel="dct:publisher" href="https://healthicons.org">
            <span property="dct:title"> Health Icons </span>
          </a>
          has waived all copyright and related or neighboring rights to
          available icons.
        </p>
      </div>
      <button onClick={props.onClose} className={styles.modalClose}>
        ×
      </button>
    </ReactModal>
  );
}
