import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Bars4Icon } from "@heroicons/react/24/outline";
import useAppContext from "@Hooks/useAppContext";

const Navbar = () => {
  // const activeStyle = {
  //   textDecoration: "underline",
  // };
  // const activeStyle = "underline";
  const { count, handleOpenCart, handleBarMenu } : any = useAppContext();

  let activeStyle = ({ isActive } : any) => isActive ? "underline underline-offset-4 hidden md:block" : "hidden md:block";

  return (
    <nav className="flex justify-between items-center fixed top-0 z-50 w-full py-5 px-8 text-sm font-light select-none bg-zinc-900 drop-shadow-md">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">PrimeZil Store</NavLink>
        </li>
        <li>
          <NavLink to="/" className={activeStyle}>All Products</NavLink>
        </li>
        <li>
          <NavLink to="/clothes" className={activeStyle}>Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={activeStyle}>Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/furniture" className={activeStyle}>Furniture</NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={activeStyle}>Toys</NavLink>
        </li>
        <li>
          <NavLink to="/others" className={activeStyle}>Others</NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-white/60 hidden md:block">
          usermail@email.com
        </li>
        <li>
          <NavLink to="/orders" className={activeStyle}>Orders</NavLink>
        </li>
        <li>
          <NavLink to="/account" className={activeStyle}>Account</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={activeStyle}>Login</NavLink>
        </li>
        <li className="flex items-center gap-1 justify-between">
          <ShoppingCartIcon onClick={handleOpenCart}  className="h-6 w-6 text-white" />
          {count}
        </li>
        <li className="text-white/60 block md:hidden">
          <Bars4Icon onClick={() => handleBarMenu(true)} className="h-6 w-6 text-white" />
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
