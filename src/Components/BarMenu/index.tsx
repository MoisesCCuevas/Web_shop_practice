import { NavLink } from "react-router-dom";
import SideMenu from "@Components/SideMenu";
import useAppContext from "@Hooks/useAppContext";

const BarMenu = () => {
  const { barMenuActive, handleBarMenu } : any = useAppContext();
  let activeStyle = ({ isActive } : any) => isActive ? "underline underline-offset-4" : undefined;
  const handleClose = () => handleBarMenu(false);
  if (!barMenuActive) return null;
  return (
    <SideMenu
      title="Menu"
      onClose={handleClose}
    >
      <ul className="flex flex-col items-center justify-start gap-3 text-black w-full px-5">
        <li>
          <NavLink to="/" onClick={handleClose} className={activeStyle}>All Products</NavLink>
        </li>
        <li>
          <NavLink to="/clothes" onClick={handleClose} className={activeStyle}>Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics" onClick={handleClose} className={activeStyle}>Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/furniture" onClick={handleClose} className={activeStyle}>Furniture</NavLink>
        </li>
        <li>
          <NavLink to="/toys" onClick={handleClose} className={activeStyle}>Toys</NavLink>
        </li>
        <li>
          <NavLink to="/others" onClick={handleClose} className={activeStyle}>Others</NavLink>
        </li>
        <div className="border border-black w-full my-3" />
        <li>
          <NavLink to="/orders" onClick={handleClose} className={activeStyle}>Orders</NavLink>
        </li>
        <li>
          <NavLink to="/account" onClick={handleClose} className={activeStyle}>Account</NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={handleClose} className={activeStyle}>Login</NavLink>
        </li>
      </ul> 
    </SideMenu>
  );
}

export default BarMenu;
