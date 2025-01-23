import { createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Item, ItemCart } from "@Types/Item";
import { Order } from "@Types/Order";

export const ShoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }: any) => {
  const [cartProducts, setCartProducts] = useState<Array<ItemCart>>([]);
  const [orders, setOrders] = useState<Array<Order>>([]);
  const [productDetail, setProductDetail] = useState<Item | null>(null);
  const [checkoutSideOpen, setCheckoutSideOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const count = useMemo(() => cartProducts.reduce((total, item) => total + item?.quantity, 0), [cartProducts]);
  const totalOrder = useMemo(() => cartProducts.reduce((total, item) => total + item?.total, 0), [cartProducts]);

  // Order
  const handleOrder = () => {
    const newOrder = {
      products: cartProducts,
      date: new Date().toISOString(),
      totalProducts: count,
      totalPrice: totalOrder
    };
    setOrders([...orders, newOrder]);
    setCartProducts([]);
    setCheckoutSideOpen(false);
    navigate("/orders/last");
  };

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
      setCartProducts([...cartProducts, { ...item, total: item.price, quantity: 1 }]);
    }
    setCheckoutSideOpen(true);
  };
  const handleRemoveFromCart = (id: number) => {
    const newCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newCart);
  };
  const handleOpenCart = () => setCheckoutSideOpen(true);
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
    orders,
    onCloseDetail,
    handleCloseCart,
    handleOpenCart,
    handleAddToCart,
    handleClickCard,
    handleRemoveFromCart,
    handleOrder
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}