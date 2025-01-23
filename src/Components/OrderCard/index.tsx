// import { XMarkIcon } from "@heroicons/react/24/outline";
import { Order } from "@Types/Order";

interface OrderCardProps {
  order: Order;
  onClickOrder: () => void;
};

const OrderCard = (props: OrderCardProps) => {
  const { order } = props;

  return (
    <div className="flex justify-between items-center w-full">
      <p>
        <span className="font-light">{order.date}</span> 
      </p>
    </div>
  );
};

export default OrderCard;
