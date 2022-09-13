export type TCartItem = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
};

export interface ICartSliceState {
  items: TCartItem[];
  totalPrice: number;
}
