import Head from 'next/head';
import Link from 'next/link';
import { TopBar } from '../components/TopBar';
import { Contribute } from '../components/Contribute';
import { Contributors } from '../components/Contributors';
import styles from './about.module.scss';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>The History of the Health Icons Project</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Health icons" />
        <meta property="og:title" content="About Health icons" />
        <meta
          property="og:description"
          content="Free, open source health icons. Use in your next commercial or personal project. Editing is ok. Republishing is ok. No need to give credit."
        />
        <meta property="og:url" content="http://healthicons.org/about" />
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
            <h1 id="about" className="mt-2">
              History of the project
            </h1>
            <p className={styles.contentIntro}>
              Health Icons started in May 2021 and has since expanded into an
              international all-volunteer effort to provide health icons for
              projects around the world.
            </p>
            <h2>Origin story with DHIS2</h2>
            <p>
              In the spring of 2021, Daniel Burka was doing a project with the{' '}
              <a href="https://dhis2.org">DHIS2</a> software system as part of a
              large-scale hypertension control project in Nigeria. DHIS2 is a
              popular open source digital health tool that is used governments
              in over 70 countries all over the world. DHIS2 has many admirable
              qualities, but the quality of the icons in their software back in
              2021 were very inconsistent. See below.
            </p>
            <p>
              <img
                src="/ui/dhis2-icons-old.png"
                alt="An example of the old icons in DHIS2"
                width="800"
                height="400"
                className={styles.fullImage}
              />
              <caption className={styles.caption}>
                The original DHIS2 icons that were replaced by our Health Icons.
              </caption>
            </p>
            <p>
              DHIS2 had around 400 icons that represented common themes in
              public health, education, and climate change. Many were pretty
              commonsense icons that you might expect from health, like
              hospital, clinic, blood pressure monitor, etc. But some icons were
              very specific concepts like{' '}
              <a href="https://healthicons.org/icon/outline/diagnostics/rdt-result_invalid">
                Rapid Diagnostic Testing Result Invalid
              </a>{' '}
              that were related to specific usages of DHIS2 for managing
              pandemic response programs. Other examples include{' '}
              <a href="https://healthicons.org/icon/outline/diagnostics/cone-test_on_nets">
                Cone Test on Nets
              </a>{' '}
              and{' '}
              <a href="https://healthicons.org/icon/outline/diagnostics/discriminating-concentration_bioassays">
                Discriminating Concentration Bioassays
              </a>
              . If you're ever wondering why the collection includes some very
              specfic icon, the answer is probably because it was in the
              original DHIS2 collection.
            </p>
            <p>
              The original DHIS2 collection was scaled at 48px size because they
              were often used as descriptive symbols in the DHIS2 software and
              needed quite a bit of detail. So, accordingly, our first 2 years
              of Health Icons followed this standard. We would later create 24px
              icons that are a better match with popular icon sets like Google's
              Material icons, Remix icons, Feather icons, etc.
            </p>
            <p>
              Many of the original icons that were created for DHIS2 feature the
              tag "DHIS2" and can be found by searching Health Icons by "DHIS2".
            </p>
            <p>
              Health Icons were first incorporated into
              <a href="https://dhis2.org/releases/version-237/">
                DHIS2 version 2.37
              </a>{' '}
              in June 2021.
            </p>
            <h2>A volunteer effort in 2021</h2>
            <p>
              Daniel put out a call on Twitter to see if other people wanted to
              help out with the effort to replace the DHIS2 icons. About a dozen
              designers jumped in and we started redesigning DHIS2 icons in
              Figma. At first we didn't have a well-defined style guide for new
              icons and were just making up styles as we went. After a few
              weeks, we stopped and looked at what made a good "Health Icon." We
              established a few standards, like:
            </p>
            <ul>
              <li>2 pixel stroke width</li>
              <li>
                Intentional mixing of round endcaps for strokes and sharp
                endcaps
              </li>
              <li>
                Cutouts in shapes to create uniqueness (e.g.{' '}
                <a href="/icon/filled/devices/microscope">Microscope</a>)
              </li>
            </ul>

            <h2>CC0 public domain</h2>
            <p>Paragraph</p>

            <h2>The website</h2>
            <p>Text</p>

            <h2>Other volunteer projects</h2>
            <p>Figma plugin</p>
            <p>React packages</p>

            <h2>Icons vs. symbols</h2>
            <p>Paragraph</p>

            <h2>No tracking usage?</h2>
            <p>Paragraph</p>

            <h2>Health icons in the wild</h2>
            <p>Paragraph</p>
          </div>
        </div>
      </main>
    </div>
  );
}
