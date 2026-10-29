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
            <a href="#conduct">code of conduct</a> (below) and the styleguide
            (in the Figma) carefully before contributing.
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
          In the interest of fostering an open and welcoming environment, we as
          contributors and maintainers pledge to making participation in our
          project and our community a harassment-free experience for everyone,
          regardless of age, body size, disability, ethnicity, sex
          characteristics, gender identity and expression, level of experience,
          education, socio-economic status, nationality, personal appearance,
          race, religion, or sexual identity and orientation.
        </p>

        <h4>Our standards</h4>
        <p>
          Examples of behavior that contributes to creating a positive
          environment include:
        </p>
        <ul>
          <li>Using welcoming and inclusive language</li>
          <li>Being respectful of differing viewpoints and experiences</li>
          <li>Gracefully accepting constructive criticism</li>
          <li>Focusing on what is best for the community</li>
          <li>Showing empathy towards other community members</li>
        </ul>
        <p>Examples of unacceptable behavior by participants include:</p>
        <ul>
          <li>
            The use of sexualized language or imagery and unwelcome sexual
            attention or advances
          </li>
          <li>
            Trolling, insulting/derogatory comments, and personal or political
            attacks
          </li>
          <li>Public or private harassment</li>
          <li>
            Publishing others’ private information, such as a physical or
            electronic address, without explicit permission
          </li>
          <li>
            Other conduct which could reasonably be considered inappropriate in
            a professional setting
          </li>
        </ul>

        <h4>Our responsibilities</h4>
        <p>
          Project maintainers are responsible for clarifying the standards of
          acceptable behavior and are expected to take appropriate and fair
          corrective action in response to any instances of unacceptable
          behavior.
        </p>
        <p>
          Project maintainers have the right and responsibility to remove, edit,
          or reject comments, commits, code, wiki edits, issues, and other
          contributions that are not aligned to this Code of Conduct, or to ban
          temporarily or permanently any contributor for other behaviors that
          they deem inappropriate, threatening, offensive, or harmful.
        </p>

        <h4>Scope</h4>
        <p>
          This Code of Conduct applies both within project spaces and in public
          spaces when an individual is representing the project or its
          community. Examples of representing a project or community include
          using an official project e-mail address, posting via an official
          social media account, or acting as an appointed representative at an
          online or offline event. Representation of a project may be further
          defined and clarified by project maintainers.
        </p>

        <h4>Enforcement</h4>
        <p>
          Instances of abusive, harassing, or otherwise unacceptable behavior
          may be reported by contacting the project team at{' '}
          <a href="mailto:contact@healthicons.org">contact@healthicons.org</a>.
          All complaints will be reviewed and investigated and will result in a
          response that is deemed necessary and appropriate to the
          circumstances. The project team is obligated to maintain
          confidentiality with regard to the reporter of an incident. Further
          details of specific enforcement policies may be posted separately.
        </p>
        <p>
          Project maintainers who do not follow or enforce the Code of Conduct
          in good faith may face temporary or permanent repercussions as
          determined by other members of the project’s leadership.
        </p>
        <h4>Attribution</h4>
        <p>
          This Code of Conduct is adapted from the Contributor Covenant, version
          1.4,{' '}
          <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html">
            available here
          </a>
          . For answers to common questions about this code of conduct, see{' '}
          <a href="https://www.contributor-covenant.org/faq">this FAQ</a>.
        </p>
      </ContentPage>
    </>
  );
}
