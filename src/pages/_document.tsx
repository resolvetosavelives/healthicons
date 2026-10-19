import { Html, Head, Main, NextScript } from 'next/document';
import { HIDE_IF_DISMISSED_SCRIPT } from '../components/AnnouncementBar';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* hides the announcement bar before the page is drawn if it was
            dismissed on an earlier visit (no flash) */}
        <script
          // eslint-disable-next-line @typescript-eslint/naming-convention
          dangerouslySetInnerHTML={{ __html: HIDE_IF_DISMISSED_SCRIPT }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
