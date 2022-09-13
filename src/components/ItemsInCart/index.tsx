import React from 'react';

import styles from './ItemsInCart.module.scss';

type TItemsInCartProps = {
  quantity: number;
};

const ItemsInCart: React.FC<TItemsInCartProps> = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className={styles.items}>{quantity}</div> : null;
};

export default ItemsInCart;
