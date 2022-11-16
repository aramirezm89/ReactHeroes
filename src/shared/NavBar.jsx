import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context";
import "./navBar.css";
export const NavBar = ({ toggleDrawer }) => {

const {authState,logout} = useContext(AuthContext)
const {user,logged} = authState;
const navigate = useNavigate();
const onLogout = () =>{
  logout();
  navigate('/login',{
    replace:true
  })
}

  return (
    <nav className=" navCustom">
      <div className="row">
        <div className="col-4 ">
          <Button className="navButtons" onClick={toggleDrawer("left", true)}>
            {<MenuIcon />}
          </Button>
        </div>

        <div className="col-4 text-center mt-1">
          <NavLink className="navbar-brand" to="/">
            {user?.name}
          </NavLink>
        </div>
        <div className="col-4 text-end">
          <Button className="navButtons" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};
