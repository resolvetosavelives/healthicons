import Link from 'next/link';
import HeadTags from '../components/HeadTags';
import { AboutNav } from '../components/AboutNav';
import { ContentPage } from '../components/ContentPage';
import styles from './contribute.module.scss';

export default function Contribute() {
  return (
    <>
      <HeadTags
        title="How to Contribute to Health Icons"
        description="Health Icons is made by volunteers. Join our Slack, contribute icons in Figma, or help improve the website."
        path="/contribute"
      />
      <ContentPage
        title="How to contribute"
        titleId="contribute"
        nav={<AboutNav />}
        intro={
          <p>
            Health Icons is made by volunteers from all over the world. Here's
            how you can get involved.
          </p>
        }
      >
        <div className={styles.aboutBullet}>
          <h6>Get in touch</h6>
          <p>
            Join our open Slack channel by emailing{' '}
            <a href="mailto:contact@healthicons.org">contact@healthicons.org</a>
          </p>
          <img src="/ui/slack-logo.svg" width="32" height="32" alt="" />
        </div>
        <div className={styles.aboutBullet}>
          <h6>Contribute icons</h6>
          <p>
            Browse the{' '}
            <a href="https://www.figma.com/file/mbsBVYXECIOl5E0kkGAiC2/?node-id=978%3A3">
              Figma
            </a>{' '}
            and contribute icons in the "New icons" section. Please read the{' '}
            <Link href="/code-of-conduct">code of conduct</Link> and the
            styleguide (in the Figma) carefully before contributing.
          </p>
          <img src="/ui/figma-logo.svg" width="32" height="32" alt="" />
        </div>
        <div className={styles.aboutBullet}>
          <h6>Improve the website</h6>
          <p>
            Developers can browse the{' '}
            <a href="https://github.com/resolvetosavelives/healthicons/issues">
              issues on Github
            </a>{' '}
            and pick up projects to improve this website.
          </p>
          <img
            src="/ui/github-logo.svg"
            width="32"
            height="32"
            alt=""
            className="invert-in-dark"
          />
        </div>

        <h2 id="conduct">Code of conduct</h2>
        <p>
          We want Health Icons to be a welcoming, harassment-free community for
          everyone, whatever their background or level of experience. Before
          contributing, please read our{' '}
          <Link href="/code-of-conduct">code of conduct</Link>, which sets out
          the behavior we expect from contributors and maintainers and how to
          report a problem.
        </p>
      </ContentPage>
    </>
  );
}
