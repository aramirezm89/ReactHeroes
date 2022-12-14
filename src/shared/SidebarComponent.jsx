import HomeIcon from "@mui/icons-material/Home";
import LabelIcon from "@mui/icons-material/Label";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useContext, useState } from "react";

import { NavLink } from "react-router-dom";

import { AppRouter } from "../router/AppRouter";
import "./sidebar.css";
import { AuthContext } from "../auth/context";


export function SidebarComponent() {
  const [state, setState] = useState({
    left: false,
  });

    const [selectedIndex, setSelectedIndex] = useState();

    const {authState} = useContext(AuthContext)
    const {user} = authState;
      const handleListItemClick = (index) => {
        setSelectedIndex(index);
      };


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  let menu = [
    { label: "Home", icon: <HomeIcon />, path: "/" },
    { label: "DC", icon: <LabelIcon />, path: "/dc" },
    { label: "Marvel", icon: <LabelIcon />, path: "/marvel" },
    { label: "Agregar Héroe", icon: <AddIcon />, path:"/hero/add" },
    { label: "Buscar Héroe", icon: <SearchIcon />, path: "/search" },
  ];

  if(user?.role !=='ADMIN_ROLE'){
    menu = menu.filter((m) => m.label !== "Agregar Héroe");
  }
  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="d-flex justify-content-between title">
        <h2>Menu</h2>
        <MenuIcon className="mt-2" />
      </div>
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <NavLink className="nav-link" to={item.path}>
                {item.label}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div>
        <SwipeableDrawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </div>

    
        <AppRouter toggleDrawer={toggleDrawer} />
    
    </>
  );
}
