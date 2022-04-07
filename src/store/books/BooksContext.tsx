import React, { useContext, useEffect, useReducer, useState } from "react";
import * as bookService from "../../services/BookService";
import reducer from "./BooksReducer";
import { actions } from "./BooksActions";
import { IBooksContext } from "./Types";

const initialState = {
  books: [],
  allBooksCount: 0,
  loading: false,
  error: null,
  page: 0,
};

export const BooksContext = React.createContext<IBooksContext>(initialState);

const BooksContextProvider = (props: any) => {
  const [booksState, dispatch] = useReducer(reducer, initialState);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const findBooks = async () => {
    setLoading(true);
    await bookService
      .fetchBooks({ page: booksState.page })
      .then((resp) => dispatch({ type: actions.SET_BOOKS, payload: resp.data }))
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  const countAllBooks = async () => {
    await bookService
      .countAllBooks()
      .then((resp) =>
        dispatch({ type: actions.SET_ALL_BOOKS_COUNT, payload: resp.data })
      )
      .catch(() => setError("Error while fetching data"));
  };

  const setPage = (pageNumber: number) => {
    dispatch({ type: actions.SET_PAGE, payload: pageNumber });
  };

  useEffect(() => {
    findBooks?.();
  }, [booksState.page]);

  return (
    <BooksContext.Provider
      value={{
        ...booksState,
        loading,
        error,
        setPage,
        countAllBooks,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;

export const useBooksContext = () => useContext(BooksContext);
