import { List, ListItemButton, ListItemText } from "@mui/material";
import "./SideMenu.css";
import React from "react";

const SideMenu = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <List className="menu-list">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
        >
          <ListItemText primary="Choies 1" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
        >
          <ListItemText primary="Choice 2" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default SideMenu;
