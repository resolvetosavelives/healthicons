import { ReactNode } from 'react';
import styles from './CategoryHeading.module.scss';

interface CategoryHeadingProps {
  children: ReactNode;
  count?: number;
}

export function CategoryHeading(props: CategoryHeadingProps) {
  return (
    <h2 className={styles.categoryHeading}>
      {props.children}
      {props.count !== undefined && (
        <span className={styles.count}>
          {props.count} {props.count === 1 ? 'icon' : 'icons'}
        </span>
      )}
    </h2>
  );
}
