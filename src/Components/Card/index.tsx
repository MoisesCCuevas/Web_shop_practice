const Card = () => {
  return (
    <section className="bg-white cursor-pointer w-56 h-60 shadow-inner rounded-md text-zinc-900 overflow-hidden select-none">
      <figure className="relative w-full h-3/4 md-2">
        <span className="absolute bottom-0 left-0 bg-black/60 rounded-lg text-white text-xs m-2 px-2 py-2">Tag</span>
        <img
          className="w-full h-full object-cover rounded-md"
          src="https://images.pexels.com/photos/28271638/pexels-photo-28271638/free-photo-of-paisaje-puesta-de-sol-arena-desierto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="test"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-gray-500 w-6 h-6 rounded-full text-white m-2 p1">
          +
        </div>
      </figure>
      <p className="flex justify-between p-2">
        <span className="text-sm font-light">Categoria</span>
        <span className="text-lg font-semibold">precio</span>
      </p>
    </section>
  );
};

export default Card;
