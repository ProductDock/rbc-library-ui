/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-newline */
import { AppBar, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import {
  useNavigate,
  useLocation,
  useSearchParams,
  Link,
} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { MediaQueries } from "../../constants/mediaQueries";
import { routes } from "../../constants/routes";
import logo from "../../img/pd-logo.svg";
import AccountAvatar from "./AccountAvatar";

import "./NavBar.css";
import Search from "./Search";
import NewBookButton from "./NewBookButton";
import { useAuthContext } from "../../store/auth/AuthContext";
import AdminPanelButton from "./AdminPanelButton";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isUserAdmin } = useAuthContext();
  const [searchScreenShowed, setSearchScreenShowed] = useState<boolean>(false);
  const isLargeScreen = useMediaQuery(MediaQueries.X_MEDIUM);
  const isSearchbarShowed = isLargeScreen;
  const isSearchIconShowedOnMobile = !isLargeScreen && !searchScreenShowed;
  const isSearchScreenShowedOnMobile = !isLargeScreen && searchScreenShowed;

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
        {isSearchbarShowed && (
          <div className="navbar-search">
            <Search icon="search" />
          </div>
        )}
        {isSearchScreenShowedOnMobile && (
          <div className="search-screen-mobile">
            <div className="navbar-search">
              <Search
                icon="back"
                setSearchScreenShowed={setSearchScreenShowed}
                searchScreenShowed={searchScreenShowed}
              />
            </div>
          </div>
        )}
        {isSearchIconShowedOnMobile && (
          <div className="search-screen-toggle">
            <a onClick={() => setSearchScreenShowed(!searchScreenShowed)}>
              <SearchIcon />
            </a>
          </div>
        )}
        <div className="right-side">
          {isUserAdmin?.() && (
            <div className="add-book-button-wrapper">
              <AdminPanelButton />
            </div>
          )}
          <AccountAvatar />
        </div>
      </div>
    </AppBar>
  );
};

export default NavBar;
