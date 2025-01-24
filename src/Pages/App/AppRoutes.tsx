import Account from "../Account";
import Cart from "../Cart";
import Home from "../Home";
import Login from "../Login";
import NotFound from "../NotFound";
import Orders from "../Orders";
import Order from "../Order";
import { useRoutes } from "react-router-dom";

const categories: Array<string> = [
  "clothes",
  "electronics",
  "furniture",
  "toys",
  "others"
];

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    ...categories.map((category) => ({
      path: `/${category}`,
      element: <Home category={category} />
    })),
    {
      path: "/account",
      element: <Account />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/*",
      element: <NotFound />
    },
    {
      path: "/orders",
      element: <Orders />
    },
    {
      path: "/orders/:id",
      element: <Order />
    }
  ]);
  return routes;
};
