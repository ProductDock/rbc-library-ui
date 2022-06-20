/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-newline */
import { AppBar, Typography } from "@mui/material";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { routes } from "../../constants/routes";
import logo from "../../img/pd-logo.svg";
import AccountAvatar from "./AccountAvatar";

import "./NavBar.css";
import Search from "./Search";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const reloadHomePage = () => {
    setSearchParams("");
    navigate(0);
  };

  return (
    <AppBar className="navbar">
      <div className="navbar-div">
        <div
          className="navbar-info"
          onClick={() =>
            location.pathname === routes.HOME
              ? reloadHomePage()
              : navigate(routes.HOME)
          }
        >
          <img src={logo} alt="logo" className="logo" />
          <div className="navbar-text">
            <span className="navbar-company">
              <Typography>ProductDock</Typography>
            </span>
            <span className="navbar-title">
              <Typography>Library</Typography>
            </span>
          </div>
        </div>
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
