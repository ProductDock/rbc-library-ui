/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-newline */
import {
  AppBar,
  Autocomplete,
  Box,
  createFilterOptions,
  debounce,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { routes } from "../../constants/routes";
import logo from "../../img/pd-logo.svg";
import { useBooksContext } from "../../store/books/catalog/BooksContext";
import AccountAvatar from "./AccountAvatar";

import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { suggestedBooks, findSuggestedBooks, setSearchText } =
    useBooksContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const reloadHomePage = () => {
    setSearchParams("");
    navigate(0);
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(suggestedBooks);
    findSuggestedBooks?.(event.target.value);
    console.log(suggestedBooks);
  };

  const debouncedSearchHandler = useCallback(debounce(searchHandler, 2000), []);

  const enterHandler = (event: any) => {
    if (event.key === "Enter") setSearchText?.(event.target.value);
  };

  const navigateToBookDetails = (bookId: number | undefined) =>
    navigate(`${routes.BOOK_DETAILS_PATH}/${bookId}`);

  const filterOptions = createFilterOptions({
    matchFrom: "any",
    stringify: (option: any) => option.title + option.author,
  });

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
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            // filterOptions={filterOptions}
            options={suggestedBooks.sort(
              (a, b) => Number(b.recommended) - Number(a.recommended)
            )}
            groupBy={(option) => {
              return option.recommended
                ? "ProductDock Recommendations"
                : "Others";
            }}
            renderOption={(props, option, state) => (
              <div
                className="search-item"
                onClick={() => navigateToBookDetails(option.id)}
                key={option.id}
              >
                <Typography fontSize={14}>{option.title}</Typography>
                <Typography fontWeight={300} fontSize={12}>
                  {option.author}
                </Typography>
              </div>
            )}
            onKeyDown={enterHandler}
            getOptionLabel={(option) => option.title || ""}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search for title or author"
                variant="outlined"
                onChange={debouncedSearchHandler}
              />
            )}
          />
        </div>
        <div className="account-avatar">
          <AccountAvatar />
        </div>
      </div>
    </AppBar>
  );
};

export default NavBar;
