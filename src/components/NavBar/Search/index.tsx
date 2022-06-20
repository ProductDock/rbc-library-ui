/* eslint-disable no-unused-vars */
import { Autocomplete, debounce, TextField } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import { routes } from "../../../constants/routes";
import { searchSections } from "../../../constants/searchSections";
import { useBooksContext } from "../../../store/books/catalog/BooksContext";
import { SuggestedBook } from "../../../store/books/catalog/Types";
import SearchSuggestion from "../SearchSuggestion";
import "./Search.css";

const Search = () => {
  const navigate = useNavigate();

  const { suggestedBooks, findSuggestedBooks, setSearchText } =
    useBooksContext();

  const recommendedSuggestion = useMemo(
    () => suggestedBooks.find((book) => book.recommended),
    [suggestedBooks]
  );

  const otherSuggestion = useMemo(
    () => suggestedBooks.find((book) => !book.recommended),
    [suggestedBooks]
  );

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") findSuggestedBooks?.(event.target.value);
  };

  const debouncedSearchHandler = useCallback(debounce(searchHandler, 2000), []);

  const navigateToBookDetails = (bookId: number | undefined) =>
    navigate(`${routes.BOOK_DETAILS_PATH}/${bookId}`);

  const getAutocompleteGroup = (suggestedBook: SuggestedBook): string =>
    suggestedBook.recommended
      ? searchSections.RECOMMENDATION
      : searchSections.OTHERS;

  const renderGroup = () => recommendedSuggestion || !otherSuggestion;

  const enterHandler = (event: any) => {
    if (event.key === "Enter") setSearchText?.(event.target.value);
  };

  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      autoSelect
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
  );
};

export default Search;
