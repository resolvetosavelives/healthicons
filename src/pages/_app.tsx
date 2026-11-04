import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import { startAnalytics } from '../lib/analytics';
import '../../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => startAnalytics(), []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
