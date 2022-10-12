import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button';
import { addItem, deleteItem } from '../../redux/cart/slice';
import { selectCartItems } from '../../redux/cart/selectors';
import { TCartItem } from '../../redux/cart/types';

import styles from './GameBuy.module.scss';

const GameBuy: React.FC<TCartItem> = ({ id, title, price, imageUrl }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const isItemInCart = items.some(item => item.id === id);

  const handleClick = () => {
    const item: TCartItem = {
      id,
      title,
      price,
      imageUrl,
    };

    if (isItemInCart) {
      dispatch(deleteItem(id));
    } else {
      dispatch(addItem(item));
    }
  };

  return (
    <div className={styles.root}>
      <span className={styles.price}>{price} ₽</span>
      <div className={styles.buy}>
        <Button onClick={handleClick} isItemInCart={isItemInCart}>
          {isItemInCart ? 'В корзине' : 'В корзину'}
        </Button>
      </div>
    </div>
  );
};

export default GameBuy;
