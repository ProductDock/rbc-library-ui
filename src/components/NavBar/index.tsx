/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-newline */
import { AppBar, Typography } from "@mui/material";
import {
  useNavigate,
  useLocation,
  useSearchParams,
  Link,
} from "react-router-dom";
import { routes } from "../../constants/routes";
import logo from "../../img/pd-logo.svg";
import AccountAvatar from "./AccountAvatar";

import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
        <div className="account-avatar">
          <AccountAvatar />
        </div>
      </div>
    </AppBar>
  );
};

export default NavBar;
