import Account from "../Account";
import Cart from "../Cart";
import Home from "../Home";
import Login from "../Login";
import NotFound from "../NotFound";
import Orders from "../Orders";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
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
    }
  ]);
  return routes;
};
