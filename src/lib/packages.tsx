import { ReactNode } from 'react';
import Link from 'next/link';
import { IconPreview, PreviewButton } from '../components/IconPreview';
import { FrameworkLogoName } from '../components/FrameworkLogo';

// The content of the packages pages (/packages and a page per package). The
// packages themselves are in packages/ at the top of the repository.

export interface PackageStep {
  title: string;
  body: ReactNode;
  code?: string;
  // what the code makes
  preview?: ReactNode;
}

export interface PackageExample {
  title: string;
  body?: ReactNode;
  code: string;
  preview?: ReactNode;
}

export interface PackageInfo {
  // the page's address, and its logo
  slug: FrameworkLogoName;
  name: string;
  framework: string;
  // a line for the card on /packages
  summary: string;
  intro: ReactNode;
  gettingStarted: PackageStep[];
  examples: PackageExample[];
  // how options are written in this package (props or data- attributes)
  optionsNote: ReactNode;
}

// what the examples' code makes, shown under it
const DEFAULT_ICON_PREVIEW = <IconPreview icon="blood/blood-bag" />;
const STYLED_ICON_PREVIEW = (
  <IconPreview
    icon="blood/blood-bag"
    variant="filled"
    size={48}
    color="#6666ff"
  />
);
const NEXT_TO_TEXT_PREVIEW = (
  <PreviewButton>
    <IconPreview icon="symbols/heart" size="1em" /> Save
  </PreviewButton>
);
// the padding and background go on the <svg> around the drawing, so here
// they're on a wrapper around the preview
const STYLED_BACKGROUND_PREVIEW = (
  <span
    style={{
      display: 'inline-flex',
      padding: 6,
      color: '#6666ff',
      background: '#ebebff',
      borderRadius: '50%'
    }}
  >
    <IconPreview icon="blood/blood-bag" />
  </span>
);
const TITLE_PREVIEW = (
  <IconPreview icon="symbols/heart" title="Saved to favorites" />
);

// Instructions to paste into an AI coding assistant (on /packages), so it
// uses the right package correctly instead of guessing: inventing icon names,
// or using an unofficial package. Assistants that can see the project pick the
// package from its framework.
export const AI_PROMPT = `I'm using Health Icons (https://healthicons.org), free public domain health icons, in my project. Use the official package that fits the project, and follow these rules:

1. Pick the package from the project's framework and install it with npm:
   - React or Next.js: @healthicons/react. Import each icon as a component: import { BloodBag } from '@healthicons/react'; then <BloodBag />.
   - Vue or Nuxt: @healthicons/vue. Import each icon as a component: import { BloodBag } from '@healthicons/vue'; then <BloodBag />.
   - Svelte or SvelteKit: @healthicons/svelte. Import each icon as a component: import { BloodBag } from '@healthicons/svelte'; then <BloodBag />. For events, use onclick in Svelte 5 or on:click in Svelte 4.
   - Anything else, including plain HTML: @healthicons/core. Put placeholders in the HTML using the icon's name from healthicons.org (with dashes), <i data-healthicon="blood-bag"></i>, then replace them: import { createIcons, BloodBag } from '@healthicons/core'; createIcons({ icons: { BloodBag } }). To build icons in code, use toSvg(BloodBag, options) for an SVG string or createElement(BloodBag, options) for an element.
2. Only import the icons you use.
3. In code, an icon's name is its name on healthicons.org in PascalCase: blood-bag is BloodBag, blister-pills_oval_x14 is BlisterPillsOvalX14. Exceptions: 0 to 9 are Number0 to Number9, ! is ExclamationPoint, and 4x4 is SUV. Each icon's page on healthicons.org shows its code name. Don't invent names: if you're not sure an icon exists, tell me and suggest searching healthicons.org.
4. Options (props for components; data-variant, data-size, data-color and data-title on placeholders): variant ("outline", the default, or "filled"), size (pixels or any CSS size like "1em"; default 24), color (any CSS color; icons use the text color by default, so prefer styling the text color) and title. Other attributes, like a class or style, go on the <svg> element.
5. Icons are hidden from screen readers by default, which is right when they're next to text that says the same thing. If an icon is the only way something is communicated, give it a title. Put clickable icons inside a <button> with an accessible label rather than making the icon itself clickable.
6. Don't use the unofficial healthicons-react or healthicons-vue packages, and don't copy SVG files into the project.

What I'd like you to do: `;

