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