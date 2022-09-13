import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ItemsInCart from '../ItemsInCart';
import iconSvg from '../../assets/img/cart-icon.svg';
import { calcTotalPrice } from '../utils/calcTotalPrice';
import { selectCartItems } from '../../redux/cart/selectors';

import styles from './CartBlock.module.scss';

const CartBlock: React.FC = () => {
  const items = useSelector(selectCartItems);
  const totalPrice = calcTotalPrice(items);

  return (
    <>
      <Link to='/cart'>
        <div className={styles.block}>
          <ItemsInCart quantity={items.length} />
          <img className={styles.icon} width='32' src={iconSvg} alt='Cart icon' />
          <span className={styles.totalPrice}>{totalPrice} ₽</span>
        </div>
      </Link>
    </>
  );
};

export default CartBlock;
