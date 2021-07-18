import React from 'react';
import Downshift from 'downshift';
import classnames from 'classnames';
import { Category } from '../lib/icons';
import { useDispatch } from 'react-redux';
import { setCategory } from '../store/search';
import styles from './CategoryDropdown.module.scss';

interface CategoryDropdownProps {
  categories: Category[];
}

export function CategoryDropdown({ categories }: CategoryDropdownProps) {
  const dispatch = useDispatch();
  const allCategories = 'all categories';
  const items = [allCategories, ...categories.map((c) => c.title)];

  return (
    <Downshift
      onChange={(value: string) => {
        dispatch(setCategory(value === allCategories ? '' : value));
      }}
    >
      {({ getItemProps, openMenu, closeMenu, isOpen, selectedItem }) => (
        <div className={styles.categoryDropdown}>
          <button
            className={styles.menuButton}
            onClick={() => (isOpen ? closeMenu() : openMenu())}
          >
            {selectedItem || allCategories}
          </button>
          {isOpen && (
            <div>
              <ul className={styles.menuContainer}>
                {items.map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item,
                      index,
                      item,
                      isSelected: selectedItem === item
                    })}
                  >
                    <button className={classnames(styles.menuItem)}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Downshift>
  );
}
