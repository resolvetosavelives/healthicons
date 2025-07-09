import { useEffect, useState } from 'react';
import styles from './IconTileModal.module.scss';
import ReactModal from 'react-modal';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '../lib/icons';
import { useDispatch } from 'react-redux';
import { setKeywords } from '../store/search';

interface IconTileModalProps {
  icon: Icon;
  allIcons: Icon[];
  iconType: string;
  isOpen: boolean;
  onClose: () => void;
}

export function IconTileModal(props: IconTileModalProps) {
  const [iconCode, setIconCode] = useState(null);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const currentIndex = props.allIcons.map((i) => i.id).indexOf(props.icon.id);
  const nextIcon =
    currentIndex < props.allIcons.length - 1
      ? props.allIcons[currentIndex + 1]
      : null;

  const prevIcon = currentIndex > 0 ? props.allIcons[currentIndex - 1] : null;

  const handleTagClick = (tag: string) => {
    dispatch(setKeywords(tag));
    props.onClose();
  };

  const handleCopyToClipboard = () => {
    if (iconCode) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(iconCode)
          .then(() => setCopied(true))
          .catch(() => {
            const textarea = document.createElement('textarea');
            textarea.value = iconCode;
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            try {
              document.execCommand('copy');
              setCopied(true);
            } finally {
              document.body.removeChild(textarea);
            }
          });
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = iconCode;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
          document.execCommand('copy');
          setCopied(true);
        } finally {
          document.body.removeChild(textarea);
        }
      }

      setTimeout(() => setCopied(false), 1000);
    }
  };

  useEffect(() => {
    fetch(
      `/icons/svg/${props.iconType}/${props.icon.category}/${props.icon.id}.svg`
    )
      .then((res) => res.text())
      .then((text) => setIconCode(text));
    return () => setIconCode(null);
  }, [props.icon.category, props.icon.id, props.iconType]);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.code === 'ArrowRight') {
        if (nextIcon) {
          router.replace(
            `/icon/${props.iconType}/${nextIcon.category}/${nextIcon.id}`,
            { scroll: false }
          );
        }
      } else if (e.code === 'ArrowLeft') {
        if (prevIcon) {
          router.replace(
            `/icon/${props.iconType}/${prevIcon.category}/${prevIcon.id}`,
            { scroll: false }
          );
        }
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    // clean up
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

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
          <div className={styles.nextPrevLinksWrapper}>
            {prevIcon ? (
              <Link
                href={`/icon/${props.iconType}/${prevIcon.category}/${prevIcon.id}`}
                title={`Previous: ${prevIcon.title}`}
                scroll={false}
                replace={true}
                className={styles.nextPrevLink}
              >
                ◀
              </Link>
            ) : (
              <span className={styles.nextPrevLink}>◀</span>
            )}
            {nextIcon ? (
              <Link
                href={`/icon/${props.iconType}/${nextIcon.category}/${nextIcon.id}`}
                title={`Next: ${nextIcon.title}`}
                scroll={false}
                replace={true}
                className={styles.nextPrevLink}
              >
                ▶
              </Link>
            ) : (
              <span className={styles.nextPrevLink}>▶</span>
            )}
          </div>
          <img
            src={`/icons/svg/${props.iconType}/${props.icon.category}/${props.icon.id}.svg`}
            className={styles.modalImage}
            width="96"
            height="96"
            alt=""
          />
          <div className={styles.modalTitle}>{props.icon.title}</div>

          <div className={styles.userActionsContainer}>
            <div className={styles.iconDownloadContainer}>
              <div className={styles.modalLabel}>
                Standard version (48px grid)
              </div>
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
              {props.icon.formats.includes('24px') && (
                <>
                  <img
                    src={`/icons/svg/${props.iconType}-24px/${props.icon.category}/${props.icon.id}.svg`}
                    className={styles.modal24pxImage}
                    width="24"
                    height="24"
                    alt=""
                  />
                  <div className={styles.modalLabel}>
                    Small version (24px grid)
                  </div>
                  <div className={styles.modal24pxVersions}>
                    <a
                      href={`/icons/svg/${props.iconType}-24px/${props.icon.category}/${props.icon.id}.svg`}
                      download={`${props.icon.id}-24px.svg`}
                      className={styles.modalButton}
                    >
                      <span>SVG</span>
                    </a>
                    <a
                      href={`/icons/png/${props.iconType}-24px/${props.icon.category}/${props.icon.id}.png`}
                      download={`${props.icon.id}-24px.png`}
                      className={styles.modalButton}
                    >
                      <span>24px PNG</span>
                    </a>
                    <a
                      href={`/icons/png/${props.iconType}-24px/${props.icon.category}/${props.icon.id}@2x.png`}
                      download={`${props.icon.id}-24px@2x.png`}
                      className={styles.modalButton}
                    >
                      <span>48px PNG</span>
                    </a>
                  </div>
                </>
              )}
            </div>
            {iconCode ? (
              <div className={styles.modalCopySvgContainer}>
                <div className={styles.modalLabel}>Copy Svg Code</div>
                <pre>{iconCode}</pre>
                <button
                  className={styles.modalButtonVariableIcon}
                  onClick={handleCopyToClipboard}
                  disabled={copied}
                >
                  <span className={styles.buttonContent}>
                    <span>
                      {copied ? (
                        <img
                          width={20}
                          height={20}
                          src="/ui/check.svg"
                          alt=""
                        />
                      ) : (
                        <img width={20} height={20} src="/ui/copy.svg" alt="" />
                      )}
                    </span>
                    <span>{copied ? 'copied' : 'Copy SVG'}</span>
                  </span>
                </button>
              </div>
            ) : null}
          </div>

          {props.icon.tags.length > 0 && (
            <div className={styles.modalTagsSection}>
              <div className={styles.modalLabel}>Tags</div>
              <div className={styles.modalTags}>
                {props.icon.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={styles.tagButton}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
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
