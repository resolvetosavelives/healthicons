import Head from 'next/head';
import Link from 'next/link';
import { TopBar } from '../components/TopBar';
import styles from './about.module.scss';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>The History of the Health Icons Project</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Health icons" />
        <meta property="og:title" content="History of Health icons" />
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
              <Link href="https://dhis2.org">DHIS2</Link> software system as
              part of a large-scale hypertension control project in Nigeria.
              DHIS2 is a popular open source digital health tool that is used
              governments in over 70 countries all over the world. DHIS2 has
              many admirable qualities, but the quality of the icons in their
              software back in 2021 were very inconsistent. See below.
            </p>
            <figure>
              <img
                src="/ui/dhis2-icons-old.png"
                alt="An example of the old icons in DHIS2"
                width="800"
                height="400"
                className={styles.fullImage}
              />
              <figcaption className={styles.caption}>
                The original DHIS2 icons that were replaced by our Health Icons.
              </figcaption>
            </figure>
            <p>
              DHIS2 had around 400 icons that represented common themes in
              public health, education, and climate change. Many were pretty
              commonsense icons that you might expect from health, like
              hospital, clinic, blood pressure monitor, etc. But some icons were
              very specific concepts like{' '}
              <Link href="https://healthicons.org/icon/outline/diagnostics/rdt-result_invalid">
                Rapid Diagnostic Testing Result Invalid
              </Link>{' '}
              that were related to specific usages of DHIS2 for managing
              pandemic response programs. Other examples include{' '}
              <Link href="https://healthicons.org/icon/outline/diagnostics/cone-test_on_nets">
                Cone Test on Nets
              </Link>{' '}
              and{' '}
              <Link href="https://healthicons.org/icon/outline/diagnostics/discriminating-concentration_bioassays">
                Discriminating Concentration Bioassays
              </Link>
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
              Health Icons were first incorporated into DHIS2 in
              <Link href="https://dhis2.org/releases/version-237/">
                {' '}
                version 2.37
              </Link>{' '}
              in June 2021.
            </p>
            <h2>A volunteer effort starting in 2021</h2>
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
                <Link href="/icon/filled/devices/microscope">Microscope</Link>)
              </li>
            </ul>

            <figure>
              <img
                src="/ui/example-icons.png"
                alt="An example of early icons that established our style"
                width="800"
                height="400"
                className={styles.fullImage}
              />
              <figcaption className={styles.caption}>
                Early icons that exemplify the unique style of Health Icons
              </figcaption>
            </figure>
            <p>
              After completing the DHIS2 icon set redesign, we expanded our work
              to include many other common health icons. At first, we created
              lists of common medical terms, devices, conditions, etc. Later we
              added the ability to request icons from the public (see below).
            </p>
            <p>
              Since we started in 2021, many contributors have come in and out
              of the project. Some people contributed 1 or 2 icons and several
              prolific contributors created dozens of icons each.{' '}
              <Link href="https://www.gregoryschmidt.com/about">
                Dr Greg Schmidt
              </Link>
              , an internal medicine doctor from Canada with global public
              health experience, has acted as our medical advisor for feedback
              as we create icons. We list most of the people who contributed to
              the Health Icons project on the{' '}
              <Link href="/about">About page</Link> of our website.
            </p>

            <h2>Choosing which icons to create</h2>
            <p>
              The first icons mirrored the icons available in the DHIS2 software
              library. Then we expanded to commonsense health icons to round out
              the collection. We then put a{' '}
              <Link href="/request-icon">Request an icon</Link> link on our
              website and have had dozens of requests from medical professionals
              and software developers from all over the world. You can see a
              full list of completed and still-to-be-done icons on the{' '}
              <Link href="https://github.com/resolvetosavelives/healthicons/issues?q=is%3Aissue%20%20label%3A%22icon%20request%22%20">
                Github issues page
              </Link>{' '}
              for the project.
            </p>
            <p>
              We honestly are not too picky about choosing icons and any
              health-related icon that seems reasonable by our volunteer team is
              added to the collection.
            </p>

            <h2>Icons vs. symbols</h2>
            <p>
              The original icon set was designed at a 48 pixel grid. In
              hindsight, this made the Health Icons set really more 'symbols'
              than 'icons.' They were really useful when you needed a symbol to
              be recognizable on a large button, in a PowerPoint presentation,
              or on a sign. But, the 48 pixel icons were not ideal for using in
              user interfaces, especially alongside common icon sets like{' '}
              <Link href="https://fonts.google.com/icons?icon.set=Material+Symbols">
                Google Material
              </Link>{' '}
              icons, <Link href="https://feathericons.com/">Feather</Link>{' '}
              icons, <Link href="https://remixicon.com/">Remix</Link> icons,
              etc.
            </p>
            <p>
              In 2024, we started redrawing many of the icons at a 24 pixel grid
              (half the size), which meant reducing the amount of detail in each
              icon. Today, many of the icons have been redrawn in this smaller
              size, which makes them much more useful in software user
              interfaces and apps.
            </p>

            <figure>
              <img
                src="/ui/example-symbols.png"
                alt="Examples of icons at 48px and 24px grid sizes"
                width="800"
                height="400"
                className={styles.fullImage}
              />
              <figcaption className={styles.caption}>
                Examples of icons at 48px and 24px grid sizes
              </figcaption>
            </figure>

            <h2>CC0 public domain</h2>
            <p>
              From the very beginning, we wanted the Health Icons to be used as
              widely as possible. So, we chose to label all icons with a{' '}
              <Link href="https://creativecommons.org/public-domain/cc0/">
                CC0 (Creative Commons Zero) license
              </Link>
              , which is a type of public domain license. This means that anyone
              can use the icons, they can modify the icons in any way, they can
              sell the icons, they can sell products containing the icons, and
              we retain no ownership. We even let almost anyone into our Figma
              so they can access the originals of the icons.
            </p>

            <h2>The website</h2>
            <p>Description coming...</p>

            <h2>Other volunteer projects</h2>
            <p>Figma plugin</p>
            <p>React packages</p>

            <h2>No tracking usage?</h2>
            <p>Description coming...</p>

            <h2>Health icons in the wild</h2>
            <p>Description coming...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
