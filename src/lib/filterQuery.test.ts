import { filtersToQueryString, queryStringToFilters } from './filterQuery';
import { initialSearchState } from '../store/search';

describe('filtersToQueryString', () => {
  test('default filters give an empty query string', () => {
    expect(filtersToQueryString(initialSearchState)).toBe('');
  });

  test('includes every filter that differs from the default', () => {
    expect(
      filtersToQueryString({
        keywords: 'blood bag',
        style: 'all',
        format: '24px',
        color: '#d6336c',
        category: 'blood'
      })
    ).toBe('?search=blood+bag&style=both&size=24&color=d6336c&category=blood');
  });
});

describe('queryStringToFilters', () => {
  test('reads every filter', () => {
    expect(
      queryStringToFilters(
        '?search=blood+bag&style=both&size=24&color=d6336c&category=Blood'
      )
    ).toEqual({
      keywords: 'blood bag',
      style: 'all',
      format: '24px',
      color: '#d6336c',
      category: 'blood'
    });
  });

  test('reads the 64px size', () => {
    expect(queryStringToFilters('?size=64')).toEqual({ format: '64px' });
  });

  test('ignores missing and invalid values', () => {
    expect(
      queryStringToFilters('?style=striped&size=36&color=nope&other=1')
    ).toEqual({});
  });

  test('round-trips through the query string', () => {
    const filters = {
      keywords: 'heart',
      style: 'filled' as const,
      format: '48px' as const,
      color: '#1c7ed6',
      category: 'body'
    };
    expect({
      ...initialSearchState,
      ...queryStringToFilters(filtersToQueryString(filters))
    }).toEqual(filters);
  });
});
