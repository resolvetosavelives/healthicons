import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setColor } from '../store/search';
import { parseHexColor } from '../lib/iconColor';
import { DEFAULT_ICON_COLOR, useTheme } from './ThemeToggle';
import styles from './FilterSidebar.module.scss';

export function ColorPicker() {
  const dispatch = useDispatch();
  const color = useSelector((state: RootState) => state.search.color);
  // what's typed in the hex field, which may be an incomplete color
  const [draft, setDraft] = useState(color);
  const typing = useRef(false);
  // with no color chosen, icons are black, or white in night mode
  const defaultColor = DEFAULT_ICON_COLOR[useTheme()];

  // choosing the default color is the same as choosing none, so it changes
  // with night mode like the default does (a color someone picked stays)
  const choose = (value: string) =>
    dispatch(setColor(value === defaultColor ? '' : value));

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
      color || defaultColor
    );
  }, [color, defaultColor]);

  return (
    <div className={styles.colorRow}>
      <div className={styles.colorField}>
        <label
          className={styles.colorSwatch}
          // the default color comes from CSS too, so it's right for night mode
          // before the page's code runs
          style={{ backgroundColor: color || 'var(--default-icon-color)' }}
          title="Pick a color"
        >
          <span className="visually-hidden">Pick an icon color</span>
          <input
            type="color"
            value={color || defaultColor}
            onChange={(e) => choose(e.target.value)}
          />
        </label>
        <input
          type="text"
          className={styles.colorInput}
          aria-label="Icon color hex value"
          placeholder={defaultColor}
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
                choose(parsed);
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
