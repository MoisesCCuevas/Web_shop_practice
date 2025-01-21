import { XMarkIcon } from "@heroicons/react/24/outline";
import { ItemCart } from "@Types/Item";

interface OrderCardProps {
  item: ItemCart;
  onRemoveItem: (id: number) => void;
};

const OrderCard = (props: OrderCardProps) => {
  const { item, onRemoveItem } = props;
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <figure className="relative w-20 h-20 rounded-md overflow-hidden shadow-md">
          <img className="object-cover" alt={item.title} src={item.images[0]} />
          {item.quantity && (
            <span className="absolute top-0 right-0 bg-black text-white text-xs font-medium rounded-full px-1">{item.quantity}</span>
          )}
        </figure>
        <span className="text-ellipsis whitespace-nowrap w-60 overflow-hidden font-light">{item.title}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium">${item.total}</span>
        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={() => onRemoveItem(item.id)} />
      </div>
    </div>
  );
};

export default OrderCard;
