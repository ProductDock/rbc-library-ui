import {
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import "./SideMenu.css";
import {
  AutoStoriesOutlined,
  HomeOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";
import { routes } from "../../constants/routes";
import { MediaQueries } from "../../constants/mediaQueries";

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLargeScreen = useMediaQuery(MediaQueries.X_MEDIUM);

  const handleListItemClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className={isLargeScreen ? "side-bar" : "side-bar-mobile"}>
      <List className="menu-list" data-testid="menu-list">
        <ListItemButton
          data-testid="dashboard-button"
          className="menu-btn"
          selected={location.pathname === routes.ADMIN_HOME}
          onClick={() => handleListItemClick(routes.ADMIN_HOME)}
        >
          <HomeOutlined className="icon" />
          {isLargeScreen && <ListItemText primary="Dashboard" />}
        </ListItemButton>
        <ListItemButton
          data-testid="reader-button"
          className="menu-btn"
          selected={location.pathname === routes.ADMIN_READERS}
          onClick={() => handleListItemClick(routes.ADMIN_READERS)}
        >
          <PermIdentityOutlined className="icon" />
          {isLargeScreen && <ListItemText primary="Reader Management" />}
        </ListItemButton>
        <ListItemButton
          data-testid="books-button"
          className="menu-btn"
          selected={location.pathname === routes.ADMIN_BOOKS}
          onClick={() => handleListItemClick(routes.ADMIN_BOOKS)}
        >
          <AutoStoriesOutlined className="icon" />
          {isLargeScreen && <ListItemText primary="Books Management" />}
        </ListItemButton>
      </List>
    </div>
  );
};

export default SideMenu;
