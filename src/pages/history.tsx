import HeadTags from '../components/HeadTags';
import Link from 'next/link';
import { ContentPage } from '../components/ContentPage';
import { AboutNav } from '../components/AboutNav';
import styles from './about.module.scss';

export default function History() {
  return (
    <>
      <HeadTags
        title="The History of the Health Icons Project"
        description="How Health Icons started in 2021 as a volunteer project, and why we made the icons free for everyone, forever."
        path="/history"
      />
      <ContentPage
        title="Project history"
        titleId="history"
        nav={<AboutNav />}
        intro={
          <p>
            Health Icons started in May 2021 and has since expanded into an
            international all-volunteer effort to provide health icons for
            projects around the world.
          </p>
        }
      >
        <h2>Origin story with DHIS2</h2>
        <p>
          In the spring of 2021,{' '}
          <Link href="https://danielburka.com">Daniel Burka</Link> was working
          with the <Link href="https://dhis2.org">DHIS2</Link> software system
          as part of a large-scale hypertension control project in Nigeria.
          DHIS2 is a popular open source digital health tool used by governments
          in over 70 countries. DHIS2 has many admirable qualities, but back in
          2021 the icons in its software were very inconsistent (see below).
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
            The original DHIS2 icons that were replaced by Health Icons
          </figcaption>
        </figure>

        <p>
          DHIS2 had around 400 icons representing common themes in public
          health, education and climate change. Many were the commonsense icons
          you'd expect in health, like hospital, clinic and blood pressure
          monitor. But some were very specific concepts, like{' '}
          <Link href="/icon/outline/diagnostics/rdt-result_invalid">
            Rapid Diagnostic Testing Result Invalid
          </Link>
          , tied to particular uses of DHIS2 in pandemic response programs.
          Other examples include{' '}
          <Link href="/icon/outline/diagnostics/cone-test_on_nets">
            Cone Test on Nets
          </Link>{' '}
          and{' '}
          <Link href="/icon/outline/diagnostics/discriminating-concentration_bioassays">
            Discriminating Concentration Bioassays
          </Link>
          . If you've ever wondered why the collection includes a very specific
          icon, the answer is probably that it was in the original DHIS2 set.
        </p>
        <p>
          The original DHIS2 icons were drawn at 48px because they were often
          used as descriptive symbols in the DHIS2 software and needed quite a
          bit of detail. Our first two years of Health Icons followed the same
          standard. We later created 24px icons that are a better match for
          popular icon sets like Google's Material Icons, Remix Icon and
          Feather.
        </p>
        <p>
          Many of the icons originally created for DHIS2 have the tag "DHIS2",
          so you can find them by searching Health Icons for "DHIS2".
        </p>
        <p>
          Health Icons were first included in DHIS2 in{' '}
          <Link href="https://dhis2.org/releases/version-237/">
            version 2.37
          </Link>
          , released in June 2021.
        </p>

        <h2>A volunteer effort starting in 2021</h2>
        <p>
          Daniel put out a call on Twitter to see if anyone wanted to help
          replace the DHIS2 icons. About a dozen designers jumped in, and we
          started redesigning the DHIS2 icons in Figma. At first, we didn't have
          a well-defined style guide and made up styles as we went. After a few
          weeks, we stopped and looked at what made a good "Health Icon" and set
          a few standards, like:
        </p>
        <ul>
          <li>A 2px stroke width</li>
          <li>Intentionally mixing round and sharp endcaps on strokes</li>
          <li>
            Cutouts in shapes to make them distinctive (e.g.{' '}
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
            Early icons that show the distinctive style of Health Icons
          </figcaption>
        </figure>

        <p>
          After finishing the DHIS2 redesign, we expanded our work to include
          many other common health icons. At first, we made lists of common
          medical terms, devices, conditions and so on. Later, we added a way
          for the public to request icons (see below).
        </p>
        <p>
          Since 2021, many contributors have come and gone. Some people
          contributed one or two icons, and several prolific contributors
          created dozens each.{' '}
          <Link href="https://www.gregoryschmidt.com/about">
            Dr. Greg Schmidt
          </Link>
          , an internal medicine doctor from Canada with global public health
          experience, has been our medical advisor, giving feedback as we create
          icons. We list most of the people who have contributed to Health Icons
          on our <Link href="/about">About page</Link>.
        </p>

        <h2>Choosing which icons to create</h2>
        <p>
          The first icons mirrored the ones in the DHIS2 software library. Then
          we added commonsense health icons to round out the collection. Later,
          we put a <Link href="/request-icon">Request an icon</Link> link on our
          website, and we've had dozens of requests from medical professionals
          and software developers all over the world. You can see a full list of
          completed and still-to-do icons on the project's{' '}
          <Link href="https://github.com/resolvetosavelives/healthicons/issues?q=is%3Aissue%20%20label%3A%22icon%20request%22%20">
            GitHub issues page
          </Link>
          .
        </p>
        <p>
          Honestly, we're not too picky: any health-related icon that seems
          reasonable to our volunteer team gets added to the collection.
        </p>

        <h2>Icons vs. symbols</h2>
        <p>
          The original icon set was designed on a 48px grid. In hindsight, this
          made Health Icons more "symbols" than "icons." They were great when
          you needed a symbol to be recognizable on a large button, in a
          PowerPoint presentation or on a sign. But the 48px icons weren't ideal
          for user interfaces, especially alongside common icon sets like{' '}
          <Link href="https://fonts.google.com/icons?icon.set=Material+Symbols">
            Google Material
          </Link>{' '}
          icons, <Link href="https://feathericons.com/">Feather</Link> icons and{' '}
          <Link href="https://remixicon.com/">Remix</Link> icons.
        </p>
        <p>
          In 2024, we started redrawing many of the icons on a 24px grid (half
          the size), which meant reducing the detail in each icon. Today, many
          icons have been redrawn at this smaller size, which makes them much
          more useful in software interfaces and apps.
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
          From the very beginning, we wanted Health Icons to be used as widely
          as possible, so we released all the icons under a{' '}
          <Link href="https://creativecommons.org/public-domain/cc0/">
            CC0 (Creative Commons Zero) license
          </Link>
          , a type of public domain license. This means anyone can use the
          icons, modify them in any way, sell them or sell products containing
          them, and we retain no ownership. We even let almost anyone into our
          Figma file so they can access the original icons.
        </p>

        <h2>The website</h2>
        <p>
          The Health Icons website was built to make the icons available to
          anyone. The original website was created by many of the same
          volunteers who designed the icons, with volunteer engineering help
          from{' '}
          <Link href="https://bsky.app/profile/nickburka.bsky.social">
            Nicholas Burka
          </Link>{' '}
          and several of his colleagues from the web design company{' '}
          <Link href="https://silverorange.com">silverorange</Link>, including{' '}
          <Link href="https://github.com/sgarrity">Steven Garrity</Link> and{' '}
          <Link href="https://github.com/gauthierm">Michael Gauthier</Link>. We
          redesigned the website in 2026 to make icons easier to search and
          filter. We've tried to create a taxonomy for tagging the icons, but it
          could certainly be improved.
        </p>
      </ContentPage>
    </>
  );
}
