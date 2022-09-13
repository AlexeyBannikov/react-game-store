import { ICartSliceState, TCartItem } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICartSliceState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TCartItem>) {
      state.items.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
