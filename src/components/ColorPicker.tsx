import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setColor } from '../store/search';
import { parseHexColor } from '../lib/iconColor';
import styles from './FilterSidebar.module.scss';

const DEFAULT_COLOR = '#000000';

export function ColorPicker() {
  const dispatch = useDispatch();
  const color = useSelector((state: RootState) => state.search.color);
  // what's typed in the hex field, which may be an incomplete color
  const [draft, setDraft] = useState(color);
  const typing = useRef(false);

  // show color changes from elsewhere (the color wheel, Reset, the URL) in the
  // field, but not while typing in it: a valid shorthand like "abc" would
  // otherwise be rewritten to "#aabbcc" before the rest could be typed
  useEffect(() => {
    if (!typing.current) {
      setDraft(color);
    }
  }, [color]);

  // icons are drawn with the --icon-color CSS variable, so updating it here
  // recolors every icon without re-rendering them
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--icon-color',
      color || DEFAULT_COLOR
    );
  }, [color]);

  return (
    <div className={styles.colorRow}>
      <div className={styles.colorField}>
        <label
          className={styles.colorSwatch}
          style={{ backgroundColor: color || DEFAULT_COLOR }}
          title="Pick a color"
        >
          <span className="visually-hidden">Pick an icon color</span>
          <input
            type="color"
            value={color || DEFAULT_COLOR}
            onChange={(e) => dispatch(setColor(e.target.value))}
          />
        </label>
        <input
          type="text"
          className={styles.colorInput}
          aria-label="Icon color hex value"
          placeholder={DEFAULT_COLOR}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          maxLength={7}
          value={draft}
          onChange={(e) => {
            const value = e.target.value;
            setDraft(value);
            if (value === '') {
              dispatch(setColor(''));
            } else {
              const parsed = parseHexColor(value);
              if (parsed) {
                dispatch(setColor(parsed));
              }
            }
          }}
          onFocus={() => {
            typing.current = true;
          }}
          onBlur={() => {
            typing.current = false;
            setDraft(color);
          }}
        />
      </div>
      {color && (
        <button
          type="button"
          className={styles.colorReset}
          onClick={() => dispatch(setColor(''))}
        >
          Reset
        </button>
      )}
    </div>
  );
}
