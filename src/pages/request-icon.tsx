import Head from 'next/head';
import { TopBar } from '../components/TopBar';
import styles from './request-icon.module.scss';

export default function RequestIcon() {
  return (
    <div className="container">
      <Head>
        <title>Request an Icon</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Health icons" />
        <meta property="og:title" content="Request an Icon from Health icons" />
        <meta
          property="og:description"
          content="Free, open source health icons. Use in your next commercial or personal project. Editing is ok. Republishing is ok. No need to give credit."
        />
        <meta property="og:url" content="http://healthicons.org/request-icon" />
        <meta
          property="og:image"
          content="http://healthicons.org/og_image.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://healthicons.org/og_image.png"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://healthicons.org/og_image.png"
        />
        <meta property="twitter:site" content="@health_icons" />
      </Head>

      <TopBar />
      <main id="main">
        <div className={styles.contentContainer}>
          <div className={styles.contentMain}>
            <h1 id="request">Request an icon</h1>
            <p className={styles.contentIntro}>
              Need an icon for your project?{' '}
              <a href="https://github.com/resolvetosavelives/healthicons/issues/new?assignees=&amp;labels=icon+request&amp;template=icon-request.md&amp;title=Icon+Request%3A+%5Bname+of+icon%5D">
                Submit a request through GitHub
              </a>{' '}
              and we will do our best to respond.
            </p>
            <p>
              This is an all-volunteer effort, so please be patient. If you need
              general user interface icons, we really like the{' '}
              <a href="https://feathericons.com/">Feather</a> and{' '}
              <a href="https://remixicon.com/">Remix</a> open source icon sets,
              which match Health Icons pretty well.
            </p>
            <h2>Example icon request</h2>
            <p>
              Important: Please provide as much detail as you can to help us
              design the icon. Including examples of similar icons, photos,
              diagrams, or as much detail and description as possible helps us
              create the best icon possible.
            </p>
            <div className={styles.example}>
              <h4 className={styles.exampleTitle}>Icon Request: Stent</h4>
              <p>
                I could really use an icon of a "stent" for my app. As you
                probably know, a stent is "a tubular support placed temporarily
                inside a blood vessel, canal, or duct to aid healing or relieve
                an obstruction."
              </p>
              <p>
                I'm thinking of a "tube" with a mesh-like texture. Stents
                sometimes flare at the end, so maybe add that so it's obvious
                it's not just a tube?
              </p>
              <p>Some examples I've seen:</p>
              <p class="mt-2">
                <img
                  src="/request-icon/stent-example1.png"
                  alt="Example Stent 1"
                  width="250"
                  height="282"
                />{' '}
                <img
                  src="/request-icon/stent-example2.png"
                  alt="Example Stent 2"
                  width="227"
                  height="227"
                />
              </p>
              <p>
                Thanks!
                <br />
                Dr. B, PhD
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
