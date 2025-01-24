import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Item, ItemCart } from "@Types/Item";
import { Order } from "@Types/Order";

export const ShoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }: any) => {
  const [items, setItems] = useState<Array<Item>>([]);
  const [filteredItems, setFilteredItems] = useState<Array<Item>>([]);
  const [cartProducts, setCartProducts] = useState<Array<ItemCart>>([]);
  const [orders, setOrders] = useState<Array<Order>>([]);
  const [productDetail, setProductDetail] = useState<Item | null>(null);
  const [checkoutSideOpen, setCheckoutSideOpen] = useState<boolean>(false);
  const [barMenuActive, setBarMenuActive] = useState<boolean>(false);

  const navigate = useNavigate();

  const count = useMemo(() => cartProducts.reduce((total, item) => total + item?.quantity, 0), [cartProducts]);
  const totalOrder = useMemo(() => cartProducts.reduce((total, item) => total + item?.total, 0), [cartProducts]);

  const getData = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    setItems(data);
    setFilteredItems(data);
  };

  useEffect(() => {
    if(items.length === 0) getData();
  }, [items]);

  // Search items
  const onSearch = (value: string, category: string) => {
    if (!value && !category) return setFilteredItems(items);
    setFilteredItems(
      items.filter((item) => (
        (category ? item.category.name.toLowerCase() === category : true)
        && (value ? item.title.toLowerCase().includes(value.toLowerCase()) : true)
      ))
    );
  };

  // Order
  const handleOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      products: cartProducts,
      date: new Date().toLocaleDateString(),
      totalProducts: count,
      totalPrice: totalOrder
    };
    setOrders([...orders, newOrder]);
    setCartProducts([]);
    setCheckoutSideOpen(false);
    setProductDetail(null);
    navigate("/orders/last");
  };
  const handleClickOrder = (id: number) => {
    navigate(`/orders/${id}`);
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
    setProductDetail(null);
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

  //Bar Menu
  const handleBarMenu = (open: boolean) => setBarMenuActive(open);

  const value: any = {
    items,
    count,
    cartProducts,
    productDetail,
    checkoutSideOpen,
    totalOrder,
    orders,
    barMenuActive,
    filteredItems,
    onCloseDetail,
    handleCloseCart,
    handleOpenCart,
    handleAddToCart,
    handleClickCard,
    handleRemoveFromCart,
    handleOrder,
    handleClickOrder,
    handleBarMenu,
    onSearch
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}