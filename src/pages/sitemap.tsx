import { GetServerSideProps } from 'next';
import { getCategoriesAndIcons } from '../lib/icons';

export default function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Content-Type', 'text/plain');

  const categories = await getCategoriesAndIcons();

  categories.forEach((category) => {
    category.icons.forEach((icon) => {
      res.write(
        `https://healthicons.org/icon/filled/${icon.category}/${icon.id}\n`
      );
      res.write(
        `https://healthicons.org/icon/outline/${icon.category}/${icon.id}\n`
      );
    });
  });

  res.end();

  return { props: {} };
};
