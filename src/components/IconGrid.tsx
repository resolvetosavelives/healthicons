import classnames from 'classnames';
import { IconTile } from './IconTile';
import { Icon, IconFormat } from '../lib/icons';
import { SearchStyle } from '../store/search';
import { ModalIcon } from './LandingPage';
import styles from '../pages/index.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { store } from '../store';
import { filtersToQueryString } from '../lib/filterQuery';

interface IconGridProps {
  icons: Icon[];
  style: SearchStyle;
  format: IconFormat;
  colored: boolean;
  setModalIcon: Dispatch<SetStateAction<ModalIcon>>;
}

export default function IconGrid({
  icons,
  style,
  format,
  colored,
  setModalIcon
}: IconGridProps) {
  const router = useRouter();
  return (
    <div
      className={classnames(
        styles.iconGrid,
        style === 'all' ? styles.iconGridDouble : styles.iconGridSingle
      )}
    >
      {icons.map((icon, iconIndex) => (
        <IconTile
          key={iconIndex}
          icon={icon}
          iconStyle={style}
          iconFormat={format}
          colored={colored}
          visible={true}
          onClick={(iconType: string) => {
            // uses the "as" property instead of the "url" to keep the route from changing which causes all of the icons to re-render each time. See the useEffect() in LandingPage that captures the back/forward buttons to handle the URL changes
            router.push(
              '/',
              `/icon/${iconType}/${icon.category}/${
                icon.id
              }${filtersToQueryString(store.getState().search)}`,
              {
                shallow: true,
                scroll: false
              }
            );
            setModalIcon({ icon, iconType });
          }}
        />
      ))}
    </div>
  );
}
