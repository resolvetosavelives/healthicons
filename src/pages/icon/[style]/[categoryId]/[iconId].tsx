import { useRouter } from 'next/router';
import HeadTags from '../../../../components/HeadTags';
import IconGrid from '../../../../components/IconGrid';

import { getCategoriesAndIcons, Category } from '../../../../lib/icons';

interface IconPageProps {
  categories: Category[];
  iconId: string;
  style: 'outline' | 'filled';
  categoryId: string;
}

export default function IconPage({
  iconId,
  categoryId,
  style,
  categories
}: IconPageProps) {
  const router = useRouter();

  const icon = categories
    .flatMap((category) => category.icons)
    .find((i) => i.iconId === iconId && i.categoryId === categoryId);

  return (
    <>
      <HeadTags title={`Icon: ${icon.title}`} path={router.asPath} />
      <IconGrid
        categories={categories}
        iconId={iconId}
        categoryId={categoryId}
        style={style}
      />
    </>
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
  ['filled', 'outline'].forEach((style) => {
    allIcons.forEach((icon) => {
      allPaths.push({
        params: { style, categoryId: icon.categoryId, iconId: icon.iconId }
      });
    });
  });

  return {
    paths: allPaths,
    fallback: false
  };
}
