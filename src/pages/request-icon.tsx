import { GetStaticProps } from 'next';
import Link from 'next/link';
import HeadTags from '../components/HeadTags';
import { ContentPage } from '../components/ContentPage';
import { IconLogGroups } from '../components/IconLogGroups';
import { IconsAdded, getRecentlyAdded } from '../lib/iconLog';
import styles from './request-icon.module.scss';

interface RequestIconProps {
  recentlyAdded: IconsAdded[];
}

export const getStaticProps: GetStaticProps<RequestIconProps> = async () => {
  return { props: { recentlyAdded: getRecentlyAdded() } };
};

export default function RequestIcon({ recentlyAdded }: RequestIconProps) {
  return (
    <>
      <HeadTags
        title="Request an icon | Health Icons"
        description="Can't find the health icon you need? Request a new free, open source icon from the Health Icons project."
        path="/request-icon"
      />
      <ContentPage
        title="Request an icon"
        titleId="request"
        aside={
          <div className={styles.recent}>
            <h2 className={styles.recentTitle}>Recently added icons</h2>
            <IconLogGroups iconsAdded={recentlyAdded} />
            <p className={styles.recentMore}>
              <Link href="/icon-log" className={styles.recentLink}>
                See icon log
                {/* Lucide's arrow-right */}
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </p>
          </div>
        }
        intro={
          <p>
            Need an icon for your project?{' '}
            <a href="https://github.com/resolvetosavelives/healthicons/issues/new?assignees=&amp;labels=icon+request&amp;template=icon-request.md&amp;title=Icon+Request%3A+%5Bname+of+icon%5D">
              Submit a request on GitHub
            </a>{' '}
            and we will do our best to respond.
          </p>
        }
      >
        <p>
          This is an all-volunteer effort, so please be patient. If you need
          general user interface icons, we really like the{' '}
          <a href="https://lucide.dev/">Lucide</a>,{' '}
          <a href="https://feathericons.com/">Feather</a> and{' '}
          <a href="https://remixicon.com/">Remix</a> open source icon sets,
          which match Health Icons pretty well.
        </p>
        <h2>Example icon request</h2>
        <p>
          Important: Please provide as much detail as you can to help us design
          the icon. Including examples of similar icons, photos, diagrams, or as
          much detail and description as possible helps us create the best icon
          possible.
        </p>
        <div className={styles.example}>
          <h4 className={styles.exampleTitle}>Icon Request: Stent</h4>
          <p>
            I could really use an icon of a "stent" for my app. As you probably
            know, a stent is "a tubular support placed temporarily inside a
            blood vessel, canal, or duct to aid healing or relieve an
            obstruction."
          </p>
          <p>
            I'm thinking of a "tube" with a mesh-like texture. Stents sometimes
            flare at the end, so maybe add that so it's obvious it's not just a
            tube?
          </p>
          <p>Some examples I've seen:</p>
          <p className="mt-2">
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
      </ContentPage>
    </>
  );
}
