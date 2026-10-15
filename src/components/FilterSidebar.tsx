import { ReactNode, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { RootState } from '../store';
import {
  setStyle,
  setFormat,
  setCategory,
  SearchStyle,
  DisplaySize
} from '../store/search';
import { Category } from '../lib/icons';
import { ColorPicker } from './ColorPicker';
import styles from './FilterSidebar.module.scss';

const STYLE_OPTIONS: Array<{ value: SearchStyle; label: string }> = [
  { value: 'outline', label: 'Outline' },
  { value: 'filled', label: 'Filled' },
  { value: 'all', label: 'Both' }
];

const FORMAT_OPTIONS: Array<{ value: DisplaySize; label: string }> = [
  { value: '24px', label: '24px' },
  { value: '48px', label: '48px' },
  { value: '64px', label: '64px' }
];

export function formatCategoryTitle(title: string) {
  return title === 'ppe'
    ? 'PPE'
    : title.charAt(0).toUpperCase() + title.slice(1);
}

interface FilterSidebarProps {
  categories: Category[];
  // number of icons in each category that match the current keyword & size filters
  categoryCounts: Record<string, number>;
  resultCount: number;
  // whether the filters drawer is open (mobile only)
  filtersOpen: boolean;
  setFiltersOpen: (open: boolean) => void;
  // shown at the top of the column; it always scrolls off the top, whether
  // the page or the column is scrolled
  intro?: ReactNode;
}

export function FilterSidebar({
  categories,
  categoryCounts,
  resultCount,
  filtersOpen,
  setFiltersOpen,
  intro
}: FilterSidebarProps) {
  const dispatch = useDispatch();
  const { style, format, category } = useSelector(
    (state: RootState) => state.search
  );

  // close the mobile filter drawer with Escape and stop the page scrolling behind it
  useEffect(() => {
    if (!filtersOpen) {
      return;
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setFiltersOpen(false);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add(styles.noScroll);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove(styles.noScroll);
    };
  }, [filtersOpen, setFiltersOpen]);

  const allCount = Object.values(categoryCounts).reduce((a, b) => a + b, 0);

  // On desktop the column is sticky but pinned above the window by the
  // intro's height, so scrolling the page carries the intro off the top
  // before the filters stick. The intro's height depends on how its text
  // wraps, so it's measured and passed to the CSS.
  const sidebar = useRef<HTMLElement>(null);
  const introWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const wrapper = introWrapper.current;
    if (!wrapper || typeof ResizeObserver === 'undefined') {
      return;
    }
    const observer = new ResizeObserver(() => {
      sidebar.current?.style.setProperty(
        '--intro-height',
        `${wrapper.offsetHeight}px`
      );
    });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  const selectCategory = (value: string) => {
    dispatch(setCategory(value));
    setFiltersOpen(false);
    // jump back to the top of the results if they've been scrolled past
    const results = document.getElementById('icon-results');
    if (results && results.getBoundingClientRect().top < 0) {
      results.scrollIntoView();
    }
  };

  return (
    <aside ref={sidebar} className={styles.sidebar} aria-label="Filters">
      <div ref={introWrapper}>{intro}</div>
      <div
        className={classnames(styles.backdrop, {
          [styles.backdropVisible]: filtersOpen
        })}
        onClick={() => setFiltersOpen(false)}
        aria-hidden="true"
      />

      <div
        id="icon-filters"
        className={classnames(styles.filters, {
          [styles.filtersOpen]: filtersOpen
        })}
      >
        <div className={styles.drawerHeader}>
          <span>Filters</span>
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close filters"
            onClick={() => setFiltersOpen(false)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.filtersScroll}>
          <section className={styles.section}>
            <p className={styles.sectionTitle}>Style</p>
            <div className={styles.segmented} role="group" aria-label="Style">
              {STYLE_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  aria-pressed={style === o.value}
                  className={classnames(styles.segment, {
                    [styles.segmentSelected]: style === o.value
                  })}
                  onClick={() => dispatch(setStyle(o.value))}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.sectionTitle}>Size</p>
            <div className={styles.segmented} role="group" aria-label="Size">
              {FORMAT_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  aria-pressed={format === o.value}
                  className={classnames(styles.segment, {
                    [styles.segmentSelected]: format === o.value
                  })}
                  onClick={() => dispatch(setFormat(o.value))}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.sectionTitle}>Color</p>
            <ColorPicker />
          </section>

          <section className={styles.section}>
            <p className={styles.sectionTitle}>Categories</p>
            <ul className={styles.categoryList} aria-label="Categories">
              <li>
                <button
                  type="button"
                  aria-pressed={!category}
                  className={classnames(styles.categoryItem, {
                    [styles.categoryItemSelected]: !category
                  })}
                  onClick={() => selectCategory('')}
                >
                  <span>All categories</span>
                  <span className={styles.categoryCount}>{allCount}</span>
                </button>
              </li>
              {categories.map((c) => {
                const value = c.title.toLowerCase();
                const count = categoryCounts[c.title] ?? 0;
                return (
                  <li key={c.title}>
                    <button
                      type="button"
                      aria-pressed={category === value}
                      className={classnames(styles.categoryItem, {
                        [styles.categoryItemSelected]: category === value,
                        [styles.categoryItemEmpty]: count === 0
                      })}
                      onClick={() =>
                        selectCategory(category === value ? '' : value)
                      }
                    >
                      <span>{formatCategoryTitle(c.title)}</span>
                      <span className={styles.categoryCount}>{count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        <div className={styles.drawerFooter}>
          <button
            type="button"
            className={styles.showResultsButton}
            onClick={() => setFiltersOpen(false)}
          >
            Show {resultCount} {resultCount === 1 ? 'icon' : 'icons'}
          </button>
        </div>
      </div>
    </aside>
  );
}
