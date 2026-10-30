import HeadTags from '../components/HeadTags';
import { AboutNav } from '../components/AboutNav';
import { ContentPage } from '../components/ContentPage';

export default function CodeOfConduct() {
  return (
    <>
      <HeadTags
        title="Code of Conduct | Health Icons"
        description="The Health Icons code of conduct: how we keep the project and its community open, welcoming and free of harassment for everyone."
        path="/code-of-conduct"
      />
      <ContentPage
        title="Code of conduct"
        titleId="conduct"
        nav={<AboutNav />}
        intro={
          <p>
            Health Icons is made by volunteers from all over the world, and we
            want everyone who takes part to feel welcome.
          </p>
        }
      >
        <h2>Our pledge</h2>
        <p>
          We pledge to make our community welcoming, safe, and equitable for
          all.
        </p>
        <p>
          We are committed to fostering an environment that respects and
          promotes the dignity, rights, and contributions of all individuals,
          regardless of characteristics including race, ethnicity, caste, color,
          age, physical characteristics, neurodiversity, disability, sex or
          gender, gender identity or expression, sexual orientation, language,
          philosophy or religion, national or social origin, socio-economic
          position, level of education, or other status. The same privileges of
          participation are extended to everyone who participates in good faith
          and in accordance with this Covenant.
        </p>

        <h2>Encouraged behaviors</h2>
        <p>
          While acknowledging differences in social norms, we all strive to meet
          our community's expectations for positive behavior. We also understand
          that our words and actions may be interpreted differently than we
          intend based on culture, background, or native language.
        </p>
        <p>
          With these considerations in mind, we agree to behave mindfully toward
          each other and act in ways that center our shared values, including:
        </p>
        <ol>
          <li>
            Respecting the <strong>purpose of our community</strong>, our
            activities, and our ways of gathering.
          </li>
          <li>
            Engaging <strong>kindly and honestly</strong> with others.
          </li>
          <li>
            Respecting <strong>different viewpoints</strong> and experiences.
          </li>
          <li>
            <strong>Taking responsibility</strong> for our actions and
            contributions.
          </li>
          <li>
            Gracefully giving and accepting{' '}
            <strong>constructive feedback</strong>.
          </li>
          <li>
            Committing to <strong>repairing harm</strong> when it occurs.
          </li>
          <li>
            Behaving in other ways that promote and sustain the{' '}
            <strong>well-being of our community</strong>.
          </li>
        </ol>

        <h2>Restricted behaviors</h2>
        <p>
          We agree to restrict the following behaviors in our community.
          Instances, threats, and promotion of these behaviors are violations of
          this Code of Conduct.
        </p>
        <ol>
          <li>
            <strong>Harassment.</strong> Violating explicitly expressed
            boundaries or engaging in unnecessary personal attention after any
            clear request to stop.
          </li>
          <li>
            <strong>Character attacks.</strong> Making insulting, demeaning, or
            pejorative comments directed at a community member or group of
            people.
          </li>
          <li>
            <strong>Stereotyping or discrimination.</strong> Characterizing
            anyone’s personality or behavior on the basis of immutable
            identities or traits.
          </li>
          <li>
            <strong>Sexualization.</strong> Behaving in a way that would
            generally be considered inappropriately intimate in the context or
            purpose of the community.
          </li>
          <li>
            <strong>Violating confidentiality.</strong> Sharing or acting on
            someone's personal or private information without their permission.
          </li>
          <li>
            <strong>Endangerment.</strong> Causing, encouraging, or threatening
            violence or other harm toward any person or group.
          </li>
          <li>
            Behaving in other ways that <strong>threaten the well-being</strong>{' '}
            of our community.
          </li>
        </ol>

        <h3>Other restrictions</h3>
        <ol>
          <li>
            <strong>Misleading identity.</strong> Impersonating someone else for
            any reason, or pretending to be someone else to evade enforcement
            actions.
          </li>
          <li>
            <strong>Failing to credit sources.</strong> Not properly crediting
            the sources of content you contribute.
          </li>
          <li>
            <strong>Promotional materials.</strong> Sharing marketing or other
            commercial content in a way that is outside the norms of the
            community.
          </li>
          <li>
            <strong>Irresponsible communication.</strong> Failing to responsibly
            present content which includes, links or describes any other
            restricted behaviors.
          </li>
        </ol>

        <h2>Reporting an issue</h2>
        <p>
          Tensions can occur between community members even when they are trying
          their best to collaborate. Not every conflict represents a code of
          conduct violation, and this Code of Conduct reinforces encouraged
          behaviors and norms that can help avoid conflicts and minimize harm.
        </p>
        <p>
          When an incident does occur, it is important to report it promptly. To
          report a possible violation, email the project team at{' '}
          <a href="mailto:contact@healthicons.org">contact@healthicons.org</a>.
        </p>
        <p>
          Community Moderators take reports of violations seriously and will
          make every effort to respond in a timely manner. They will investigate
          all reports of code of conduct violations, reviewing messages, logs,
          and recordings, or interviewing witnesses and other participants.
          Community Moderators will keep investigation and enforcement actions
          as transparent as possible while prioritizing safety and
          confidentiality. In order to honor these values, enforcement actions
          are carried out in private with the involved parties, but
          communicating to the whole community may be part of a mutually agreed
          upon resolution.
        </p>

        <h2>Addressing and repairing harm</h2>
        <p>
          If an investigation by the Community Moderators finds that this Code
          of Conduct has been violated, the following enforcement ladder may be
          used to determine how best to repair harm, based on the incident's
          impact on the individuals involved and the community as a whole.
          Depending on the severity of a violation, lower rungs on the ladder
          may be skipped.
        </p>

        <h3>1. Warning</h3>
        <ul>
          <li>
            <strong>Event:</strong> A violation involving a single incident or
            series of incidents.
          </li>
          <li>
            <strong>Consequence:</strong> A private, written warning from the
            Community Moderators.
          </li>
          <li>
            <strong>Repair:</strong> Examples of repair include a private
            written apology, acknowledgement of responsibility, and seeking
            clarification on expectations.
          </li>
        </ul>

        <h3>2. Temporarily limited activities</h3>
        <ul>
          <li>
            <strong>Event:</strong> A repeated incidence of a violation that
            previously resulted in a warning, or the first incidence of a more
            serious violation.
          </li>
          <li>
            <strong>Consequence:</strong> A private, written warning with a
            time-limited cooldown period designed to underscore the seriousness
            of the situation and give the community members involved time to
            process the incident. The cooldown period may be limited to
            particular communication channels or interactions with particular
            community members.
          </li>
          <li>
            <strong>Repair:</strong> Examples of repair may include making an
            apology, using the cooldown period to reflect on actions and impact,
            and being thoughtful about re-entering community spaces after the
            period is over.
          </li>
        </ul>

        <h3>3. Temporary suspension</h3>
        <ul>
          <li>
            <strong>Event:</strong> A pattern of repeated violation which the
            Community Moderators have tried to address with warnings, or a
            single serious violation.
          </li>
          <li>
            <strong>Consequence:</strong> A private written warning with
            conditions for return from suspension. In general, temporary
            suspensions give the person being suspended time to reflect upon
            their behavior and possible corrective actions.
          </li>
          <li>
            <strong>Repair:</strong> Examples of repair include respecting the
            spirit of the suspension, meeting the specified conditions for
            return, and being thoughtful about how to reintegrate with the
            community when the suspension is lifted.
          </li>
        </ul>

        <h3>4. Permanent ban</h3>
        <ul>
          <li>
            <strong>Event:</strong> A pattern of repeated code of conduct
            violations that other steps on the ladder have failed to resolve, or
            a violation so serious that the Community Moderators determine there
            is no way to keep the community safe with this person as a member.
          </li>
          <li>
            <strong>Consequence:</strong> Access to all community spaces, tools,
            and communication channels is removed. In general, permanent bans
            should be rarely used, should have strong reasoning behind them, and
            should only be resorted to if working through other remedies has
            failed to change the behavior.
          </li>
          <li>
            <strong>Repair:</strong> There is no possible repair in cases of
            this severity.
          </li>
        </ul>

        <p>
          This enforcement ladder is intended as a guideline. It does not limit
          the ability of Community Managers to use their discretion and
          judgment, in keeping with the best interests of our community.
        </p>

        <h2>Scope</h2>
        <p>
          This Code of Conduct applies within all community spaces, and also
          applies when an individual is officially representing the community in
          public or other spaces. Examples of representing our community include
          using an official email address, posting via an official social media
          account, or acting as an appointed representative at an online or
          offline event.
        </p>

        <h2>Attribution</h2>
        <p>
          This Code of Conduct is adapted from the Contributor Covenant, version
          3.0, permanently available at{' '}
          <a href="https://www.contributor-covenant.org/version/3/0/">
            https://www.contributor-covenant.org/version/3/0/
          </a>
          .
        </p>
        <p>
          Contributor Covenant is stewarded by the Organization for Ethical
          Source and licensed under CC BY-SA 4.0. To view a copy of this
          license, visit{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            https://creativecommons.org/licenses/by-sa/4.0/
          </a>
          .
        </p>
        <p>
          For answers to common questions about Contributor Covenant, see the
          FAQ at{' '}
          <a href="https://www.contributor-covenant.org/faq">
            https://www.contributor-covenant.org/faq
          </a>
          . Translations are provided at{' '}
          <a href="https://www.contributor-covenant.org/translations">
            https://www.contributor-covenant.org/translations
          </a>
          . Additional enforcement and community guideline resources can be
          found at{' '}
          <a href="https://www.contributor-covenant.org/resources">
            https://www.contributor-covenant.org/resources
          </a>
          . The enforcement ladder was inspired by the work of{' '}
          <a href="https://github.com/mozilla/inclusion">
            Mozilla’s code of conduct team
          </a>
          .
        </p>
      </ContentPage>
    </>
  );
}
