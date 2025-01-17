import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Navbar from "@Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Navbar />
        <AppRoutes />
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
