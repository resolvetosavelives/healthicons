import HeadTags from '../components/HeadTags';
import { AboutNav } from '../components/AboutNav';
import { ContentPage } from '../components/ContentPage';
import packageStyles from '../components/Packages.module.scss';
import styles from './figma-plugin.module.scss';

const PLUGIN_URL =
  'https://www.figma.com/community/plugin/992844281461869440/Health-Icons-Figma-Plugin';

export default function FigmaPlugin() {
  return (
    <>
      <HeadTags
        title="Figma plugin | Health Icons"
        description="Find Health Icons and add them to your designs without leaving Figma, with the Health Icons Figma plugin."
        path="/figma-plugin"
      />
      <ContentPage
        title="Figma plugin"
        titleId="figma"
        nav={<AboutNav />}
        intro={
          <p>
            Want to use Health Icons on your next design project? Find them and
            add them to your designs without leaving Figma.
          </p>
        }
      >
        <p>
          <a href={PLUGIN_URL}>
            <img
              src="/ui/figma-plugin.png"
              alt="Figma plugin demo graphic"
              width="800"
              height="400"
              className={styles.figmaPlugin}
            />
          </a>
        </p>
        <p>
          <a href="https://twitter.com/tkmadeit">Tekeste Kidanu</a> has made a{' '}
          <a href={PLUGIN_URL}>very slick Figma plugin</a> to make the icons
          super easy to find and include.
        </p>

        <h2 id="how-to">How to use the plugin</h2>
        <ol className={packageStyles.steps}>
          <li className={packageStyles.step}>
            <h3 className={packageStyles.stepTitle}>Open it in Figma</h3>
            <p>
              Go to the{' '}
              <a href={PLUGIN_URL}>Health Icons plugin on Figma Community</a>{' '}
              and click <strong>Open in…</strong> to try it in one of your
              design files. Click <strong>Save</strong> too, to keep it in your
              plugins for next time.
            </p>
          </li>
          <li className={packageStyles.step}>
            <h3 className={packageStyles.stepTitle}>Run it from any file</h3>
            <p>
              In a Figma design file, open the Actions menu (⌘K on a Mac, Ctrl+K
              on Windows), search for “Health Icons” and pick the plugin. It’s
              also in the main menu under <strong>Plugins</strong>.
            </p>
          </li>
          <li className={packageStyles.step}>
            <h3 className={packageStyles.stepTitle}>Add icons</h3>
            <p>
              Search for an icon or choose a category, pick the outline or
              filled style, and click an icon to add it to your design. The
              icons are vectors, so you can resize and recolor them like any
              other shape.
            </p>
          </li>
        </ol>
      </ContentPage>
    </>
  );
}
