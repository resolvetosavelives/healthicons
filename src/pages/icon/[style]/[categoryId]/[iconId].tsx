import IconGrid from '../../../../components/IconGrid';

import { getCategoriesAndIcons, Category } from '../../../../lib/icons';

interface IconPageProps {
  categories: Category[];
  iconId?: string;
  style: 'outline' | 'filled';
  categoryId?: string;
}

export default function IconPage({
  iconId,
  categoryId,
  style,
  categories
}: IconPageProps) {
  return (
    <IconGrid
      categories={categories}
      iconId={iconId}
      categoryId={categoryId}
      style={style}
    />
  );
}

export async function getStaticProps({
  params: { iconId, categoryId, style }
}) {
  const categories = await getCategoriesAndIcons();
  return { props: { iconId, categoryId, style, categories } };
}

export async function getStaticPaths() {
  const categories = await getCategoriesAndIcons();
  const allIcons = categories.flatMap((category) => {
    return category.icons;
  });

  const allPaths = [];
  allIcons.forEach((icon) => {
    allPaths.push({
      params: { style: 'filled', categoryId: icon.path, iconId: icon.fileName }
    });

    allPaths.push({
      params: { style: 'outline', categoryId: icon.path, iconId: icon.fileName }
    });
  });

  return {
    paths: allPaths,
    fallback: false
  };
}
