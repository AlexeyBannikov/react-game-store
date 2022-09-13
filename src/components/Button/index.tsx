import React from 'react';

import styles from './Button.module.scss';

type TButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  isItemInCart?: boolean;
};

const Button: React.FC<TButtonProps> = ({ onClick, children, isItemInCart }) => {
  return (
    <button
      className={!isItemInCart ? `${styles.button}` : `${styles.button} ${styles.added}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
