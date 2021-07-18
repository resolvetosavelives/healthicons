import React from 'react';
import Downshift from 'downshift';
import { Category } from '../lib/icons';
import { useDispatch } from 'react-redux';
import { setCategory } from '../store/search';

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
      {({
        getItemProps,
        openMenu,
        closeMenu,
        isOpen,
        highlightedIndex,
        selectedItem
      }) => (
        <div>
          <button onClick={() => (isOpen ? closeMenu() : openMenu())}>
            {selectedItem || allCategories}
          </button>
          {isOpen && (
            <div>
              <ul>
                {items.map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item,
                      index,
                      item,
                      isSelected: selectedItem === item
                    })}
                    isHighlighted={highlightedIndex === index}
                  >
                    <button>{item}</button>
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
