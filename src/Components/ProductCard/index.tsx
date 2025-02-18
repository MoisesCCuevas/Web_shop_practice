import { XMarkIcon } from "@heroicons/react/24/outline";
import { ItemCart } from "@Types/Item";

interface ProductCardProps {
  item: ItemCart;
  onRemoveItem?: (id: number) => void;
};

const ProductCard = (props: ProductCardProps) => {
  const { item, onRemoveItem } = props;
  return (
    <div className="flex justify-between items-center w-full select-none border border-white rounded-md p-2">
      <div className="flex items-center gap-2">
        <figure className="relative w-20 h-20 rounded-md overflow-hidden shadow-md">
          <img className="object-cover" alt={item.title} src={item.images[0]} />
          {item.quantity && item.quantity > 1 && (
            <span className="absolute top-0 right-0 bg-black text-white text-xs font-medium rounded-full px-1">{item.quantity}</span>
          )}
        </figure>
        <span className="text-ellipsis whitespace-nowrap flex flex-1 overflow-hidden font-light">{item.title}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium">${item.total}</span>
        {onRemoveItem && (
          <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={() => onRemoveItem(item.id)} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;

