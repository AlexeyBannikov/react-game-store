import React from 'react';
import { useDispatch } from 'react-redux';

import deleteIcon from '../../assets/icons/delete-icon.svg';
import { deleteItem } from '../../redux/cart/slice';
import { TCartItem } from '../../redux/cart/types';

import styles from './CartItem.module.scss';

const CartItem: React.FC<TCartItem> = ({ id, imageUrl, title, price }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <img src={imageUrl} alt='Game Image' />
        <span>{title}</span>
      </div>
      <div className={styles.right}>
        <span>{price} ₽</span>
        <button className={styles.delete} onClick={() => dispatch(deleteItem(id))}>
          <img width='26' src={deleteIcon} alt='Delete Icon' />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
