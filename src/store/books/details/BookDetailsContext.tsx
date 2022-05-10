/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
import React, { useContext, useEffect, useReducer, useState } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./BookDetailsReducer";
import { actions } from "../BooksActions";
import { IBookDetailsContext } from "./Types";
import { BookActions, BookStatus } from "../status/Types";

const initialState = {
  book: null,
  bookStatus: null,
};

type Props = {
  bookId: number;
  children: any;
};

export const BookDetailsContext =
  React.createContext<IBookDetailsContext>(initialState);

const BookDetailsContextProvider = ({ bookId, children }: Props) => {
  const [bookState, dispatch] = useReducer(reducer, initialState);

  const [bookReload, setBookReload] = useState<boolean>(false);
  const [bookStatus, setBookStatus] = useState<BookStatus | null>(null);

  const findBook = async () =>
    bookService
      .getBook(bookId)
      .then((resp) => dispatch({ type: actions.SET_BOOK, payload: resp.data }));

  const reloadBook = () => setBookReload(!bookReload);

  const sendRentalRequest = async (requestedStatus: BookActions) =>
    bookService.postRentalRequest({
      bookId: bookId.toString(),
      requestedStatus,
    });

  const rentABook = async (onSuccessHandler: () => void) =>
    sendRentalRequest(BookActions.RENTED).then(onSuccessHandler);

  const returnABook = async (onSuccessHandler: () => void) =>
    sendRentalRequest(BookActions.RETURNED).then(onSuccessHandler);

  useEffect(() => {
    findBook?.();
  }, [bookReload]);

  return (
    <BookDetailsContext.Provider
      value={{
        ...bookState,
        bookStatus,
        reloadBook,
        setBookStatus,
        rentABook,
        returnABook,
      }}
    >
      {children}
    </BookDetailsContext.Provider>
  );
};

export default BookDetailsContextProvider;

export const useBookDetailsContext = () => useContext(BookDetailsContext);
