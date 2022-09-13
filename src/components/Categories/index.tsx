import React from 'react';

import styles from './Categories.module.scss';

const categories = ['Все', 'Открытый мир', 'Экшен', 'Шутер', 'Паркур'];

type TCategoriesProps = {
  currentCategory: string;
  onChangeCategory: (category: string) => void;
};

const Categories: React.FC<TCategoriesProps> = ({ currentCategory, onChangeCategory }) => {
  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onChangeCategory(category)}
            className={currentCategory === category ? `${styles.active}` : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
