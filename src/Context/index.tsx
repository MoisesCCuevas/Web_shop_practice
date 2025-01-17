import { createContext, useState } from "react";
import { Item } from "@Types/Item";

export const ShoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }: any) => {
  const [count, setCount] = useState<number>(0);
  const [productDetail, setProductDetail] = useState<Item | null>(null);

  const handleAddToCart = (e: Event) => {
    e.stopPropagation();
    setCount(count + 1);
  };

  const onCloseDetail = () => setProductDetail(null);

  const handleClickCard = (item: Item) => setProductDetail(item);

  const value: any = {
    count,
    productDetail,
    onCloseDetail,
    handleAddToCart,
    handleClickCard
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}