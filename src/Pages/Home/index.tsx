import Layout from "@Components/Layout";
import Card from "@Components/Card";
import Title from "@Components/Title";
import { Item } from "@Types/Item";
import useAppContext from "@Hooks/useAppContext";
import { useEffect } from "react";

interface HomeProps {
  category?: string;
}

const Home = ({ category }: HomeProps) => {
  const {
    filteredItems,
    handleAddToCart,
    handleClickCard,
    onSearch
  } : any = useAppContext();

  useEffect(() => {
    onSearch(undefined, category);
  }, [category]);

  return (
    <Layout>
      <Title title={category ?? "All Products"} />
      <input
        type="text"
        className="w-3/4 md:w-1/4 p-2 rounded-md mb-5 mx-3 focus:outline-gray-800 text-black"
        placeholder="Search products"
        onChange={(e) => onSearch(e.target.value, category)}
      />
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-lg">
        {filteredItems.length === 0 && (
          <p className="w-full text-center text-md">No products found</p>
        )}
        {filteredItems.map((item: Item) => (
          <Card
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
            onClick={handleClickCard}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
