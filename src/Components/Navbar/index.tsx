import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const activeStyle = {
  //   textDecoration: "underline",
  // };
  // const activeStyle = "underline";

  let activeStyle = ({ isActive } : any) => isActive ? "underline underline-offset-4" : undefined;

  return (
    <nav className="flex justify-between items-center fixed top-0 z-50 w-full py-5 px-8 text-sm font-light select-none bg-zinc-900 drop-shadow-md">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Web Store</NavLink>
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
        <li className="text-white/60">
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
        <li>
          [icon]
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
