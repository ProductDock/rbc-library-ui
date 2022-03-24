import { AppBar, Typography } from "@mui/material";
import logo from "../../img/pd-logo.svg";
import AccountAvatar from "../AccountAvatar";

import "./NavBar.css";

const NavBar = () => {
  return (
    <AppBar className="navbar">
      <div className="navbar-div">
        <div className="navbar-info">
          <img src={logo} alt="logo" className="logo" />
          <div className="navbar-text">
            <p className="navbar-company">
              <Typography>ProductDock</Typography>
            </p>
            <p className="navbar-title">
              <Typography>Library</Typography>
            </p>
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
