import { useEffect, useRef, useState } from 'react';
import ClipboardJs from 'clipboard';
import classnames from 'classnames';
import styles from './IconTileModal.module.scss';
import ReactModal from 'react-modal';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '../lib/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setKeywords } from '../store/search';
import { IconImage } from './IconImage';
import { colorizeSvg, downloadSvgAsPng, svgDataUrl } from '../lib/iconColor';
import { filtersToQueryString } from '../lib/filterQuery';

// line icons drawn like Lucide's (arrow-left, arrow-right, x)
function LineIcon({ d }: { d: string[] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
const ARROW_LEFT = ['m12 19-7-7 7-7', 'M19 12H5'];
const ARROW_RIGHT = ['M5 12h14', 'm12 5 7 7-7 7'];
const CLOSE = ['M18 6 6 18', 'm6 6 12 12'];

// react-modal can't render on the server, so an icon page loaded directly
// would have none of the icon's details in its HTML. Until the app has
// hydrated, the modal is drawn as plain markup that looks the same; after that
// the real (accessible, focus-trapping) react-modal takes over.
let appHydrated = false;

interface IconTileModalProps {
  icon: Icon;
  allIcons: Icon[];
  iconType: string;
  isOpen: boolean;
  onClose: () => void;
}

export function IconTileModal(props: IconTileModalProps) {
  const [iconCode24, setIconCode24] = useState(null);
  const [iconCode48, setIconCode48] = useState(null);
  const [copied24, setCopied24] = useState(false);
  const [copied48, setCopied48] = useState(false);
  const btnRef24 = useRef(null);
  const btnRef48 = useRef(null);
  const [hydrated, setHydrated] = useState(appHydrated);
  useEffect(() => {
    appHydrated = true;
    setHydrated(true);
  }, []);
  const router = useRouter();
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.search);
  const color = filters.color;
  // keep the current filters in the URL when moving between icons
  const query = filtersToQueryString(filters);

  // the SVG code shown, copied and downloaded uses the chosen icon color
  const coloredCode24 = iconCode24 && colorizeSvg(iconCode24, color);
  const coloredCode48 = iconCode48 && colorizeSvg(iconCode48, color);

  // download links point at the static files unless a color is chosen, in
  // which case the SVG/PNG is generated in the browser in that color
  const svgLink = (path: string, svg: string, filename: string) => ({
    href: color && svg ? svgDataUrl(svg) : path,
    download: filename
  });
  const pngLink = (
    path: string,
    svg: string,
    size: number,
    filename: string
  ) => ({
    href: path,
    download: filename,
    onClick:
      color && svg
        ? (e: React.MouseEvent) => {
            e.preventDefault();
            downloadSvgAsPng(svg, size, filename);
          }
        : undefined
  });

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

  useEffect(() => {
    if (!btnRef24.current) {
      return;
    }

    const clipboard = new ClipboardJs(btnRef24.current, {
      text: () => coloredCode24
    });

    clipboard.on('success', () => {
      setCopied24(true);
      setTimeout(() => {
        setCopied24(false);
      }, 1500);
    });

    return () => clipboard.destroy();
  }, [coloredCode24]);

  useEffect(() => {
    if (!btnRef48.current) {
      return;
    }

    const clipboard = new ClipboardJs(btnRef48.current, {
      text: () => coloredCode48
    });

    clipboard.on('success', () => {
      setCopied48(true);
      setTimeout(() => {
        setCopied48(false);
      }, 1500);
    });

    return () => clipboard.destroy();
  }, [coloredCode48]);

  useEffect(() => {
    fetch(
      `/icons/svg/${props.iconType}-24px/${props.icon.category}/${props.icon.id}.svg`
    )
      .then((res) => res.text())
      .then((text) => setIconCode24(text));
    return () => setIconCode24(null);
  }, [props.icon.category, props.icon.id, props.iconType]);

  useEffect(() => {
    fetch(
      `/icons/svg/${props.iconType}/${props.icon.category}/${props.icon.id}.svg`
    )
      .then((res) => res.text())
      .then((text) => setIconCode48(text));
    return () => setIconCode48(null);
  }, [props.icon.category, props.icon.id, props.iconType]);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.code === 'ArrowRight') {
        if (nextIcon) {
          router.replace(
            `/icon/${props.iconType}/${nextIcon.category}/${nextIcon.id}${query}`,
            { scroll: false }
          );
        }
      } else if (e.code === 'ArrowLeft') {
        if (prevIcon) {
          router.replace(
            `/icon/${props.iconType}/${prevIcon.category}/${prevIcon.id}${query}`,
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

  const typeLabel = props.iconType === 'filled' ? 'filled' : 'outline';
  const content = (
    <>
      <div className={styles.modalWrapper}>
        <>
          <div className={styles.nextPrevLinksWrapper}>
            {prevIcon ? (
              <Link
                href={`/icon/${props.iconType}/${prevIcon.category}/${prevIcon.id}${query}`}
                title={`Previous: ${prevIcon.title}`}
                scroll={false}
                replace={true}
                className={styles.nextPrevLink}
              >
                <LineIcon d={ARROW_LEFT} />
              </Link>
            ) : (
              <span className={styles.nextPrevLink}>
                <LineIcon d={ARROW_LEFT} />
              </span>
            )}
            {nextIcon ? (
              <Link
                href={`/icon/${props.iconType}/${nextIcon.category}/${nextIcon.id}${query}`}
                title={`Next: ${nextIcon.title}`}
                scroll={false}
                replace={true}
                className={styles.nextPrevLink}
              >
                <LineIcon d={ARROW_RIGHT} />
              </Link>
            ) : (
              <span className={styles.nextPrevLink}>
                <LineIcon d={ARROW_RIGHT} />
              </span>
            )}
          </div>
          <div className={styles.previewBox}>
            <IconImage
              src={`/icons/svg/${props.iconType}/${props.icon.category}/${props.icon.id}.svg`}
              className={styles.previewLarge}
              size={96}
              alt={`${props.icon.title} ${typeLabel} style icon`}
              colored={color !== ''}
            />
          </div>
          <h1 className={styles.modalTitle}>{props.icon.title}</h1>

          <div
            className={classnames(
              styles.modalLabel,
              styles.standardVersionLabel
            )}
          >
            Standard icon
          </div>
          <div>
            <a
              {...svgLink(
                `/icons/svg/${props.iconType}/${props.icon.category}/${props.icon.id}.svg`,
                coloredCode48,
                `${props.icon.id}.svg`
              )}
              className={styles.modalButton}
            >
              <span>SVG</span>
            </a>
            <a
              {...pngLink(
                `/icons/png/${props.iconType}/${props.icon.category}/${props.icon.id}.png`,
                coloredCode48,
                48,
                `${props.icon.id}.png`
              )}
              className={styles.modalButton}
            >
              <span>48px PNG</span>
            </a>
            <a
              {...pngLink(
                `/icons/png/${props.iconType}/${props.icon.category}/${props.icon.id}@2x.png`,
                coloredCode48,
                96,
                `${props.icon.id}@2x.png`
              )}
              className={styles.modalButton}
            >
              <span>96px PNG</span>
            </a>
          </div>
          <div className={styles.codeBlock}>
            <pre className={styles.modalCopySvgContainer}>{coloredCode48}</pre>
            {iconCode48 && (
              <button
                type="button"
                ref={btnRef48}
                className={classnames(styles.copyButton, {
                  [styles.copyButtonCopied]: copied48
                })}
              >
                {copied48 ? 'Copied' : 'Copy'}
              </button>
            )}
          </div>
          {props.icon.formats.includes('24px') && (
            <>
              <div
                className={classnames(
                  styles.previewBox,
                  styles.previewBoxSmall
                )}
              >
                <IconImage
                  src={`/icons/svg/${props.iconType}-24px/${props.icon.category}/${props.icon.id}.svg`}
                  className={styles.previewSmall}
                  size={24}
                  alt={`${props.icon.title} ${typeLabel} style icon, 24px version`}
                  colored={color !== ''}
                />
              </div>
              <div
                className={classnames(
                  styles.modalLabel,
                  styles.smallVersionLabel
                )}
              >
                Small icon
              </div>
              <div className={styles.modal24pxVersions}>
                <a
                  {...svgLink(
                    `/icons/svg/${props.iconType}-24px/${props.icon.category}/${props.icon.id}.svg`,
                    coloredCode24,
                    `${props.icon.id}-24px.svg`
                  )}
                  className={styles.modalButton}
                >
                  <span>SVG</span>
                </a>
                <a
                  {...pngLink(
                    `/icons/png/${props.iconType}-24px/${props.icon.category}/${props.icon.id}.png`,
                    coloredCode24,
                    24,
                    `${props.icon.id}-24px.png`
                  )}
                  className={styles.modalButton}
                >
                  <span>24px PNG</span>
                </a>
                <a
                  {...pngLink(
                    `/icons/png/${props.iconType}-24px/${props.icon.category}/${props.icon.id}@2x.png`,
                    coloredCode24,
                    48,
                    `${props.icon.id}-24px@2x.png`
                  )}
                  className={styles.modalButton}
                >
                  <span>48px PNG</span>
                </a>
              </div>
              <div className={styles.codeBlock}>
                <pre className={styles.modalCopySvgContainer}>
                  {coloredCode24}
                </pre>
                {iconCode24 && (
                  <button
                    type="button"
                    ref={btnRef24}
                    className={classnames(styles.copyButton, {
                      [styles.copyButtonCopied]: copied24
                    })}
                  >
                    {copied24 ? 'Copied' : 'Copy'}
                  </button>
                )}
              </div>
            </>
          )}

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
      </div>
      <footer className={styles.modalFooter}>
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
          <strong>Public domain:</strong> To the extent possible under law,
          <a rel="dct:publisher" href="https://healthicons.org">
            <span property="dct:title"> Health Icons </span>
          </a>
          has waived all copyright and related or neighboring rights to
          available icons.
        </p>
      </footer>
      <button
        onClick={props.onClose}
        className={styles.modalClose}
        aria-label="Close"
      >
        <LineIcon d={CLOSE} />
      </button>
    </>
  );

  if (!hydrated) {
    // the same markup react-modal produces, including its default overlay
    return (
      <div
        className="ReactModal__Overlay ReactModal__Overlay--after-open"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        }}
      >
        <div
          className={`ReactModal__Content ReactModal__Content--after-open ${styles.modalContainer}`}
          role="dialog"
          aria-modal="true"
          aria-label={`${props.icon.title} icon`}
        >
          {content}
        </div>
      </div>
    );
  }

  return (
    <ReactModal
      isOpen={props.isOpen}
      bodyOpenClassName="modal--open"
      onRequestClose={props.onClose}
      className={styles.modalContainer}
      overlayClassName={styles.modalBody}
      // keep the modal above the sticky sidebar and mobile filter drawer
      style={{ overlay: { zIndex: 100 } }}
      closeTimeoutMS={200}
      contentLabel={`${props.icon.title} icon`}
    >
      {content}
    </ReactModal>
  );
}
