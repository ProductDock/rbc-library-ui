/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import {
  Autocomplete,
  debounce,
  InputAdornment,
  TextField,
  useAutocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { routes } from "../../../constants/routes";
import { searchSections } from "../../../constants/searchSections";
import { useBooksContext } from "../../../store/books/catalog/BooksContext";
import { SuggestedBook } from "../../../store/books/catalog/Types";
import SearchSuggestion from "../SearchSuggestion";
import "./Search.css";

type Props = {
  icon: string;
  onIconClick?: Function;
  searchScreenShowed?: boolean;
};

const Search = ({ icon, onIconClick, searchScreenShowed }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    suggestedBooks,
    findSuggestedBooks,
    setSearchText,
    searchText,
    clearSuggestedBooks,
  } = useBooksContext();

  const [defaultTextFieldValue, setDefaultTextFieldValue] = useState<string>(
    searchText || ""
  );

  const [isHomePage, setIsHomePage] = useState<any>();

  const recommendedSuggestion = useMemo(
    () => suggestedBooks.find((book) => book.recommended),
    [suggestedBooks]
  );

  const otherSuggestion = useMemo(
    () => suggestedBooks.find((book) => !book.recommended),
    [suggestedBooks]
  );

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "" || event.target.value.length < 3) {
      clearSuggestedBooks?.();
      return;
    }
    findSuggestedBooks?.(event.target.value);
  };

  const debouncedSearchHandler = useCallback(debounce(searchHandler, 200), []);

  const navigateToBookDetails = (bookId: number | undefined) => {
    navigate(`${routes.BOOK_DETAILS_PATH}/${bookId}`);
    clearSuggestedBooks?.(true);
  };

  const getAutocompleteGroup = (suggestedBook: SuggestedBook): string =>
    suggestedBook.recommended
      ? searchSections.RECOMMENDATION
      : searchSections.OTHERS;

  const renderGroup = () => recommendedSuggestion || !otherSuggestion;

  const enterHandler = (event: any) => {
    if (event.key === "Enter") {
      location.pathname !== routes.HOME && navigate(routes.HOME);
      setSearchText?.(event.target.value);
    }
  };

  useEffect(() => {
    if (location.pathname === routes.HOME) {
      setDefaultTextFieldValue(searchText || "");
      setIsHomePage(true);
    } else {
      setDefaultTextFieldValue("");
      setIsHomePage(false);
    }
  });

  return (
    <Autocomplete
      key={isHomePage}
      defaultValue={{
        title: `${defaultTextFieldValue || ""}`,
        author: "",
        recommended: false,
      }}
      data-testId="search-autocomplete"
      id="free-solo-demo"
      freeSolo
      filterOptions={(x) => x}
      options={suggestedBooks.sort(
        (a, b) => Number(b.recommended) - Number(a.recommended)
      )}
      groupBy={
        renderGroup() ? (option) => getAutocompleteGroup(option) : undefined
      }
      renderOption={(props, option, state) => (
        <SearchSuggestion
          id={option.id}
          author={option.author}
          title={option.title}
          notFound={option.notFound}
          handleClick={navigateToBookDetails}
        />
      )}
      getOptionLabel={(option) => option.title || ""}
      renderInput={(params) => (
        <TextField
          {...params}
          data-testId="search-textfield"
          placeholder="Search for title or author"
          variant="outlined"
          onChange={debouncedSearchHandler}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                {icon === "search" ? (
                  <SearchIcon />
                ) : (
                  <a onClick={() => onIconClick?.(!searchScreenShowed)}>
                    <ArrowBackIcon />
                  </a>
                )}
              </InputAdornment>
            ),
          }}
          inputProps={{
            ...params.inputProps,
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                enterHandler(e);
                e.stopPropagation();
                clearSuggestedBooks?.(true);
              }
            },
          }}
        />
      )}
    />
  );
};

export default Search;
