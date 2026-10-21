import { useEffect } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import HeadTags from '../../components/HeadTags';
import { ContentPage } from '../../components/ContentPage';
import { AI_PROMPT, PACKAGES } from '../../lib/packages';
import { AiPrompt } from '../../components/AiPrompt';
import { AiHeading } from '../../components/AiHeading';
import { FrameworkLogo } from '../../components/FrameworkLogo';
import styles from '../../components/Packages.module.scss';

// The AI prompt with its heading and explanation. It's on the page twice:
// in a box in the side column on desktop (like How to contribute on About),
// and in the main text on mobile, where the side column would put it at the
// bottom. Only the main text's copy has the "ai" id, so links to #ai are
// scrolled to whichever copy is showing (see Packages).
function AiAssistant({ id, className }: { id?: string; className: string }) {
  return (
    <div className={className} data-ai-section={true}>
      <AiHeading id={id} className="mt-1" />
      <p>
        Copy this prompt into ChatGPT, Claude, Copilot or another AI assistant
        before asking it to add icons. It explains how the packages work, so the
        assistant picks the right one for your project and doesn’t make up icon
        names. Add what you’d like it to do at the end.
      </p>
      <AiPrompt prompt={AI_PROMPT} />
    </div>
  );
}

export default function Packages() {
  // links to #ai (from the package pages) land on the AI prompt that's
  // showing: the browser only knows the main text's copy, hidden on desktop
  useEffect(() => {
    const scrollToPrompt = () => {
      if (window.location.hash !== '#ai') {
        return;
      }
      const showing = Array.from(
        document.querySelectorAll<HTMLElement>('[data-ai-section]')
      ).find((section) => getComputedStyle(section).display !== 'none');
      showing?.scrollIntoView();
    };
    scrollToPrompt();
    window.addEventListener('hashchange', scrollToPrompt);
    return () => window.removeEventListener('hashchange', scrollToPrompt);
  }, []);

  return (
    <>
      <HeadTags
        title="Health icons packages for React, Vue, Svelte and JavaScript"
        description="Use the free Health icons in your code: official packages for React, Vue, Svelte and plain JavaScript, with outline and filled styles, any size and any color."
        path="/packages"
      />
      <ContentPage
        title="Packages"
        titleId="packages"
        aside={
          <AiAssistant
            className={classnames(styles.feature, styles.aiDesktop)}
          />
        }
        intro={
          <p>
            Use Health icons in your website or app. Import just the icons you
            need, in either style, at any size and in any color.
          </p>
        }
      >
        <ul className={styles.packageList}>
          {PACKAGES.map((info) => (
            <li key={info.slug}>
              <Link
                href={`/packages/${info.slug}`}
                className={styles.packageCard}
              >
                <FrameworkLogo
                  name={info.slug}
                  size={28}
                  className={styles.packageLogo}
                />
                <span className={styles.packageFramework}>
                  {info.framework}
                </span>
                <span className={styles.packageSummary}>{info.summary}</span>
                <code className={styles.packageName}>{info.name}</code>
              </Link>
            </li>
          ))}
        </ul>
        <h2 id="which">Not sure which to choose?</h2>
        <p>
          If your site is built with another framework or if it’s a plain HTML
          page, use the <Link href="/packages/javascript">JavaScript</Link>{' '}
          package.
        </p>

        <AiAssistant id="ai" className={styles.aiMobile} />

        <h2 id="other">Other ways to get the icons</h2>
        <ul>
          <li>
            The older ‘
            <a href="https://www.npmjs.com/package/healthicons">
              healthicons package
            </a>
            ’ has every icon as SVG and PNG files, for projects that aren’t
            JavaScript or that need image files:{' '}
            <code>npm install healthicons</code>
          </li>
          <li>
            Download all icons as <a href="/icons.zip">a ZIP file</a>
          </li>
          <li>
            Find and add them in Figma with the{' '}
            <Link href="/about#figma">Health icons Figma plugin</Link>
          </li>
          <li>
            For React Native, there’s a community-made{' '}
            <a href="https://www.npmjs.com/package/healthicons-react-native">
              healthicons-react-native
            </a>{' '}
            package (not made by the Health icons team)
          </li>
        </ul>
      </ContentPage>
    </>
  );
}
