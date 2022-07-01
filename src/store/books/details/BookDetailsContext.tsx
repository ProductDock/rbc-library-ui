/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
import React, { useContext, useEffect, useReducer, useState } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./BookDetailsReducer";
import { actions } from "../BooksActions";
import { BookActions, BookStatus } from "../status/Types";
import { BookReview, IBookDetailsContext } from "./Types";
import { useAuthContext } from "../../auth/AuthContext";

const initialState = {
  book: null,
  bookStatus: null,
  currentAction: null,
};

type Props = {
  bookId: number;
  children: any;
};

export const BookDetailsContext =
  React.createContext<IBookDetailsContext>(initialState);

const BookDetailsContextProvider = ({ bookId, children }: Props) => {
  const [bookState, dispatch] = useReducer(reducer, initialState);
  const { userProfile } = useAuthContext();

  const [bookReload, setBookReload] = useState<boolean>(false);
  const [bookStatus, setBookStatus] = useState<BookStatus | null>(null);

  const findBook = async () =>
    bookService
      .getBook(bookId)
      .then((resp) => dispatch({ type: actions.SET_BOOK, payload: resp.data }));

  const setBookAction = (action: BookActions | null) =>
    dispatch({ type: actions.SET_CURRENT_BOOK_ACTION, payload: action });

  const reloadBook = () => {
    setBookReload(!bookReload);
    setBookAction(null);
  };

  const sendRentalRequest = async (rentalAction: BookActions) =>
    bookService.postRentalRequest(bookId, {
      rentalAction,
    });

  const rentABook = async (onSuccessHandler: () => void) => {
    setBookAction(BookActions.RENT);
    sendRentalRequest(BookActions.RENT).then(onSuccessHandler);
  };

  const returnABook = async (onSuccessHandler: () => void) => {
    setBookAction(BookActions.RETURN);
    sendRentalRequest(BookActions.RETURN).then(onSuccessHandler);
  };

  const reserveABook = async (onSuccessHandler: () => void) => {
    setBookAction(BookActions.RESERVE);
    sendRentalRequest(BookActions.RESERVE).then(onSuccessHandler);
  };

  const cancelBookReservation = async (onSuccessHandler: () => void) => {
    setBookAction(BookActions.CANCEL_RESERVATION);
    sendRentalRequest(BookActions.CANCEL_RESERVATION).then(onSuccessHandler);
  };

  const addBookReview = async (bookReview: BookReview) =>
    bookService.postBookReview(bookId, bookReview);

  const editBookReview = async (bookReview: BookReview) =>
    bookService.putBookReview(bookId, bookReview, userProfile?.email);

  useEffect(() => {
    findBook?.();
  }, [bookReload, bookId]);

  return (
    <BookDetailsContext.Provider
      value={{
        ...bookState,
        bookStatus,
        reloadBook,
        setBookStatus,
        rentABook,
        returnABook,
        reserveABook,
        cancelBookReservation,
        addBookReview,
        editBookReview,
      }}
    >
      {children}
    </BookDetailsContext.Provider>
  );
};

export default BookDetailsContextProvider;

export const useBookDetailsContext = () => useContext(BookDetailsContext);
