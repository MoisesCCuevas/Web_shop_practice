import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Order } from "@Types/Order";

interface OrderCardProps {
  order: Order;
  onClickOrder?: (id: number) => void;
};

const OrderCard = (props: OrderCardProps) => {
  const { order, onClickOrder } = props;

  return (
    <div
      className="grid grid-cols-4 items-center w-full border border-white px-3 py-2 rounded-md select-none"
    >
      <span className="font-light">{order.date}</span>
      <span className="font-light justify-self-end">{order.totalProducts} articles</span> 
      <span className="font-medium justify-self-end">${order.totalPrice}</span>
      <ChevronRightIcon className="h-6 w-6 cursor-pointer justify-self-end" onClick={() => onClickOrder && onClickOrder(order.id)} />
    </div>
  );
};

export default OrderCard;
