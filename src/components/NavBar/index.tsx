/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { AppBar, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { routes } from "../../constants/routes";
import logo from "../../img/pd-logo.svg";
import AccountAvatar from "../AccountAvatar";

import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar className="navbar">
      <div className="navbar-div">
        <div className="navbar-info" onClick={() => navigate(routes.HOME)}>
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
        <div className="account-avatar">
          <AccountAvatar />
        </div>
      </div>
    </AppBar>
  );
};

export default NavBar;
