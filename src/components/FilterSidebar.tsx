import { ReactNode, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { RootState } from '../store';
import {
  setStyle,
  setKeywords,
  setFormat,
  setCategory,
  SearchStyle
} from '../store/search';
import { Category, IconFormat } from '../lib/icons';
import { ColorPicker } from './ColorPicker';
import styles from './FilterSidebar.module.scss';

const STYLE_OPTIONS: Array<{ value: SearchStyle; label: string }> = [
  { value: 'outline', label: 'Outline' },
  { value: 'filled', label: 'Filled' },
  { value: 'all', label: 'Both' }
];

const FORMAT_OPTIONS: Array<{ value: IconFormat; label: string }> = [
  { value: '48px', label: '48px' },
  { value: '24px', label: '24px' }
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
  totalIconCount: number;
  resultCount: number;
  // shown at the top of the column, scrolling away with it on desktop
  intro?: ReactNode;
}

export function FilterSidebar({
  categories,
  categoryCounts,
  totalIconCount,
  resultCount,
  intro
}: FilterSidebarProps) {
  const dispatch = useDispatch();
  const { keywords, style, format, category, color } = useSelector(
    (state: RootState) => state.search
  );
  const [filtersOpen, setFiltersOpen] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  // press "/" anywhere to jump to the search field
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable;
      if (e.key === '/' && !isTyping) {
        e.preventDefault();
        searchInput.current?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

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
  }, [filtersOpen]);

  const allCount = Object.values(categoryCounts).reduce((a, b) => a + b, 0);
  const activeFilterCount =
    (style !== 'outline' ? 1 : 0) +
    (format !== '48px' ? 1 : 0) +
    (color ? 1 : 0) +
    (category ? 1 : 0);

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
    <aside className={styles.sidebar} aria-label="Search and filters">
      {intro}
      <div className={styles.searchRow}>
        <label
          className={classnames(styles.search, {
            [styles.searchWithAction]: keywords
          })}
        >
          <span className="visually-hidden">Search icons</span>
          <img
            src="/ui/search-2-line.svg"
            alt=""
            className={styles.searchIcon}
          />
          <input
            ref={searchInput}
            value={keywords}
            type="search"
            className={styles.searchInput}
            placeholder={`Search ${totalIconCount} icons…`}
            onChange={(e) => dispatch(setKeywords(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                dispatch(setKeywords(''));
              }
            }}
          />
          {keywords ? (
            <button
              type="button"
              className={styles.clearButton}
              aria-label="Clear search"
              onClick={() => {
                dispatch(setKeywords(''));
                searchInput.current?.focus();
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          ) : (
            <kbd className={styles.shortcut}>/</kbd>
          )}
        </label>
        <button
          type="button"
          className={styles.filtersButton}
          aria-expanded={filtersOpen}
          aria-controls="icon-filters"
          onClick={() => setFiltersOpen(true)}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M4 6h16M7 12h10M10 18h4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Filters
          {activeFilterCount > 0 && (
            <span className={styles.filtersBadge}>{activeFilterCount}</span>
          )}
        </button>
      </div>

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
            <h2 className={styles.sectionTitle}>Style</h2>
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
            <h2 className={styles.sectionTitle}>Size</h2>
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
            <h2 className={styles.sectionTitle}>Color</h2>
            <ColorPicker />
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Categories</h2>
            <ul className={styles.categoryList}>
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
