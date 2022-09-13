import React from 'react';
import { Link } from 'react-router-dom';

import emptyCartPng from '../../assets/img/empty-cart.png';

import styles from './CartEmpty.module.scss';

const CartEmpty: React.FC = () => (
  <div className={styles.root}>
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Похоже, вы ничего не добавили в корзину.
      <br />
      Для того, чтобы выбрать игры, перейдите на главную страницу.
    </p>
    <img src={emptyCartPng} alt='Empty cart' />
    <Link to='/' className={styles.backBtn}>
      <span>Вернуться назад</span>
    </Link>
  </div>
);

export default CartEmpty;
