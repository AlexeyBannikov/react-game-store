import React from 'react';

import styles from './Pagination.module.scss';

type TPaginationProps = {
  itemCount: number;
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<TPaginationProps> = ({ itemCount, currentPage, onChangePage }) => {
  return (
    <ul className={styles.pagination}>
      {[...Array(Math.ceil(itemCount / 6))].map((_, index) => (
        <li
          key={index}
          className={index + 1 === currentPage ? `${styles.active}` : ''}
          onClick={() => onChangePage(index + 1)}>
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
