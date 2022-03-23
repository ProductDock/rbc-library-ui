import React, { useContext, useReducer, useState } from "react";
import * as bookService from "../../services/BookService";
import reducer from "../books/booksReducer";
import { actions } from "./booksActions";
import { IBooksContext } from "./Types";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const BooksContext = React.createContext<IBooksContext>(initialState);

const BooksContextProvider = (props: any) => {
  const [booksState, dispatch] = useReducer(reducer, initialState);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const findAllBooks = async () => {
    setLoading(true);
    await bookService
      .fetchAllBooks()
      .then((resp) => dispatch({ type: actions.SET_BOOKS, payload: resp.data }))
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  return (
    <BooksContext.Provider
      value={{
        ...booksState,
        loading,
        error,
        findAllBooks,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;

export const useBooksContext = () => useContext(BooksContext);
