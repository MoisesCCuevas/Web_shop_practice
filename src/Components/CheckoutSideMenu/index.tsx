import { Item } from "@Types/Item";
import OrderCard from "../OrderCard";
import SideMenu from "../SideMenu";
import useAppContext from "@Hooks/useAppContext";

const CheckoutSideMenu = () => {
  const {
    count,
    totalOrder,
    checkoutSideOpen,
    handleCloseCart,
    cartProducts,
    handleRemoveFromCart
} = useAppContext();

  if (!checkoutSideOpen || count === 0) return null;
  return (
    <SideMenu
      title="My Order"
      onClose={handleCloseCart}
    >
      <div className="flex flex-col gap-3 w-full h-full px-4 py-1 overflow-y-auto overflow-x-hidden">
        {cartProducts.map((item: Item) => (
          <OrderCard key={item.id} item={item} onRemoveItem={handleRemoveFromCart} />
        ))}
      </div>
      <div className="pl-4 pr-10 py-2 flex justify-between items-center w-full">
        <span className="text-lg font-light">Total:</span>
        <span className="text-2xl font-semibold">${totalOrder}</span>
      </div>
    </SideMenu>
  );
};

export default CheckoutSideMenu;
