import React, { useContext, useReducer, useState } from "react";
import * as bookService from "../../services/BookService";
import reducer from "./BooksReducer";
import { actions } from "./BooksActions";
import { IBooksContext } from "./Types";

const initialState = {
  books: [],
  allBooksCount: 0,
  loading: false,
  error: null,
};

export const BooksContext = React.createContext<IBooksContext>(initialState);

const BooksContextProvider = (props: any) => {
  const [booksState, dispatch] = useReducer(reducer, initialState);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const findAllBooks = async (pageNumber?: any) => {
    setLoading(true);
    await bookService
      .fetchAllBooks(pageNumber)
      .then((resp) => dispatch({ type: actions.SET_BOOKS, payload: resp.data }))
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  const countAllBooks = async () => {
    await bookService
      .countAllBooks()
      .then((resp) => dispatch({ type: actions.SET_ALL_BOOKS_COUNT, payload: resp.data }))
      .catch(() => setError("Error while fetching data"));
  };

  return (
    <BooksContext.Provider
      value={{
        ...booksState,
        loading,
        error,
        findAllBooks,
        countAllBooks,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;

export const useBooksContext = () => useContext(BooksContext);
