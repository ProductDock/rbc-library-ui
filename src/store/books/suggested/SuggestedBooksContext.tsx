/* eslint-disable no-unused-vars */
import React, { useContext, useReducer, useState } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./SuggestedBooksReducer";
import { actions } from "../BooksActions";
import { ISuggestedBooksContext } from "./Types";

const initialState = {
  suggestedBooks: [],
  error: null,
};

export const SuggestedBooksContext =
  React.createContext<ISuggestedBooksContext>(initialState);

const SuggestedBooksContextProvider = (props: any) => {
  const [booksState, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState<string | null>(null);

  const findSuggestedBooks = async (searchText: string) => {
    await bookService
      .fetchSuggestedBooks({ searchText })
      .then((resp) => {
        dispatch({ type: actions.SET_SUGGESTED_BOOKS, payload: resp.data });
      })
      .catch(() => setError("Error while fetching data"));
  };

  const clearSuggestedBooks = (totalClear?: boolean) => {
    if (totalClear) {
      dispatch({ type: actions.CLEAR_SUGGESTED_BOOKS, payload: [] });
    } else {
      dispatch({ type: actions.SET_SUGGESTED_BOOKS, payload: [] });
    }
  };

  return (
    <SuggestedBooksContext.Provider
      value={{
        ...booksState,
        error,
        findSuggestedBooks,
        clearSuggestedBooks,
      }}
    >
      {props.children}
    </SuggestedBooksContext.Provider>
  );
};

export default SuggestedBooksContextProvider;

export const useSuggestedBooksContext = () => useContext(SuggestedBooksContext);
