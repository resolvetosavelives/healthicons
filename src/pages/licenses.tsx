import HeadTags from '../components/HeadTags';
import { AboutNav } from '../components/AboutNav';
import { ContentPage } from '../components/ContentPage';
import styles from './about.module.scss';

export default function Licenses() {
  return (
    <>
      <HeadTags
        title="Licenses | Health Icons"
        description="Health Icons are in the public domain (CC0), so you can use them in any project for free, and the website's code is MIT licensed."
        path="/licenses"
      />
      <ContentPage
        title="Licenses"
        titleId="licenses"
        nav={<AboutNav />}
        intro={
          <p>
            The icons are in the public domain, so you can use them in any type
            of project, for free, with no credit needed. The code for this
            website is open source too.
          </p>
        }
      >
        <h2 id="license">Icons license</h2>
        <div className={styles.codeBlock}>
          <p>CC0 License</p>
          <p>
            To the extent possible under law,
            <a rel="dct:publisher" href="https://healthicons.org">
              <span property="dct:title"> Health Icons </span>
            </a>
            has waived all copyright and related or neighboring rights to icons
            available at
            <span property="dct:title"> Health Icons</span>.
          </p>
          <p>
            <a
              rel="license"
              href="http://creativecommons.org/publicdomain/zero/1.0/"
            >
              <img
                src="/cc0.png"
                alt="CC0 Public Domain License"
                className="cczero"
                width="120"
                height="39"
              />
            </a>
          </p>
        </div>
        <h2 id="weblicense">Website license</h2>
        <p>
          The code for this website is available for anyone to use for any type
          of project.
        </p>
        <div className={styles.codeBlock}>
          <p>MIT License</p>

          <p>Copyright (c) 2021 Resolve to Save Lives</p>

          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
          </p>

          <p>
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </p>

          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </div>
      </ContentPage>
    </>
  );
}
