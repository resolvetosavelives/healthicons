import styles from './Contribute.module.scss';

interface ContributeProps {
  hasTopMargin: boolean;
}

export function Contribute({ hasTopMargin = true }: ContributeProps) {
  return (
    <>
      <h2 id="contribute" className={hasTopMargin ? undefined : 'mt-1'}>
        How to contribute
      </h2>
      <div className={styles.aboutBullet}>
        <h6>Get in touch</h6>
        <p>
          Join our open Slack channel by emailing{' '}
          <a href="mailto:contact@healthicons.org">contact@healthicons.org</a>
        </p>
        <img src="/ui/slack.svg" width="32" height="32" alt="" />
      </div>
      <div className={styles.aboutBullet}>
        <h6>Contribute icons</h6>
        <p>
          Browse the{' '}
          <a href="https://www.figma.com/file/mbsBVYXECIOl5E0kkGAiC2/?node-id=978%3A3">
            Figma
          </a>{' '}
          and contribute icons in the "New icons" section. Please read the code
          of conduct (below) and the styleguide (in the Figma) carefully before
          contributing.
        </p>
        <img src="/ui/figma.svg" width="32" height="32" alt="" />
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
        <img src="/ui/code.svg" width="32" height="32" alt="" />
      </div>
    </>
  );
}
