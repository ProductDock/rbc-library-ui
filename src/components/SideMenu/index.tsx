import { List, ListItemButton, ListItemText } from "@mui/material";
import "./SideMenu.css";
import { useState } from "react";
import {
  AutoStoriesOutlined,
  HomeOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";

const SideMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="side-bar">
      <List className="menu-list" data-testid="menu-list">
        <ListItemButton
          data-testid="dashboard-button"
          className="menu-btn"
          selected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
        >
          <HomeOutlined className="icon" />
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          data-testid="reader-button"
          className="menu-btn"
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
        >
          <PermIdentityOutlined className="icon" />
          <ListItemText primary="Reader Management" />
        </ListItemButton>
        <ListItemButton
          className="menu-btn"
          selected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
        >
          <AutoStoriesOutlined className="icon" />
          <ListItemText primary="Books Management" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default SideMenu;
