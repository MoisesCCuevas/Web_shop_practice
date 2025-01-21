import { createContext, useMemo, useState } from "react";
import { Item, ItemCart } from "@Types/Item";

export const ShoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }: any) => {
  const [cartProducts, setCartProducts] = useState<Array<ItemCart>>([]);
  const [productDetail, setProductDetail] = useState<Item | null>(null);
  const [checkoutSideOpen, setCheckoutSideOpen] = useState<boolean>(false);

  const count = useMemo(() => cartProducts.length, [cartProducts]);
  const totalOrder = useMemo(() => cartProducts.reduce((total, item) => total + item.total, 0), [cartProducts]);

  // Cart
  const handleAddToCart = (item: Item) => {
    const itemInCart = cartProducts.find((product) => product.id === item.id);
    if (itemInCart) {
      const newCart = cartProducts.map((product) => {
        if (product.id === item.id) {
          const quantity = product.quantity ? product.quantity + 1 : 2;
          return {
            ...product,
            quantity,
            total: product.price * quantity
          };
        }
        return product;
      });
      setCartProducts(newCart);
    } else {
      setCartProducts([...cartProducts, { ...item, total: item.price }]);
    }
    setCheckoutSideOpen(true);
  };
  const handleRemoveFromCart = (id: number) => {
    const newCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newCart);
  };
  const handleCloseCart = () => setCheckoutSideOpen(false);

  // Product Detail
  const onCloseDetail = () => setProductDetail(null);
  const handleClickCard = (item: Item) => setProductDetail(item);

  const value: any = {
    count,
    cartProducts,
    productDetail,
    checkoutSideOpen,
    totalOrder,
    onCloseDetail,
    handleCloseCart,
    handleAddToCart,
    handleClickCard,
    handleRemoveFromCart
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}