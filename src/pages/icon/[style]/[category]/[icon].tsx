import HeadTags, { SITE_URL } from '../../../../components/HeadTags';
import LandingPage from '../../../../components/LandingPage';

import { getCategoriesAndIcons, Category } from '../../../../lib/icons';

interface IconPageProps {
  categories: Category[];
  icon: string;
  style: 'outline' | 'filled';
  category: string;
}

export default function IconPage({
  icon,
  category,
  style,
  categories
}: IconPageProps) {
  const iconObj = categories
    .flatMap((c) => c.icons)
    .find((i) => i.id === icon && i.category === category);

  // the outline and filled pages for an icon are nearly identical, so both
  // name the outline page (the site's default style) as the canonical one and
  // search engines index a single page per icon
  const canonicalPath = `/icon/outline/${category}/${icon}`;
  // for search results, with the icon's name (what people search for); the
  // tags go to search engines in the structured data below
  const description = `Free ${iconObj.title} icon for your website, app or report. Download it as SVG or PNG and use it anywhere, no credit needed.`;
  // for social previews, under the image (which shows the name)
  const socialDescription =
    'Need an icon? Download this one for free and use it in any project, no credit needed.';

  return (
    <>
      <HeadTags
        title={`${iconObj.title} — a free open-source icon from Health Icons`}
        description={description}
        socialDescription={socialDescription}
        path={canonicalPath}
        image={`og-icon-images/${iconObj.category}/${iconObj.id}.png`}
        imageWidth={1200}
        imageHeight={630}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ImageObject',
          name: `${iconObj.title} icon`,
          description,
          contentUrl: `${SITE_URL}/icons/svg/${style}/${iconObj.category}/${iconObj.id}.svg`,
          thumbnailUrl: `${SITE_URL}/icons/png/${style}/${iconObj.category}/${iconObj.id}.png`,
          encodingFormat: 'image/svg+xml',
          keywords: iconObj.tags.join(', '),
          // public domain: lets image search show the icon as free to use
          license: 'https://creativecommons.org/publicdomain/zero/1.0/',
          acquireLicensePage: `${SITE_URL}/about#license`,
          creditText: 'Health Icons',
          creator: {
            '@type': 'Organization',
            name: 'Health Icons',
            url: SITE_URL
          },
          copyrightNotice: 'Public domain (CC0)'
        }}
      />
      <LandingPage categories={categories} icon={iconObj} style={style} />
    </>
  );
}

export async function getStaticProps({ params: { icon, category, style } }) {
  const categories = await getCategoriesAndIcons();
  return { props: { icon, category, style, categories } };
}

export async function getStaticPaths() {
  const categories = await getCategoriesAndIcons();
  const allIcons = categories.flatMap((category) => {
    return category.icons;
  });

  const allPaths = [];
  ['filled', 'outline'].forEach((style) => {
    allIcons.forEach((icon) => {
      allPaths.push({
        params: { style, category: icon.category, icon: icon.id }
      });
    });
  });

  return {
    paths: allPaths,
    fallback: false
  };
}
