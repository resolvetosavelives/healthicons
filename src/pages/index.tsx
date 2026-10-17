import HeadTags, { SITE_URL } from '../components/HeadTags';
import LandingPage from '../components/LandingPage';
import { GetStaticProps } from 'next';
import { getCategoriesAndIcons, Category } from '../lib/icons';

interface HomeProps {
  categories: Category[];
}

export default function Home({ categories }: HomeProps) {
  return (
    <>
      <HeadTags
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Health Icons',
          url: SITE_URL,
          // lets search engines offer a search box that goes straight to
          // filtered results, e.g. /?search=heart
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${SITE_URL}/?search={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        }}
      />
      <LandingPage categories={categories} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const categories = await getCategoriesAndIcons();
  return {
    props: {
      categories
    }
  };
};
