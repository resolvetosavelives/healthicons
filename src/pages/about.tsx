import Head from 'next/head';
import { TopBar } from '../components/TopBar';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Health Icons</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Health icons" />
        <meta property="og:title" content="About Health icons" />
        <meta
          property="og:description"
          content="Free, open source health icons. Use in your next commerical or personal project. Editing is ok. Republishing is ok. No need to give credit."
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
        <div className="contentContainer">
          <div className="contentMain">
            <h1 id="about" className="title">
              About
            </h1>
            <p>
              Health Icons is a volunteer effort to create a 'global good' of
              useful icons for health projects all over the world. We intend
              that these icons are available in the public domain for use in any
              type of project. The project is hosted by the public health
              not-for-profit{' '}
              <a href="https://resolvetosavelives.org" target="_blank" rel="noopener noreferrer">Resolve to Save Lives</a>{' '}
              as an expression of the openness of the project.
            </p>
            <p>
              Need an icon for your project?{' '}
              <a href="https://github.com/resolvetosavelives/healthicons#icon-requests" target="_blank" rel="noopener noreferrer">
                Submit a request through GitHub
              </a>{' '}
              and we will do our best to respond.
            </p>

            <h2 id="contribute">How to contribute</h2>
            <p>
              Join our open Slack channel by emailing{' '}
              <a href="mailto:contact@healthicons.org">
                contact@healthicons.org
              </a>
            </p>
            <p>
              Browse the{' '}
              <a href="https://www.figma.com/file/mbsBVYXECIOl5E0kkGAiC2/?node-id=978%3A3" target="_blank" rel="noopener noreferrer">
                Figma
              </a>{' '}
              and contribute icons in the "New icons" section. Please read the
              code of conduct (below) and the styleguide (in the Figma)
              carefully before contributing.
            </p>

            <h2 id="license">License</h2>
            <p>MIT License</p>

            <p>Copyright (c) 2021 Resolve to Save Lives</p>

            <p>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>

            <p>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>

            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>

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
              <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html" target="_blank" rel="noopener noreferrer">
                available here
              </a>
              . For answers to common questions about this code of conduct, see{' '}
              <a href="https://www.contributor-covenant.org/faq" target="_blank" rel="noopener noreferrer">this FAQ</a>.
            </p>
          </div>

          <div className="contentSide">
            <h2 id="contributors">Contributors</h2>
            <div>
              <a href="https://twitter.com/b0urnvita" target="_blank" rel="noopener noreferrer">Agrata Patel</a>
            </div>
            <div>
              <a href="https://twitter.com/andyngo" target="_blank" rel="noopener noreferrer">Andy Ngo</a>
            </div>
            <div>
              <a href="https://twitter.com/@superbryntendo" target="_blank" rel="noopener noreferrer">Bryn Jackson</a>
            </div>
            <div>
              <a href="https://twitter.com/dburka" target="_blank" rel="noopener noreferrer">Daniel Burka</a>
            </div>
            <div>
              <a href="https://twitter.com/_GregSchmidt" target="_blank" rel="noopener noreferrer">Gregory Schmidt</a>
            </div>
            <div>
              <a href="https://twitter.com/its_badjuju" target="_blank" rel="noopener noreferrer">Julia Parchimowicz</a>
            </div>
            <div>
              <a href="https://twitter.com/jemismali" target="_blank" rel="noopener noreferrer">Jemis Mali</a>
            </div>
            <div>
              <a href="https://twitter.com/jwstephensen" target="_blank" rel="noopener noreferrer">Jordan Stephensen</a>
            </div>
            <div>
              <a href="https://twitter.com/linafab" target="_blank" rel="noopener noreferrer">Lina Wang</a>
            </div>
            <div>
              <a href="https://twitter.com/mario_rocchi" target="_blank" rel="noopener noreferrer">Mario Rocchi</a>
            </div>
            <div>
              <a href="https://twitter.com/mayankd" target="_blank" rel="noopener noreferrer">Mayank Dhawan</a>
            </div>
            <div>
              <a href="https://twitter.com/meghacshekhar" target="_blank" rel="noopener noreferrer">
                Megha Chandrashekar
              </a>
            </div>
            <div>
              <a href="https://twitter.com/hypertextmike" target="_blank" rel="noopener noreferrer">Michael Gauthier</a>
            </div>
            <div>
              <a href="https://twitter.com/nickburka" target="_blank" rel="noopener noreferrer">Nick Burka</a>
            </div>
            <div>
              <a href="https://twitter.com/parthk" target="_blank" rel="noopener noreferrer">Parth Kapadia</a>
            </div>
            <div>
              <a href="https://twitter.com/rama__krushna" target="_blank" rel="noopener noreferrer">Rama Krushna</a>
            </div>
            <div>
              <a href="https://twitter.com/rohanpaldesign" target="_blank" rel="noopener noreferrer">Rohan Pal</a>
            </div>
            <div>
              <a href="https://twitter.com/sgarrity" target="_blank" rel="noopener noreferrer">Steven Garrity</a>
            </div>
            <div>
              <a href="https://twitter.com/yug_design" target="_blank" rel="noopener noreferrer">Yugandhar Bhamare</a>
            </div>
            <h2 className="mt-3" id="credit">
              Credit
            </h2>
            <p>
              Some of these icons are based on open source icons in{' '}
              <a href="https://dhis2.org/" target="_blank" rel="noopener noreferrer">DHIS2</a> and from{' '}
              <a href="https://medic.org/" target="_blank" rel="noopener noreferrer">Medic.org</a>. Thanks!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
