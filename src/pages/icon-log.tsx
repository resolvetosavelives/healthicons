import { GetStaticProps } from 'next';
import HeadTags from '../components/HeadTags';
import { AboutNav } from '../components/AboutNav';
import { ContentPage } from '../components/ContentPage';
import { IconLogGroups } from '../components/IconLogGroups';
import { IconsAdded, getIconsAdded } from '../lib/iconLog';

interface IconLogProps {
  iconsAdded: IconsAdded[];
}

export const getStaticProps: GetStaticProps<IconLogProps> = async () => {
  return { props: { iconsAdded: getIconsAdded() } };
};

export default function IconLog({ iconsAdded }: IconLogProps) {
  const total = iconsAdded.reduce((sum, group) => sum + group.icons.length, 0);

  return (
    <>
      <HeadTags
        title="Icon Log | Health Icons"
        description="Every Health Icon, grouped by the day it was added to the website, newest first."
        path="/icon-log"
      />
      <ContentPage
        title="Icon log"
        titleId="icon-log"
        nav={<AboutNav />}
        intro={
          <p>
            All {total} icons, grouped by the day they were added to the
            website.
          </p>
        }
      >
        <IconLogGroups iconsAdded={iconsAdded} />
      </ContentPage>
    </>
  );
}
