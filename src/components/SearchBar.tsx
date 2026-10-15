import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { RootState } from '../store';
import { setKeywords } from '../store/search';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  // shown in the placeholder; matches the sidebar's "All categories" count
  iconCount: number;
  filtersOpen: boolean;
  // opens the filters drawer (the Filters button is only shown on mobile)
  onOpenFilters: () => void;
}

export function SearchBar({
  iconCount,
  filtersOpen,
  onOpenFilters
}: SearchBarProps) {
  const dispatch = useDispatch();
  const { keywords, style, format, category, color } = useSelector(
    (state: RootState) => state.search
  );
  const searchInput = useRef<HTMLInputElement>(null);

  // the bar only shows its bottom line once it's stuck to the top of the
  // window; an invisible marker just above it scrolls out of view at that point
  const stuckMarker = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const marker = stuckMarker.current;
    if (!marker || typeof IntersectionObserver === 'undefined') {
      return;
    }
    const observer = new IntersectionObserver(([entry]) =>
      setStuck(!entry.isIntersecting)
    );
    observer.observe(marker);
    return () => observer.disconnect();
  }, []);

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

  const activeFilterCount =
    (style !== 'outline' ? 1 : 0) +
    (format !== '48px' ? 1 : 0) +
    (color ? 1 : 0) +
    (category ? 1 : 0);

  return (
    <>
      <div
        ref={stuckMarker}
        className={styles.stuckMarker}
        aria-hidden="true"
      />
      <div
        className={classnames(styles.searchRow, {
          [styles.searchRowStuck]: stuck
        })}
      >
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
            placeholder={`Search ${iconCount} icons…`}
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
          onClick={onOpenFilters}
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
    </>
  );
}
