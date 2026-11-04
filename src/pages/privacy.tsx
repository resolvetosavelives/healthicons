import HeadTags from '../components/HeadTags';
import { AboutNav } from '../components/AboutNav';
import { ContentPage } from '../components/ContentPage';

const ANALYTICS_CODE =
  'https://github.com/resolvetosavelives/healthicons/blob/main/src/lib/analytics.ts';

export default function Privacy() {
  return (
    <>
      <HeadTags
        title="Privacy | Health Icons"
        description="Health Icons doesn't use cookies, has no accounts and never sells data. We count visits and which icons are used, anonymously, so we know what to make next."
        path="/privacy"
      />
      <ContentPage
        title="Privacy"
        titleId="privacy"
        nav={<AboutNav />}
        intro={
          <p>
            Health Icons doesn't use cookies, doesn't have accounts and never
            sells or shares information about you. We count visits and which
            icons people use, anonymously, so we know what's useful and what to
            make next.
          </p>
        }
      >
        <h2 id="short-version">The short version</h2>
        <ul>
          <li>No cookies, no accounts, no ads and no tracking across sites.</li>
          <li>
            We count visits and which icons are used, without knowing who you
            are.
          </li>
          <li>
            You don't need to tell us anything to use the icons: they're free
            for anyone, with no sign-up.
          </li>
        </ul>

        <h2 id="what-we-count">What we count</h2>
        <p>
          We use <a href="https://posthog.com">PostHog</a>, an analytics
          service, to count:
        </p>
        <ul>
          <li>
            Which pages are visited, and the site that sent you here (like a
            search engine), if any
          </li>
          <li>
            General details about your visit: the type of browser and device,
            your screen size and roughly which country you're in
          </li>
          <li>
            Which icons are opened, downloaded or copied, and when someone
            downloads all the icons
          </li>
          <li>
            Searches that don't find any icons, so we can see which icons people
            need that we haven't made yet
          </li>
        </ul>
        <p>
          That's all. We don't record your clicks, what you type (other than
          those searches), or your screen, and we don't use this information to
          build a profile of you or show you ads.
        </p>
        <p>
          The information we count is stored by PostHog in the United States.
        </p>
        <p>
          If your browser is set to send a “Do Not Track” request, we don't
          count your visit at all.
        </p>
        <p>
          Our code is open source, so you can see{' '}
          <a href={ANALYTICS_CODE}>exactly what we count</a>.
        </p>

        <h2 id="your-browser">What's saved in your browser</h2>
        <p>
          Only your choices, and only if you make them: whether you've turned on
          night mode, and whether you've closed the announcement at the top of
          the page. They're saved in your browser so the site remembers them
          next time, and they're never sent to us.
        </p>

        <h2 id="other-services">Other services</h2>
        <ul>
          <li>
            The site is hosted by{' '}
            <a href="https://pages.github.com">GitHub Pages</a>. Like any web
            host, GitHub may keep technical records of visits, such as network
            addresses, to keep the service running securely. See{' '}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
              GitHub's privacy statement
            </a>
            .
          </li>
          <li>
            The photos of our contributors on the{' '}
            <a href="/about">About page</a> are loaded from{' '}
            <a href="https://unavatar.io">unavatar.io</a>.
          </li>
          <li>
            Requesting an icon or contributing happens on GitHub, which has its
            own privacy statement.
          </li>
        </ul>

        <h2 id="contact">Questions</h2>
        <p>
          If you have a question about privacy, email us at{' '}
          <a href="mailto:contact@healthicons.org">contact@healthicons.org</a>.
          If we change how we count visits, we'll update this page.
        </p>
        <p>Last updated: November 2026</p>
      </ContentPage>
    </>
  );
}
