import { Category } from './Category';

export interface Item {
  category: Category;
  creationAt: string;
  description: string
  id: number;
  images: Array<string>;
  price: number;
  title: string;
  updatedAt: string;
}

export interface ItemCart extends Item {
  quantity: number | undefined;
  total: number | undefined;
}