import { AppProps } from 'next/app';
import ReactModal from 'react-modal';
import '../../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  // required to apply the aria-hidden attribute when a modal opens
  ReactModal.setAppElement('#main');

  return <Component {...pageProps} />;
}
