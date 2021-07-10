import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import ReactModal from 'react-modal';
import { store } from '../store';
import '../../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  // required to apply the aria-hidden attribute when a modal opens
  ReactModal.setAppElement('#main');

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
