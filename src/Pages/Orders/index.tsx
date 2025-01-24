import Layout from "@Components/Layout";
import OrderCard from "@Components/OrderCard";
import Title from "@Components/Title";
import useAppContext from "@Hooks/useAppContext";
import { Order } from "@Types/Order";

const Orders = () => {
  const { orders, handleClickOrder } : any = useAppContext();
  return (
    <Layout>
      <Title title="Orders" />
      <section className="flex flex-col gap-3 w-full md:w-1/3 px-3 md:p-0">
        {orders.length === 0 && (
          <p className="text-center text-md">No orders found</p>
        )}
        {orders.map((order: Order) => (
          <OrderCard key={order.id} order={order} onClickOrder={handleClickOrder} />
        ))}
      </section>
    </Layout>
  );
};

export default Orders;
  