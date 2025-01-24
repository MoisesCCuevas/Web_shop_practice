import { ItemCart } from './Item';

export interface Order {
  id: number;
  products: Array<ItemCart>;
  date: string;
  totalProducts: number;
  totalPrice: number;
};