import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Navbar from "@Components/Navbar";
import ProductDetail from "@Components/ProductDetail";
import CheckoutSideMenu from "@Components/CheckoutSideMenu";
import BarMenu from "@Components/BarMenu";

const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Navbar />
        <AppRoutes />
        <ProductDetail/>
        <CheckoutSideMenu />
        <BarMenu />
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
