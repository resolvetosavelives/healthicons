import { GetServerSideProps } from 'next';
import { getCategoriesAndIcons } from '../lib/icons';

export default function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Content-Type', 'text/plain');

  res.write('https://healthicons.org/\n');
  res.write('https://healthicons.org/about\n');
  res.write('https://healthicons.org/request-icon\n');
  res.write('https://healthicons.org/icons.zip\n');

  const categories = await getCategoriesAndIcons();

  categories.forEach((category) => {
    category.icons.forEach((icon) => {
      // outline version left off on purpose to avoid near-duplicate search results
      res.write(
        `https://healthicons.org/icon/filled/${icon.category}/${icon.id}\n`
      );
    });
  });

  res.end();

  return { props: {} };
};
