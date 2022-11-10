import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import "./navBar.css";
export const NavBar = ({ toggleDrawer }) => {


  return (
    <nav className=" navCustom">
      <div className="row">
        <div className="col-4">
          <Button onClick={toggleDrawer("left", true)}>{<MenuIcon />}</Button>
        </div>

        <div className="col-4 text-center mt-1">
          <NavLink className="navbar-brand" to="/">
            Heroes App
          </NavLink>
        </div>
        <div className="col-4 text-end">
          <Button>Logout</Button>
        </div>
      </div>
    </nav>
  );
};
