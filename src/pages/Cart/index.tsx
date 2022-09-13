import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../components/Button';
import CartEmpty from '../../components/CartEmpty';
import CartItem from '../../components/CartItem';
import { calcTotalPrice } from '../../components/utils/calcTotalPrice';
import { selectCartItems } from '../../redux/cart/selectors';
import { clearCart } from '../../redux/cart/slice';

import styles from './Cart.module.scss';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalPrice = calcTotalPrice(items);

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className={styles.root}>
      <div className={styles.item}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.count}>
          <span>
            Всего игр: {items.length} шт, на сумму - {totalPrice} ₽
          </span>
        </div>
        <div className={styles.clearBtn}>
          <Button onClick={() => dispatch(clearCart())}>Очистить корзину</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
