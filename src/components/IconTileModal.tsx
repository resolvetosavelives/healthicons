import { useEffect, useRef, useState } from 'react';
import ClipboardJs from 'clipboard';
import classnames from 'classnames';
import styles from './IconTileModal.module.scss';
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

// attaches copy-to-clipboard to a button; `copied` is true briefly after a
// successful copy so the button can say so
function useCopyButton(text: string | null) {
  const ref = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!ref.current || !text) {
      return;
    }
    const clipboard = new ClipboardJs(ref.current, { text: () => text });
    clipboard.on('success', () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
    return () => clipboard.destroy();
  }, [text]);
  return { ref, copied };
}

interface IconTileModalProps {
  icon: Icon;
  allIcons: Icon[];
  iconType: string;
  onClose: () => void;
}

export function IconTileModal(props: IconTileModalProps) {
  const [iconCode24, setIconCode24] = useState(null);
  const [iconCode48, setIconCode48] = useState(null);

  // The modal is a native <dialog>. The server renders it already open, so an
  // icon page loaded directly has the icon's details in its HTML; once the
  // page is running it's reopened with showModal(), which makes it a true
  // modal: the rest of the page can't be clicked or tabbed to, and Escape
  // closes it.
  const dialogRef = useRef<HTMLDialogElement>(null);
  const onClose = useRef(props.onClose);
  onClose.current = props.onClose;
  useEffect(() => {
    const dialog = dialogRef.current;
    const returnFocusTo = document.activeElement as HTMLElement | null;
    if (dialog.open) {
      dialog.close();
    }
    dialog.showModal();

    const onCancel = (e: Event) => {
      e.preventDefault();
      onClose.current();
    };
    // a click on the backdrop lands on the dialog itself, outside its box
    const onClick = (e: MouseEvent) => {
      const box = dialog.getBoundingClientRect();
      const outside =
        e.clientX < box.left ||
        e.clientX > box.right ||
        e.clientY < box.top ||
        e.clientY > box.bottom;
      if (e.target === dialog && outside) {
        onClose.current();
      }
    };
    dialog.addEventListener('cancel', onCancel);
    dialog.addEventListener('click', onClick);
    return () => {
      dialog.removeEventListener('cancel', onCancel);
      dialog.removeEventListener('click', onClick);
      if (dialog.open) {
        dialog.close();
      }
      // back to whatever opened the modal (e.g. the icon tile)
      if (returnFocusTo && document.contains(returnFocusTo)) {
        returnFocusTo.focus();
      }
    };
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

  // copy buttons: on the code boxes (desktop) and beside Download (mobile)
  const copy48 = useCopyButton(coloredCode48);
  const copy24 = useCopyButton(coloredCode24);
  const mobileCopy48 = useCopyButton(coloredCode48);
  const mobileCopy24 = useCopyButton(coloredCode24);

  // on mobile each section's download options are behind a Download button;
  // this is which one is open, closed again when moving to another icon
  const [openDownloads, setOpenDownloads] = useState<'48' | '24' | null>(null);
  useEffect(() => {
    setOpenDownloads(null);
  }, [props.icon.id, props.iconType]);

  // like a dropdown, the options close on a tap anywhere outside them
  useEffect(() => {
    if (!openDownloads) {
      return;
    }
    const closeIfOutside = (e: PointerEvent) => {
      if (!(e.target as Element).closest(`.${styles.downloadMenu}`)) {
        setOpenDownloads(null);
      }
    };
    document.addEventListener('pointerdown', closeIfOutside);
    return () => document.removeEventListener('pointerdown', closeIfOutside);
  }, [openDownloads]);

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

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

  const typeLabel = props.iconType === 'filled' ? 'filled' : 'outline';
  const content = (
    <>
      <div className={styles.modalWrapper}>
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
        <h1 id="icon-modal-title" className={styles.modalTitle}>
          {props.icon.title}
        </h1>
        {/* everything below the title; the desktop preview boxes are
              positioned from its top */}
        <div className={styles.modalContent}>
          <section className={styles.iconSection}>
            <div className={styles.previewBox}>
              <IconImage
                src={`/icons/svg/${props.iconType}/${props.icon.category}/${props.icon.id}.svg`}
                className={styles.previewLarge}
                size={96}
                alt={`${props.icon.title} ${typeLabel} style icon`}
                colored={color !== ''}
              />
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.modalLabel}>Standard icon</div>
              <div className={styles.mobileActions}>
                {/* the options drop down from under Download on mobile; on desktop
    they're always shown as a row */}
                <div className={styles.downloadMenu}>
                  <button
                    type="button"
                    className={classnames(
                      styles.modalButton,
                      styles.downloadToggle
                    )}
                    aria-expanded={openDownloads === '48'}
                    onClick={() =>
                      setOpenDownloads((open) => (open === '48' ? null : '48'))
                    }
                  >
                    Download
                  </button>
                  <div
                    className={classnames(styles.downloadOptions, {
                      [styles.downloadOptionsOpen]: openDownloads === '48'
                    })}
                    onClick={() => setOpenDownloads(null)}
                  >
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
                </div>
                {iconCode48 && (
                  <button
                    type="button"
                    ref={mobileCopy48.ref}
                    className={classnames(
                      styles.modalButton,
                      styles.mobileCopyButton,
                      {
                        [styles.copyButtonCopied]: mobileCopy48.copied
                      }
                    )}
                  >
                    {mobileCopy48.copied ? 'Copied' : 'Copy SVG'}
                  </button>
                )}
              </div>
              <div className={styles.codeBlock}>
                <pre className={styles.modalCopySvgContainer}>
                  {coloredCode48}
                </pre>
                {iconCode48 && (
                  <button
                    type="button"
                    ref={copy48.ref}
                    className={classnames(styles.copyButton, {
                      [styles.copyButtonCopied]: copy48.copied
                    })}
                  >
                    {copy48.copied ? 'Copied' : 'Copy'}
                  </button>
                )}
              </div>
            </div>
          </section>
          {props.icon.formats.includes('24px') && (
            <section className={styles.iconSection}>
              <div className={styles.previewBox}>
                <IconImage
                  src={`/icons/svg/${props.iconType}-24px/${props.icon.category}/${props.icon.id}.svg`}
                  className={styles.previewSmall}
                  size={24}
                  alt={`${props.icon.title} ${typeLabel} style icon, 24px version`}
                  colored={color !== ''}
                />
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.modalLabel}>Small icon</div>
                <div className={styles.mobileActions}>
                  {/* the options drop down from under Download on mobile; on desktop
    they're always shown as a row */}
                  <div className={styles.downloadMenu}>
                    <button
                      type="button"
                      className={classnames(
                        styles.modalButton,
                        styles.downloadToggle
                      )}
                      aria-expanded={openDownloads === '24'}
                      onClick={() =>
                        setOpenDownloads((open) =>
                          open === '24' ? null : '24'
                        )
                      }
                    >
                      Download
                    </button>
                    <div
                      className={classnames(styles.downloadOptions, {
                        [styles.downloadOptionsOpen]: openDownloads === '24'
                      })}
                      onClick={() => setOpenDownloads(null)}
                    >
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
                  </div>
                  {iconCode24 && (
                    <button
                      type="button"
                      ref={mobileCopy24.ref}
                      className={classnames(
                        styles.modalButton,
                        styles.mobileCopyButton,
                        {
                          [styles.copyButtonCopied]: mobileCopy24.copied
                        }
                      )}
                    >
                      {mobileCopy24.copied ? 'Copied' : 'Copy SVG'}
                    </button>
                  )}
                </div>
                <div className={styles.codeBlock}>
                  <pre className={styles.modalCopySvgContainer}>
                    {coloredCode24}
                  </pre>
                  {iconCode24 && (
                    <button
                      type="button"
                      ref={copy24.ref}
                      className={classnames(styles.copyButton, {
                        [styles.copyButtonCopied]: copy24.copied
                      })}
                    >
                      {copy24.copied ? 'Copied' : 'Copy'}
                    </button>
                  )}
                </div>
              </div>
            </section>
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
          <div className={styles.modalLabel}>Filename</div>
          <p className={styles.filename}>{props.icon.id}</p>
        </div>
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

  return (
    <dialog
      ref={dialogRef}
      open={true}
      className={styles.modalContainer}
      aria-labelledby="icon-modal-title"
    >
      {content}
    </dialog>
  );
}
