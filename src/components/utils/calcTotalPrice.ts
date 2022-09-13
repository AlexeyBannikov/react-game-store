import { TCartItem } from './../../redux/cart/types';

export const calcTotalPrice = (items: TCartItem[]) =>
  items.reduce((sum, item) => (sum += item.price), 0);
