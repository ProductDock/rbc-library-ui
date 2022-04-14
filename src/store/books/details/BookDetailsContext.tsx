import React, { useContext, useEffect, useReducer, useState } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./BookDetailsReducer";
import { actions } from "../BooksActions";
import { IBookDetailsContext } from "./Types";

const initialState = {
  book: null,
  bookId: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line operator-linebreak
export const BookDetailsContext =
  React.createContext<IBookDetailsContext>(initialState);

const BookDetailsContextProvider = (props: any) => {
  const [bookState, dispatch] = useReducer(reducer, initialState);
  const { bookId } = bookState;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const findBook = async () => {
    setLoading(true);
    await bookService
      .getBook(bookId)
      .then((resp) => dispatch({ type: actions.SET_BOOK, payload: resp.data }))
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  const setBookId = (bookIdParam: number) => {
    dispatch({ type: actions.SET_BOOK_ID, payload: bookIdParam });
  };

  useEffect(() => {
    if (bookId) findBook?.();
  }, [bookId]);

  return (
    <BookDetailsContext.Provider
      value={{
        ...bookState,
        loading,
        error,
        setBookId,
      }}
    >
      {props.children}
    </BookDetailsContext.Provider>
  );
};

export default BookDetailsContextProvider;

export const useBookDetailsContext = () => useContext(BookDetailsContext);
