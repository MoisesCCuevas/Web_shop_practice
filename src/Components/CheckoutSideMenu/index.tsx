import { ItemCart } from "@Types/Item";
import ProductCard from "../ProductCard";
import SideMenu from "../SideMenu";
import useAppContext from "@Hooks/useAppContext";

const CheckoutSideMenu = () => {
  const {
    count,
    totalOrder,
    checkoutSideOpen,
    handleCloseCart,
    cartProducts,
    handleRemoveFromCart,
    handleOrder
} : any = useAppContext();

  if (!checkoutSideOpen || count === 0) return null;
  return (
    <SideMenu
      title="My Order"
      onClose={handleCloseCart}
    >
      <div className="flex flex-col flex-1 gap-3 w-full px-4 py-1 overflow-y-auto overflow-x-hidden">
        {cartProducts.map((item: ItemCart) => (
          <ProductCard key={item.id} item={item} onRemoveItem={handleRemoveFromCart} />
        ))}
      </div>
      <div className="flex flex-col gap 3 items-center w-full px-4 py-2">
        <p className="flex justify-between items-center w-full">
          <span className="text-lg font-light">Total:</span>
          <span className="text-2xl font-semibold">${totalOrder}</span>
        </p>
        <button className="bg-zinc-800 w-full h-7 rounded-md text-white shadow-md" onClick={handleOrder}>Checkout</button>
      </div>
    </SideMenu>
  );
};

export default CheckoutSideMenu;
