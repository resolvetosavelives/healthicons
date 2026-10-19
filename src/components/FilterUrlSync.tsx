import { useEffect, useRef, useState } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setFilters } from '../store/search';
import { filtersToQueryString, queryStringToFilters } from '../lib/filterQuery';

// wait for typing or color-wheel dragging to settle before touching the URL
const URL_UPDATE_DELAY = 300;

// Keeps the search filters and the URL's query string in step: filters are
// read from the URL when the page loads, and written back as they change.
// It's a component that renders nothing so that only it, not the whole page,
// re-renders on every filter change (e.g. while dragging the color wheel).
export function FilterUrlSync() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.search);
  const [loaded, setLoaded] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    dispatch(setFilters(queryStringToFilters(window.location.search)));
    setLoaded(true);
  }, [dispatch]);

  useEffect(() => {
    if (!loaded) {
      return;
    }
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      // read the path when the update happens, as an icon modal may have
      // opened or closed since the filters changed
      const [path, currentQuery = ''] = Router.asPath.split('?');
      const query = filtersToQueryString(filters);
      if (query === (currentQuery ? `?${currentQuery}` : '')) {
        return;
      }
      // keep the same page (the home page, or an icon page loaded directly)
      // and only change the address shown, so nothing re-fetches or scrolls
      const { style, category, icon } = Router.query;
      Router.replace(
        {
          pathname: Router.pathname,
          query: Router.pathname === '/' ? {} : { style, category, icon }
        },
        path + query,
        { shallow: true, scroll: false }
      );
    }, URL_UPDATE_DELAY);
    return () => clearTimeout(timeout.current);
  }, [filters, loaded]);

  return null;
}
