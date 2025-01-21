import { useState, useEffect } from "react";
import Layout from "@Components/Layout";
import Card from "@Components/Card";
import { Item } from "@Types/Item";
import useAppContext from "@Hooks/useAppContext";

const Home = () => {
  const [items, setItems] = useState<Array<Item>>([]);
  const {
    handleAddToCart,
    handleClickCard
  } = useAppContext();

  const getData = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    if(items.length === 0) getData();
  }, [items]);

  return (
    <Layout>
      <h1>Home</h1>
      <div className="grid grid-cols-4 gap-6 w-full max-w-screen-lg">
        {items.map((item) => (
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
