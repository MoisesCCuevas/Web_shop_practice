import { AppRoutes } from "../Account/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@Components/Navbar";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
