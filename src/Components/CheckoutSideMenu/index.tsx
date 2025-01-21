import { Item } from "@Types/Item";
import OrderCard from "../OrderCard";
import SideMenu from "../SideMenu";
import useAppContext from "@Hooks/useAppContext";

const CheckoutSideMenu = () => {
  const {
    count,
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
    </SideMenu>
  );
};

export default CheckoutSideMenu;