const findAnIcon = (
  <>
    Browse the <Link href="/">icons</Link> and click one you like. The window
    that opens shows its <strong>Code name</strong>, like <code>BloodBag</code>,
    with a button to copy it: that’s the name to use in your code.
  </>
);

// the JavaScript package uses both names: the filename in placeholders, the
// code name in imports
const findAnIconJavaScript = (
  <>
    Browse the <Link href="/">icons</Link> and click one you like. The window
    that opens shows its <strong>Filename</strong>, like <code>blood-bag</code>,
    which you use in your HTML, and its <strong>Code name</strong>, like{' '}
    <code>BloodBag</code>, which you use in your JavaScript.
  </>
);

function installStep(name: string): PackageStep {
  return {
    title: 'Install the package',
    body: (
      <>
        In your project’s folder, run this command. Using Yarn or pnpm? Run{' '}
        <code>yarn add {name}</code> or <code>pnpm add {name}</code> instead.
      </>
    ),
    code: `npm install ${name}`
  };
}

const COMPONENT_OPTIONS_NOTE = (
  <>
    Set these as props. Anything else, like a <code>class</code> or{' '}
    <code>style</code>, is added to the icon’s <code>&lt;svg&gt;</code> element.
  </>
);

export const PACKAGES: PackageInfo[] = [
  {
    slug: 'react',
    name: '@healthicons/react',
    framework: 'React',
    summary: 'Components for React and Next.js.',
    intro: (
      <p>
        Every Health icon as a React component. Import just the icons you need,
        in either style, at any size and in any color.
      </p>
    ),
    gettingStarted: [
      installStep('@healthicons/react'),
      { title: 'Find an icon', body: findAnIcon },
      {
        title: 'Add it to your page',
        preview: DEFAULT_ICON_PREVIEW,
        body: 'Import the icon by its name and use it like any other component.',
        code: `import { BloodBag } from '@healthicons/react';

export default function App() {
  return <BloodBag />;
}`
      },
      {
        title: 'Change how it looks',
        preview: STYLED_ICON_PREVIEW,
        body: 'Icons are outlined and 24 pixels by default, in the color of the text around them. Change any of these with props.',
        code: '<BloodBag variant="filled" size={48} color="#6666ff" />'
      }
    ],
    examples: [
      {
        title: 'Next to text',
        preview: NEXT_TO_TEXT_PREVIEW,
        body: (
          <>
            With <code>size="1em"</code> an icon is as tall as the text, and
            it’s the text’s color unless you give it another.
          </>
        ),
        code: `<button>
  <Heart size="1em" /> Save
</button>`
      },
      {
        title: 'For screen readers',
        preview: TITLE_PREVIEW,
        body: (
          <>
            Icons are hidden from screen readers unless they have a{' '}
            <code>title</code>. Give one to icons that aren’t next to words
            saying the same thing.
          </>
        ),
        code: '<Heart title="Saved to favorites" />'
      },
      {
        title: 'With your own styles',
        body: (
          <>
            Like any element, icons take a <code>className</code> and{' '}
            <code>style</code>.
          </>
        ),
        code: `<BloodBag
  color="#6666ff"
  style={{ padding: 6, background: '#ebebff', borderRadius: '50%' }}
/>`,
        preview: STYLED_BACKGROUND_PREVIEW
      }
    ],
    optionsNote: COMPONENT_OPTIONS_NOTE
  },
  {
    slug: 'vue',
    name: '@healthicons/vue',
    framework: 'Vue',
    summary: 'Components for Vue 3 and Nuxt.',
    intro: (
      <p>
        Every Health icon as a Vue 3 component. Import just the icons you need,
        in either style, at any size and in any color.
      </p>
    ),
    gettingStarted: [
      installStep('@healthicons/vue'),
      { title: 'Find an icon', body: findAnIcon },
      {
        title: 'Add it to your page',
        preview: DEFAULT_ICON_PREVIEW,
        body: 'Import the icon by its name and use it like any other component.',
        code: `<script setup>
import { BloodBag } from '@healthicons/vue';
</script>

<template>
  <BloodBag />
</template>`
      },
      {
        title: 'Change how it looks',
        preview: STYLED_ICON_PREVIEW,
        body: 'Icons are outlined and 24 pixels by default, in the color of the text around them. Change any of these with props.',
        code: '<BloodBag variant="filled" :size="48" color="#6666ff" />'
      }
    ],
    examples: [
      {
        title: 'Next to text',
        preview: NEXT_TO_TEXT_PREVIEW,
        body: (
          <>
            With <code>size="1em"</code> an icon is as tall as the text, and
            it’s the text’s color unless you give it another.
          </>
        ),
        code: `<button>
  <Heart size="1em" /> Save
</button>`
      },
      {
        title: 'For screen readers',
        preview: TITLE_PREVIEW,
        body: (
          <>
            Icons are hidden from screen readers unless they have a{' '}
            <code>title</code>. Give one to icons that aren’t next to words
            saying the same thing.
          </>
        ),
        code: '<Heart title="Saved to favorites" />'
      },
      {
        title: 'With your own styles',
        body: (
          <>
            Like any element, icons take a <code>class</code> and{' '}
            <code>style</code>.
          </>
        ),
        code: `<BloodBag
  color="#6666ff"
  style="padding: 6px; background: #ebebff; border-radius: 50%"
/>`,
        preview: STYLED_BACKGROUND_PREVIEW
      }
    ],
    optionsNote: COMPONENT_OPTIONS_NOTE
  },
  {
    slug: 'svelte',
    name: '@healthicons/svelte',
    framework: 'Svelte',
    summary: 'Components for Svelte 4 and 5 and SvelteKit.',
    intro: (
      <p>
        Every Health icon as a Svelte component, for Svelte 4 and 5. Import just
        the icons you need, in either style, at any size and in any color.
      </p>
    ),
    gettingStarted: [
      installStep('@healthicons/svelte'),
      { title: 'Find an icon', body: findAnIcon },
      {
        title: 'Add it to your page',
        preview: DEFAULT_ICON_PREVIEW,
        body: 'Import the icon by its name and use it like any other component.',
        code: `<script>
  import { BloodBag } from '@healthicons/svelte';
</script>

<BloodBag />`
      },
      {
        title: 'Change how it looks',
        preview: STYLED_ICON_PREVIEW,
        body: 'Icons are outlined and 24 pixels by default, in the color of the text around them. Change any of these with props.',
        code: '<BloodBag variant="filled" size={48} color="#6666ff" />'
      }
    ],
    examples: [
      {
        title: 'Next to text',
        preview: NEXT_TO_TEXT_PREVIEW,
        body: (
          <>
            With <code>size="1em"</code> an icon is as tall as the text, and
            it’s the text’s color unless you give it another.
          </>
        ),
        code: `<button>
  <Heart size="1em" /> Save
</button>`
      },
      {
        title: 'For screen readers',
        preview: TITLE_PREVIEW,
        body: (
          <>
            Icons are hidden from screen readers unless they have a{' '}
            <code>title</code>. Give one to icons that aren’t next to words
            saying the same thing.
          </>
        ),
        code: '<Heart title="Saved to favorites" />'
      },
      {
        title: 'With your own styles',
        body: (
          <>
            Like any element, icons take a <code>class</code> and{' '}
            <code>style</code>.
          </>
        ),
        code: `<BloodBag
  color="#6666ff"
  style="padding: 6px; background: #ebebff; border-radius: 50%"
/>`,
        preview: STYLED_BACKGROUND_PREVIEW
      },
      {
        title: 'Handling clicks',
        body: (
          <>
            In Svelte 5, use <code>onclick</code>. In Svelte 4, use{' '}
            <code>on:click</code> (which also works in Svelte 5). Other events,
            like <code>on:mouseenter</code> and <code>on:keydown</code>, work
            too. If people should be able to click an icon, put it in a{' '}
            <code>&lt;button&gt;</code> so keyboards and screen readers can use
            it.
          </>
        ),
        code: `<button onclick={save}>
  <Heart size="1em" /> Save
</button>

<!-- Svelte 4 -->
<Heart on:click={save} />`
      }
    ],
    optionsNote: COMPONENT_OPTIONS_NOTE
  },
  {
    slug: 'javascript',
    name: '@healthicons/core',
    framework: 'JavaScript',
    summary: 'For any website, with or without a framework.',
    intro: (
      <p>
        Health icons for any website: put placeholders in your HTML and they
        become icons. Or make icons in code, as SVG text or elements.
      </p>
    ),
    gettingStarted: [
      installStep('@healthicons/core'),
      { title: 'Find an icon', body: findAnIconJavaScript },
      {
        title: 'Put placeholders in your HTML',
        body: (
          <>
            Add an <code>&lt;i&gt;</code> tag where each icon should go, with
            the icon’s name from this site (with dashes, like{' '}
            <code>blood-bag</code>).
          </>
        ),
        code: '<i data-healthicon="blood-bag"></i>'
      },
      {
        title: 'Turn them into icons',
        preview: DEFAULT_ICON_PREVIEW,
        body: (
          <>
            In your JavaScript, import the icons you use (in PascalCase) and
            call <code>createIcons</code>. It replaces each placeholder with its
            icon.
          </>
        ),
        code: `import { createIcons, BloodBag } from '@healthicons/core';

createIcons({ icons: { BloodBag } });`
      },
      {
        title: 'Change how it looks',
        preview: STYLED_ICON_PREVIEW,
        body: (
          <>
            Icons are outlined and 24 pixels by default, in the color of the
            text around them. Change any of these on the placeholder.
          </>
        ),
        code: `<i
  data-healthicon="blood-bag"
  data-variant="filled"
  data-size="48"
  data-color="#6666ff"
></i>`
      }
    ],
    examples: [
      {
        title: 'Without installing anything',
        preview: <IconPreview icon="symbols/heart" />,
        body: (
          <>
            No build tools? Load the package from a CDN instead of step 1. This
            loads every icon, so it’s best for small sites and trying things
            out.
          </>
        ),
        code: `<i data-healthicon="heart"></i>

<script type="module">
  import { createIcons, icons } from
    'https://cdn.jsdelivr.net/npm/@healthicons/core/+esm';

  createIcons({ icons });
</script>`
      },
      {
        title: 'As SVG text',
        preview: (
          <IconPreview icon="blood/blood-bag" variant="filled" size={32} />
        ),
        body: (
          <>
            <code>toSvg</code> gives an icon’s <code>&lt;svg&gt;</code> as text,
            to add to HTML you’re building.
          </>
        ),
        code: `import { toSvg, BloodBag } from '@healthicons/core';

const svg = toSvg(BloodBag, { variant: 'filled', size: 32 });`
      },
      {
        title: 'As an element',
        preview: <IconPreview icon="blood/blood-bag" title="Blood bag" />,
        body: (
          <>
            <code>createElement</code> gives an <code>&lt;svg&gt;</code> element
            to add to the page.
          </>
        ),
        code: `import { createElement, BloodBag } from '@healthicons/core';

document.body.append(createElement(BloodBag, { title: 'Blood bag' }));`
      }
    ],
    optionsNote: (
      <>
        On placeholders, set these as <code>data-</code> attributes (
        <code>data-variant="filled"</code>); with <code>toSvg</code> and{' '}
        <code>createElement</code>, as options. Other attributes, like a{' '}
        <code>class</code>, are added to the icon’s <code>&lt;svg&gt;</code>{' '}
        element.
      </>
    )
  }
];
