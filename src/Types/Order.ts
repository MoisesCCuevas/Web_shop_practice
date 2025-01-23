import { ItemCart } from './Item';

export interface Order {
  products: Array<ItemCart>;
  date: string;
  totalProducts: number;
  totalPrice: number;
};