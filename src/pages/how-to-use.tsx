import Link from 'next/link';
import HeadTags from '../components/HeadTags';
import { AboutNav } from '../components/AboutNav';
import { ContentPage } from '../components/ContentPage';

export default function HowToUse() {
  return (
    <>
      <HeadTags
        title="How to use Health Icons"
        description="All the ways to get Health Icons: download them from the website, use the packages for React, Vue, Svelte and JavaScript, the Figma plugin, a ZIP file or npm."
        path="/how-to-use"
      />
      <ContentPage
        title="How to use icons"
        titleId="how-to-use"
        nav={<AboutNav />}
        intro={
          <p>
            Health Icons are free to use in any project, with no credit needed.
            Download them one at a time, add them to your code with a package,
            or find them in Figma.
          </p>
        }
      >
        <h2 id="styles">Styles and sizes</h2>
        <p>
          Every icon comes in two styles, <strong>outline</strong> and{' '}
          <strong>filled</strong>. The icons are drawn for 48px, and many also
          have a simpler 24px version that stays clear at small sizes. As SVGs
          they can be any size and any color.
        </p>

        <h2 id="website">Download from this website</h2>
        <p>
          <Link href="/">Find an icon</Link> and click it to download it as an
          SVG or a PNG (48px or 96px, or 24px and 48px for the smaller version),
          or to copy its SVG code. Pick a color in the sidebar first and the
          downloads and code use that color.
        </p>

        <h2 id="packages">Packages for your code</h2>
        <p>
          Building a website or app? Our <Link href="/packages">packages</Link>{' '}
          let you import just the icons you need, in either style, at any size
          and in any color:
        </p>
        <ul>
          <li>
            <Link href="/packages/react">React</Link>
          </li>
          <li>
            <Link href="/packages/vue">Vue</Link>
          </li>
          <li>
            <Link href="/packages/svelte">Svelte</Link>
          </li>
          <li>
            <Link href="/packages/javascript">JavaScript</Link>, for other
            frameworks and plain HTML pages
          </li>
        </ul>

        <h2 id="figma">Figma plugin</h2>
        <p>
          Designing in Figma? The{' '}
          <Link href="/figma-plugin">Health Icons Figma plugin</Link> lets you
          find icons and add them to your designs without leaving Figma.
        </p>

        <h2 id="files">All the icon files</h2>
        <ul>
          <li>
            Download every icon as SVG and PNG files in{' '}
            <a href="/icons.zip">a ZIP file</a>
          </li>
          <li>
            The{' '}
            <a href="https://www.npmjs.com/package/healthicons">
              healthicons npm package
            </a>{' '}
            has the same files, for projects that need image files:{' '}
            <code>npm install healthicons</code>
          </li>
          <li>
            For React Native, there’s a community-made{' '}
            <a href="https://www.npmjs.com/package/healthicons-react-native">
              healthicons-react-native
            </a>{' '}
            package (not made by the Health Icons team)
          </li>
        </ul>

        <h2 id="license">License</h2>
        <p>
          The icons are in the public domain (CC0), so you can use and change
          them however you like, in personal or commercial projects. See the{' '}
          <Link href="/licenses">licenses</Link> for details.
        </p>
      </ContentPage>
    </>
  );
}
