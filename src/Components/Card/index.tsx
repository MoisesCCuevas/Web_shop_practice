import Item from "@Types/Item";

interface CardProps {
  key: any;
  item: Item;
  onClick: () => void;
}

const Card = (props: CardProps) => {
  const {
    item,
    onClick
  } = props;

  return (
    <section className="bg-white cursor-pointer w-56 h-60 shadow-inner rounded-md text-zinc-900 overflow-hidden select-none">
      <figure className="relative w-full h-3/4 md-2">
        <span className="absolute bottom-0 left-0 bg-black/60 rounded-lg text-white text-xs m-2 px-2 py-2">{item.category.name}</span>
        <img
          className="w-full h-full object-cover rounded-md"
          src={item.images[0]}
          alt={item.title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-gray-500 w-6 h-6 rounded-full text-white m-2 p1"
          onClick={onClick}
        >
          +
        </div>
      </figure>
      <p className="flex justify-between p-2">
        <span className="text-sm font-light">{item.title}</span>
        <span className="text-lg font-semibold">${item.price}</span>
      </p>
    </section>
  );
};

export default Card;
