import { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { searchKeywords } from '../lib/searchKeywords';
import { TopBar } from '../components/TopBar';
import { CategoryHeading } from '../components/CategoryHeading';
import { IconTile } from '../components/IconTile';
import { IconTileModal } from '../components/IconTileModal';
import styles from './index.module.scss';

import { getCategoriesAndIcons, Category, Icon } from '../lib/icons';

interface ModalIcon {
  icon: Icon;
  iconType: string;
}

interface HomeProps {
  categories: Category[];
  iconId: string;
}

export default function Home({ categories, iconId }: HomeProps) {
  const router = useRouter();

  const [modalIcon, setModalIcon] = useState<ModalIcon>(undefined);
  const [query, setQuery] = useState<string>();

  const iconsToRender = useMemo(() => {
    const filteredIcons: Icon[] = [];
    if (!query) {
      return filteredIcons;
    }

    categories.forEach((category) => {
      category.icons.forEach((icon) => {
        if (
          searchKeywords(
            query,
            icon.tags.concat([icon.title, category.title]).join(', ')
          )
        ) {
          filteredIcons.push(icon);
        }
      });
    });
    return filteredIcons;
  }, [query, categories]);

  const totalIconCount = categories.reduce((counter, category) => {
    return counter + category.icons.length;
  }, 0);

  useEffect(() => {
    const iconMatch = router.asPath.match(/\/#icon\/(filled|outline)\/(.*)/i);
    if (iconMatch) {
      const currentIcon = categories
        .flatMap((category) => category.icons)
        .find((icon) => icon.fileName === iconMatch[2]);

      if (currentIcon) {
        setModalIcon({ icon: currentIcon, iconType: iconMatch[1] });
      }
    }
  }, [router.asPath, categories]);

  const pageTitle = modalIcon
    ? `Health icons: ${modalIcon.icon.title}`
    : 'Health icons';

  const ogUrl = modalIcon
    ? `https://healthicons.org/#icon/${modalIcon.iconType}/${modalIcon.icon.fileName}`
    : 'https://healthicons.org';

  const ogImagePath = modalIcon
    ? `icons/png/${modalIcon.iconType}/${modalIcon.icon.path}/${modalIcon.icon.fileName}@2x.png`
    : 'og_image.png';

  const ogImageWidth = modalIcon ? '96' : '1280';
  const ogImageHeight = modalIcon ? '96' : '640';

  return (
    <div className="container">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Health icons" />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content="Free, open source health icons. Use in your next commercial or personal project. Editing is ok. Republishing is ok. No need to give credit."
        />
        <meta property="og:url" content={ogUrl} />
        <meta
          property="og:image"
          content={`http://healthicons.org/${ogImagePath}`}
        />
        <meta
          property="og:image:secure_url"
          content={`https://healthicons.org/${ogImagePath}`}
        />
        <meta property="og:image:width" content={ogImageWidth} />
        <meta property="og:image:height" content={ogImageHeight} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={`https://healthicons.org/${ogImagePath}`}
        />
        <meta property="twitter:site" content="@health_icons" />
      </Head>

      <TopBar />
      <main id="main">
        <div className={styles.box}>
          <h1 className="mt-2">Free, open source health icons</h1>
          <h3>
            Free for use in your next commercial or personal project.
            <span> </span>
            Editing is ok. Republishing is ok. No need to give credit.
          </h3>
        </div>
        <label className={styles.filterBox}>
          <input
            type="text"
            className={styles.filterBoxInput}
            placeholder={`Search ${totalIconCount * 2} icons…`}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {(!query ||
              category.icons.some((icon) => {
                return iconsToRender.includes(icon);
              })) && <CategoryHeading>{category.title}</CategoryHeading>}
            <div className={styles.iconGrid}>
              {category.icons.map((icon, iconIndex) => (
                <IconTile
                  key={iconIndex}
                  icon={icon}
                  visible={!query || iconsToRender.includes(icon)}
                  onClick={(iconType: string) => {
                    setModalIcon({ icon, iconType });
                    const id = `icon/${iconType}/${icon.fileName}`;
                    router.push(`/#${id}`);
                  }}
                />
              ))}
            </div>
          </div>
        ))}
        {modalIcon && (
          <IconTileModal
            icon={modalIcon.icon}
            iconType={modalIcon.iconType}
            isOpen={modalIcon !== undefined}
            onClose={() => {
              setModalIcon(undefined);
              router.push('/');
            }}
          />
        )}
      </main>
      <footer>
        All icons are licensed under an open source{' '}
        <a href="/about#license" className={styles.link}>
          MIT License
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const categories = await getCategoriesAndIcons();
  return {
    props: {
      categories,
      iconId: null
    }
  };
};
