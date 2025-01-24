import { useMemo } from "react";
import Layout from "@Components/Layout";
import ProductCard from "@Components/ProductCard";
import Title from "@Components/Title";
import { ItemCart } from "@Types/Item";
import useAppContext from "@Hooks/useAppContext";
import { useNavigate, useParams } from "react-router-dom";


const Order = () => {
  const { orders } : any = useAppContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const filteredOrder = useMemo(() => {
    if (orders.length === 0) return [];
    if (id === "last") return orders.slice(-1).pop().products;
    return orders.find((o: any) => o.id == id).products;
  }, [orders, id]);

  const onBackOrders = () => {
    navigate("/orders");
  };

  return (
    <Layout>
      <Title title="Order" onBackOrders={onBackOrders} />
      <section className="flex flex-col gap-3 w-full md:w-1/3 px-3 md:p-0">
        {filteredOrder.map((item: ItemCart) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </section>
    </Layout>
  );
};

export default Order;
  