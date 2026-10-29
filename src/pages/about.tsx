import { useEffect } from 'react';
import HeadTags from '../components/HeadTags';
import Link from 'next/link';
import { ContentPage } from '../components/ContentPage';
import { AboutNav } from '../components/AboutNav';
import { Contributors } from '../components/Contributors';

// sections that used to be on this page, so old links to them (like
// /about#license) still land in the right place
const MOVED_SECTIONS: Record<string, string> = {
  license: '/licenses#license',
  weblicense: '/licenses#weblicense',
  contribute: '/contribute',
  conduct: '/contribute#conduct'
};

export default function About() {
  useEffect(() => {
    const movedTo = MOVED_SECTIONS[window.location.hash.slice(1)];
    if (movedTo) {
      window.location.replace(movedTo);
    }
  }, []);

  return (
    <>
      <HeadTags
        title="About Health Icons"
        description="Who makes Health Icons, a volunteer effort to create free, public domain icons for health projects all over the world."
        path="/about"
      />
      <ContentPage
        title="About this project"
        titleId="about"
        nav={<AboutNav />}
        intro={
          <p>
            Health Icons is a volunteer effort to create a ‘global good’ for
            health projects all over the world. These icons are available in the
            public domain for use in any type of project.
          </p>
        }
      >
        <p>
          The Health Icons project was started in 2021 during the Covid 19
          pandemic. A group of volunteers originally came together to upgrade
          the icons used in the open source{' '}
          <a href="https://dhis2.org">DHIS2</a> health software project. This
          volunteer effort expanded into the Health Icons project to provide
          high quality free-to-use icons for the entire world. Read{' '}
          <a href="/history">our full history here</a>.
        </p>
        <p>
          The project is hosted by the public health not-for-profit{' '}
          <a href="https://resolvetosavelives.org">Resolve to Save Lives</a> as
          an expression of our commitment to offer the icons for free, forever.
        </p>
        <p>
          Need an icon for your project?{' '}
          <Link href="/request-icon">Submit a request</Link> and we will do our
          best to respond. Want to help make icons?{' '}
          <Link href="/contribute">Here's how to contribute</Link>.
        </p>

        <h2 id="react">Packages and Figma plugin</h2>
        <p>
          Using Health Icons in your website or app? Our{' '}
          <Link href="/packages">packages</Link> for React, Vue, Svelte and
          plain JavaScript let you import just the icons you need, in either
          style, at any size and in any color. Designing in Figma? The{' '}
          <Link href="/packages#figma">Health Icons Figma plugin</Link> lets you
          find icons and add them to your designs without leaving Figma.
        </p>

        <h2 id="credit">Credit &amp; inspiration</h2>
        <p>
          Some of these icons are based on open source icons in{' '}
          <a href="https://dhis2.org/">DHIS2</a> and from{' '}
          <a href="https://medic.org/">Medic.org</a>. We also took inspiration
          from the excellent open source{' '}
          <a href="https://remixicon.com">Remix Icon</a> collection. Thanks!
        </p>

        <Contributors />
      </ContentPage>
    </>
  );
}
