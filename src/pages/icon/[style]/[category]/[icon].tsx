import { useRouter } from 'next/router';
import HeadTags from '../../../../components/HeadTags';
import IconGrid from '../../../../components/IconGrid';

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
  const router = useRouter();

  const iconObj = categories
    .flatMap((c) => c.icons)
    .find((i) => i.id === icon && i.category === category);

  return (
    <>
      <HeadTags title={`Icon: ${iconObj.title}`} path={router.asPath} />
      <IconGrid categories={categories} icon={iconObj} style={style} />
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
