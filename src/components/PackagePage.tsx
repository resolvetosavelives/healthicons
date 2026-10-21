import { ReactNode } from 'react';
import Link from 'next/link';
import HeadTags from './HeadTags';
import { ContentPage } from './ContentPage';
import { PackageInfo } from '../lib/packages';
import { IconPreview, PreviewIconName } from './IconPreview';
import { AiHeading } from './AiHeading';
import { FrameworkLogo } from './FrameworkLogo';
import styles from './Packages.module.scss';

export function Code({ children }: { children: string }) {
  return (
    <pre className={styles.code}>
      <code>{children}</code>
    </pre>
  );
}

// code, with what it makes shown below it when there's a preview
function CodeWithPreview({
  code,
  preview
}: {
  code: string;
  preview?: ReactNode;
}) {
  if (!preview) {
    return <Code>{code}</Code>;
  }
  return (
    <div className={styles.withPreview}>
      <Code>{code}</Code>
      <div className={styles.result}>
        <span className={styles.resultLabel}>Result</span>
        <div className={styles.resultContent}>{preview}</div>
      </div>
    </div>
  );
}

const SHOWCASE_ICONS: PreviewIconName[] = [
  'blood/blood-bag',
  'devices/stethoscope',
  'body/lungs',
  'devices/syringe',
  'medications/medicines',
  'symbols/virus',
  'zoonoses/mosquito',
  'people/doctor',
  'places/hospital',
  'vehicles/ambulance'
];

// a sample of the icons: outlined in the text color, and filled in purple
function Showcase() {
  return (
    <figure className={styles.showcase}>
      <div className={styles.showcaseRow}>
        {SHOWCASE_ICONS.map((icon) => (
          <IconPreview key={icon} icon={icon} size={32} />
        ))}
      </div>
      <div className={styles.showcaseRow}>
        {SHOWCASE_ICONS.map((icon) => (
          <IconPreview
            key={icon}
            icon={icon}
            variant="filled"
            size={32}
            color="#6666ff"
          />
        ))}
      </div>
      <figcaption className={styles.showcaseCaption}>
        Every icon comes outlined and filled, at any size and in any color.
      </figcaption>
    </figure>
  );
}

// the options every package takes
function OptionsTable() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Option</th>
            <th>Default</th>
            <th>What it does</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>variant</code>
            </td>
            <td>
              <code>outline</code>
            </td>
            <td>
              The style: <code>outline</code> or <code>filled</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>size</code>
            </td>
            <td>
              <code>24</code>
            </td>
            <td>
              Width and height, in pixels or any CSS size (like{' '}
              <code>1.5em</code>). At 24 pixels and smaller, icons that have a
              version drawn for small sizes use it.
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>The text color</td>
            <td>Any CSS color</td>
          </tr>
          <tr>
            <td>
              <code>title</code>
            </td>
            <td>None</td>
            <td>
              Shown as a tooltip and read out by screen readers. Without a title
              (or an <code>aria-label</code>), icons are hidden from screen
              readers.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function PackagePage({ info }: { info: PackageInfo }) {
  return (
    <>
      <HeadTags
        title={`Health icons for ${info.framework}: ${info.name}`}
        description={`How to use the free Health icons in ${info.framework} with the ${info.name} package: install it, then add icons in either style, at any size and in any color.`}
        path={`/packages/${info.slug}`}
      />
      <ContentPage
        title={`Health icons for ${info.framework}`}
        titleId="package"
        titleIcon={<FrameworkLogo name={info.slug} />}
        topLinks={
          <>
            <span>
              <Link href="/packages">
                {/* Lucide's chevron-left */}
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
                  <path d="m15 18-6-6 6-6" />
                </svg>
                All packages
              </Link>
            </span>
            <span>
              <a href={`https://www.npmjs.com/package/${info.name}`}>
                <code>{info.name}</code> on npm
                {/* Lucide's arrow-up-right, marking a link to another site
                    (like GitHub's in the menu) */}
                <svg
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </span>
          </>
        }
        intro={info.intro}
      >
        <Showcase />

        <h2 id="getting-started">Getting started</h2>
        <ol className={styles.steps}>
          {info.gettingStarted.map((step) => (
            <li key={step.title} className={styles.step}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p>{step.body}</p>
              {step.code && (
                <CodeWithPreview code={step.code} preview={step.preview} />
              )}
            </li>
          ))}
        </ol>

        <AiHeading id="ai" />
        <p>
          Copy our <Link href="/packages#ai">prompt for AI assistants</Link>{' '}
          before asking ChatGPT, Claude, Copilot or another assistant to add
          icons, so it uses the package correctly.
        </p>

        <h2 id="examples">Examples</h2>
        {info.examples.map((example) => (
          <section key={example.title}>
            <h3 className={styles.exampleTitle}>{example.title}</h3>
            {example.body && <p>{example.body}</p>}
            <CodeWithPreview code={example.code} preview={example.preview} />
          </section>
        ))}

        <h2 id="options">Options</h2>
        <p>{info.optionsNote}</p>
        <OptionsTable />

        <h2 id="names">Icon names</h2>
        <p>
          In code, an icon’s name is its name on this site in PascalCase:{' '}
          <code>blood-bag</code> is <code>BloodBag</code> and{' '}
          <code>blister-pills_oval_x14</code> is{' '}
          <code>BlisterPillsOvalX14</code>. A few names can’t be written that
          way, so they use the icon’s title: <code>0</code> to <code>9</code>{' '}
          are <code>Number0</code> to <code>Number9</code>, <code>!</code> is{' '}
          <code>ExclamationPoint</code> and <code>4x4</code> is <code>SUV</code>
          .
        </p>
        <p>
          If your editor suggests names as you type (most do), start typing what
          you’re looking for after the <code>{'{'}</code> in your import to see
          the matching icons.
        </p>
      </ContentPage>
    </>
  );
}
