import { List, ListItemButton, ListItemText } from "@mui/material";
import "./SideMenu.css";
import {
  AutoStoriesOutlined,
  HomeOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";
import { routes } from "../../constants/routes";

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleListItemClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="side-bar">
      <List className="menu-list" data-testid="menu-list">
        <ListItemButton
          data-testid="dashboard-button"
          className="menu-btn"
          selected={location.pathname === routes.ADMIN_HOME}
          onClick={() => handleListItemClick(routes.ADMIN_HOME)}
        >
          <HomeOutlined className="icon" />
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          data-testid="reader-button"
          className="menu-btn"
          selected={location.pathname === routes.ADMIN_READERS}
          onClick={() => handleListItemClick(routes.ADMIN_READERS)}
        >
          <PermIdentityOutlined className="icon" />
          <ListItemText primary="Reader Management" />
        </ListItemButton>
        <ListItemButton
          className="menu-btn"
          selected={location.pathname === routes.ADMIN_BOOKS}
          onClick={() => handleListItemClick(routes.ADMIN_BOOKS)}
        >
          <AutoStoriesOutlined className="icon" />
          <ListItemText primary="Books Management" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default SideMenu;
