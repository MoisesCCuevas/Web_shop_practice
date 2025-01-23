import Layout from "@Components/Layout";
import ProductCard from "@Components/ProductCard";
import { ItemCart } from "@Types/Item";
import useAppContext from "@Hooks/useAppContext"; 

const Order = () => {
  const { orders } : any = useAppContext();

  return (
    <Layout>
      Order
      <div className="flex flex-col gap-3">
        {orders.length > 0 && orders.slice(-1).pop().products.map((item: ItemCart) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Order;
  