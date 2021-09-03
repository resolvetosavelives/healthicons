import HeadTags from '../components/HeadTags';
import LandingPage from '../components/LandingPage';
import { GetStaticProps } from 'next';
import { getCategoriesAndIcons, Category } from '../lib/icons';

interface HomeProps {
  categories: Category[];
}

export default function Home({ categories }: HomeProps) {
  return (
    <>
      <HeadTags />
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
