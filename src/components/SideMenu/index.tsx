import { List, ListItemButton, ListItemText } from "@mui/material";
import "./SideMenu.css";
import React from "react";
import {
  AutoStoriesOutlined,
  HomeOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";

const SideMenu = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="side-bar">
      <List className="menu-list">
        <ListItemButton
          className="menu-btn"
          selected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
        >
          <HomeOutlined
            style={{ fontSize: "20px", paddingRight: "5%", color: "#00609a" }}
          />
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          className="menu-btn"
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
        >
          <PermIdentityOutlined
            style={{ fontSize: "20px", paddingRight: "5%", color: "#00609a" }}
          />
          <ListItemText primary="Reader Management" />
        </ListItemButton>
        <ListItemButton
          className="menu-btn"
          selected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
        >
          <AutoStoriesOutlined
            style={{ fontSize: "20px", paddingRight: "5%", color: "#00609a" }}
          />
          <ListItemText primary="Books Management" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default SideMenu;
