import { initialSearchState, SearchState, SearchStyle } from '../store/search';
import { parseHexColor } from './iconColor';

// Filters are kept in the URL's query string so a view can be bookmarked or
// shared, e.g. /?search=heart&style=filled&size=24&color=d6336c&category=body
// Values that match the defaults are left out.

const STYLE_TO_PARAM: Record<SearchStyle, string> = {
  outline: 'outline',
  filled: 'filled',
  all: 'both'
};

export function filtersToQueryString(filters: SearchState): string {
  const params = new URLSearchParams();
  if (filters.keywords) {
    params.set('search', filters.keywords);
  }
  if (filters.style !== initialSearchState.style) {
    params.set('style', STYLE_TO_PARAM[filters.style]);
  }
  if (filters.format !== initialSearchState.format) {
    params.set('size', filters.format.replace('px', ''));
  }
  if (filters.color) {
    params.set('color', filters.color.replace('#', ''));
  }
  if (filters.category) {
    params.set('category', filters.category);
  }
  const query = params.toString();
  return query ? `?${query}` : '';
}

// reads filters from a query string, ignoring anything missing or invalid
export function queryStringToFilters(query: string): Partial<SearchState> {
  const params = new URLSearchParams(query);
  const filters: Partial<SearchState> = {};

  const search = params.get('search');
  if (search) {
    filters.keywords = search;
  }

  const style = Object.entries(STYLE_TO_PARAM).find(
    ([, param]) => param === params.get('style')
  );
  if (style) {
    filters.style = style[0] as SearchStyle;
  }

  const size = params.get('size');
  if (size === '24' || size === '48' || size === '64') {
    filters.format = `${size}px`;
  }

  const color = parseHexColor(params.get('color') ?? '');
  if (color) {
    filters.color = color;
  }

  const category = params.get('category');
  if (category) {
    filters.category = category.toLowerCase();
  }

  return filters;
}
