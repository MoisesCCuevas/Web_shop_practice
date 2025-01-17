import { createContext, useState } from "react";

export const ShoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }: any) => {
  const [count, setCount] = useState<number>(0);

  const value: any = {
    count,
    setCount,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}