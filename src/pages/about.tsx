import Head from 'next/head';
import { TopBar } from '../components/TopBar';
import styles from './about.module.scss';

export default function About() {
  const contributors = [
    {
      name: 'Agrata Patel',
      link: 'https://twitter.com/b0urnvita',
      avatar: 'https://unavatar.now.sh/twitter/b0urnvita'
    },
    {
      name: 'Andy Ngo',
      link: 'https://twitter.com/andyngo',
      avatar: 'https://unavatar.now.sh/twitter/andyngo'
    },
    {
      name: 'Bryn Jackson',
      link: 'https://twitter.com/@superbryntendo',
      avatar: 'https://unavatar.now.sh/twitter/superbryntendo'
    },
    {
      name: 'Clara Campos',
      link: 'https://github.com/clara-campos',
      avatar: 'https://unavatar.now.sh/github/clara-campos'
    },
    {
      name: 'Daniel Burka',
      link: 'https://twitter.com/dburka',
      avatar: 'https://unavatar.now.sh/twitter/dburka'
    },
    {
      name: 'Gregory Schmidt',
      link: 'https://twitter.com/_GregSchmidt',
      avatar: 'https://unavatar.now.sh/twitter/_GregSchmidt'
    },
    {
      name: 'Julia Parchimowicz',
      link: 'https://twitter.com/its_badjuju',
      avatar: 'https://unavatar.now.sh/twitter/its_badjuju'
    },
    {
      name: 'Jemis Mali',
      link: 'https://twitter.com/jemismali',
      avatar: 'https://unavatar.now.sh/twitter/jemismali'
    },
    {
      name: 'Jordan Stephensen',
      link: 'https://twitter.com/jwstephensen',
      avatar: 'https://unavatar.now.sh/twitter/jwstephensen'
    },
    {
      name: 'Kirill Golubev',
      link: 'https://github.com/ArGeoph',
      avatar: 'https://unavatar.now.sh/github/ArGeoph'
    },
    {
      name: 'Lina Wang',
      link: 'https://twitter.com/linafab',
      avatar: 'https://unavatar.now.sh/twitter/linafab'
    },
    {
      name: 'Mario Rocchi',
      link: 'https://twitter.com/mario_rocchi',
      avatar: 'https://unavatar.now.sh/twitter/mario_rocchi'
    },
    {
      name: 'Mayank Dhawan',
      link: 'https://twitter.com/mayankd',
      avatar: 'https://unavatar.now.sh/twitter/mayankd'
    },
    {
      name: 'Megha Chandrashekar',
      link: 'https://twitter.com/meghacshekhar',
      avatar: 'https://unavatar.now.sh/twitter/meghacshekhar'
    },
    {
      name: 'Michael Gauthier',
      link: 'https://twitter.com/hypertextmike',
      avatar: 'https://unavatar.now.sh/twitter/hypertextmike'
    },
    {
      name: 'Nick Burka',
      link: 'https://twitter.com/nickburka',
      avatar: 'https://unavatar.now.sh/twitter/nickburka'
    },
    {
      name: 'Parth Kapadia',
      link: 'https://twitter.com/parthk',
      avatar: 'https://unavatar.now.sh/twitter/parthk'
    },
    {
      name: 'Rama Krushna',
      link: 'https://twitter.com/rkdotdesign',
      avatar: 'https://unavatar.now.sh/twitter/rkdotdesign'
    },
    {
      name: 'Ranit Das',
      link: 'https://twitter.com/dasranit12',
      avatar: 'https://unavatar.now.sh/twitter/dasranit12'
    },
    {
      name: 'Rohan Pal',
      link: 'https://twitter.com/rohanpaldesign',
      avatar: 'https://unavatar.now.sh/twitter/rohanpaldesign'
    },
    {
      name: 'Steven Garrity',
      link: 'https://twitter.com/sgarrity',
      avatar: 'https://unavatar.now.sh/twitter/sgarrity'
    },
    {
      name: 'Yugandhar Bhamare',
      link: 'https://twitter.com/yug_design',
      avatar: 'https://unavatar.now.sh/twitter/yug_design'
    }
  ];

  // make sure they're alphabetical
  contributors.sort((c1, c2) => {
    return c1.name.toLowerCase() > c2.name.toLowerCase() ? 1 : -1;
  });

  return (
    <div className="container">
      <Head>
        <title>About Health Icons</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Health icons" />
        <meta property="og:title" content="About Health icons" />
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
            <h1 id="about" className="title">
              About this project
            </h1>
            <p className={styles.contentIntro}>
              Health Icons is a volunteer effort to create a ‘global good’ for
              health projects all over the world. These icons are available in
              the public domain for use in any type of project.
            </p>
            <p>
              The project is hosted by the public health not-for-profit{' '}
              <a href="https://resolvetosavelives.org">Resolve to Save Lives</a>{' '}
              as an expression of our committment to offer the icons for free,
              forever.
            </p>
            <p>
              Need an icon for your project?{' '}
              <a href="https://github.com/resolvetosavelives/healthicons#icon-requests">
                Submit a request through GitHub
              </a>{' '}
              and we will do our best to respond.
            </p>

            <h2 id="contribute">How to contribute</h2>
            <div className={styles.aboutBullet}>
              <h6>Get in touch</h6>
              <p>
                Join our open Slack channel by emailing{' '}
                <a href="mailto:contact@healthicons.org">
                  contact@healthicons.org
                </a>
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
                and contribute icons in the "New icons" section. Please read the
                code of conduct (below) and the styleguide (in the Figma)
                carefully before contributing.
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

            <h2 id="license">License</h2>
            <div className={styles.codeBlock}>
              <p>MIT License</p>

              <p>Copyright (c) 2021 Resolve to Save Lives</p>

              <p>
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software, and to permit persons to whom the
                Software is furnished to do so, subject to the following
                conditions:
              </p>

              <p>
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
              </p>

              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>

            <h2 id="conduct">Code of conduct</h2>

            <p>
              In the interest of fostering an open and welcoming environment, we
              as contributors and maintainers pledge to making participation in
              our project and our community a harassment-free experience for
              everyone, regardless of age, body size, disability, ethnicity, sex
              characteristics, gender identity and expression, level of
              experience, education, socio-economic status, nationality,
              personal appearance, race, religion, or sexual identity and
              orientation.
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
                Trolling, insulting/derogatory comments, and personal or
                political attacks
              </li>
              <li>Public or private harassment</li>
              <li>
                Publishing others’ private information, such as a physical or
                electronic address, without explicit permission
              </li>
              <li>
                Other conduct which could reasonably be considered inappropriate
                in a professional setting
              </li>
            </ul>

            <h4>Our responsibilities</h4>
            <p>
              Project maintainers are responsible for clarifying the standards
              of acceptable behavior and are expected to take appropriate and
              fair corrective action in response to any instances of
              unacceptable behavior.
            </p>
            <p>
              Project maintainers have the right and responsibility to remove,
              edit, or reject comments, commits, code, wiki edits, issues, and
              other contributions that are not aligned to this Code of Conduct,
              or to ban temporarily or permanently any contributor for other
              behaviors that they deem inappropriate, threatening, offensive, or
              harmful.
            </p>

            <h4>Scope</h4>
            <p>
              This Code of Conduct applies both within project spaces and in
              public spaces when an individual is representing the project or
              its community. Examples of representing a project or community
              include using an official project e-mail address, posting via an
              official social media account, or acting as an appointed
              representative at an online or offline event. Representation of a
              project may be further defined and clarified by project
              maintainers.
            </p>

            <h4>Enforcement</h4>
            <p>
              Instances of abusive, harassing, or otherwise unacceptable
              behavior may be reported by contacting the project team at{' '}
              <a href="mailto:contact@healthicons.org">
                contact@healthicons.org
              </a>
              . All complaints will be reviewed and investigated and will result
              in a response that is deemed necessary and appropriate to the
              circumstances. The project team is obligated to maintain
              confidentiality with regard to the reporter of an incident.
              Further details of specific enforcement policies may be posted
              separately.
            </p>
            <p>
              Project maintainers who do not follow or enforce the Code of
              Conduct in good faith may face temporary or permanent
              repercussions as determined by other members of the project’s
              leadership.
            </p>
            <h4>Attribution</h4>
            <p>
              This Code of Conduct is adapted from the Contributor Covenant,
              version 1.4,{' '}
              <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html">
                available here
              </a>
              . For answers to common questions about this code of conduct, see{' '}
              <a href="https://www.contributor-covenant.org/faq">this FAQ</a>.
            </p>
          </div>

          <div className={styles.contentSide}>
            <div className={styles.contentFeature}>
              <h2 id={styles.contributors}>Volunteer contributors</h2>
              {contributors.map((contributor, index) => (
                <div key={index} className={styles.contributorItem}>
                  <a href={contributor.link}>
                    <img
                      src={contributor.avatar}
                      alt={`Avatar of ${contributor.name}`}
                      className={styles.avatarImage}
                    />
                    {contributor.name}
                  </a>
                </div>
              ))}
            </div>
            <h2 className="mt-3" id="credit">
              Credit &amp; inspiration
            </h2>
            <p>
              Some of these icons are based on open source icons in{' '}
              <a href="https://dhis2.org/">DHIS2</a> and from{' '}
              <a href="https://medic.org/">Medic.org</a>. We also took
              inspiration from the excellent open source{' '}
              <a href="https://remixicon.com">Remix Icon</a> collection. Thanks!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
