/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-newline */
import { AppBar, Typography, useMediaQuery } from "@mui/material";
import {
  useNavigate,
  useLocation,
  useSearchParams,
  Link,
} from "react-router-dom";
import { MediaQueries } from "../../constants/mediaQueries";
import { routes } from "../../constants/routes";
import logo from "../../img/pd-logo.svg";
import AccountAvatar from "./AccountAvatar";

import "./NavBar.css";
import Search from "./Search";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery(MediaQueries.X_MEDIUM);

  const [searchParams, setSearchParams] = useSearchParams();

  const reloadHomePage = () => {
    setSearchParams("");
    if (location.pathname === routes.HOME) navigate(0);
  };

  return (
    <AppBar className="navbar">
      <div className="navbar-div">
        <Link to={routes.HOME} className="navbar-info" onClick={reloadHomePage}>
          <img src={logo} alt="logo" className="logo" />
          <div className="navbar-text">
            <span className="navbar-company">
              <Typography>ProductDock</Typography>
            </span>
            <span className="navbar-title">
              <Typography>Library</Typography>
            </span>
          </div>
        </Link>
        <div className="navbar-search">
          <Search />
        </div>
        <div className="account-avatar">
          <AccountAvatar />
        </div>
      </div>
    </AppBar>
  );
};

export default NavBar;
