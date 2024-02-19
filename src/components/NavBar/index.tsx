/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-newline */
import { AppBar, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { MediaQueries } from "../../constants/mediaQueries";
import { routes } from "../../constants/routes";
import AccountAvatar from "../AccountAvatar";

import "./NavBar.css";
import Search from "./Search";
import { useAuthContext } from "../../store/auth/AuthContext";
import AdminPanelButton from "./AdminPanelButton";
import NavBarLogo from "../NavBarLogo";

const NavBar = () => {
  const { isUserAdmin } = useAuthContext();
  const [searchScreenShowed, setSearchScreenShowed] = useState<boolean>(false);
  const isLargeScreen = useMediaQuery(MediaQueries.X_MEDIUM);
  const isSearchbarShowed = isLargeScreen;
  const isSearchIconShowedOnMobile = !isLargeScreen && !searchScreenShowed;
  const isSearchScreenShowedOnMobile = !isLargeScreen && searchScreenShowed;

  return (
    <AppBar className="navbar">
      <div className="navbar-div">
        <NavBarLogo homeRoute={routes.HOME} />
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
