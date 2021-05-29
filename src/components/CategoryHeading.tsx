import { ReactNode } from 'react';
import styles from './CategoryHeading.module.scss';

interface CategoryHeadingProps {
  children: ReactNode;
}

export function CategoryHeading(props: CategoryHeadingProps) {
  return <h2 className={styles.categoryHeading}>{props.children}</h2>;
}
