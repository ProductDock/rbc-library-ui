/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
import React, { useContext, useEffect, useReducer, useState } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./BookDetailsReducer";
import { actions } from "../BooksActions";
import { IBookDetailsContext } from "./Types";
import { BookStatus } from "../status/Types";

const initialState = {
  book: null,
  loading: false,
  error: null,
  bookStatus: null,
  showedSuccessMessage: false,
  showedConfirmationModal: false,
  successMessage: null,
};

type Props = {
  bookId: number;
  children: any;
};

export const BookDetailsContext =
  React.createContext<IBookDetailsContext>(initialState);

const BookDetailsContextProvider = ({ bookId, children }: Props) => {
  const [bookState, dispatch] = useReducer(reducer, initialState);

  const [showedConfirmationModal, setShowedConfirmationModal] =
    useState<boolean>(false);
  const [showedSuccessMessage, setShowedSuccessMessage] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [bookStatus, setBookStatus] = useState<BookStatus | null>(null);

  const findBook = async () => {
    setLoading(true);
    await bookService
      .getBook(bookId)
      .then((resp) => dispatch({ type: actions.SET_BOOK, payload: resp.data }))
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  const hideConfirmationModal = () => setShowedConfirmationModal(false);

  const showSuccessScreen = () => {
    setShowedSuccessMessage(true);
    setShowedConfirmationModal(false);
    setTimeout(() => setShowedSuccessMessage(false), 2000);
  };

  const sendRentalRequest = async () => {
    await bookService.postRentalRequest({
      bookId: bookId.toString(),
      requestedStatus: bookStatus,
    });
  };

  const performAction = () => {
    if (!showedConfirmationModal) setShowedConfirmationModal(true);
    else {
      let actionType: string = "";

      if (bookStatus === BookStatus.AVAILABLE) actionType = actions.RENT_BOOK;
      if (bookStatus === BookStatus.RENTED_BY_YOU)
        actionType = actions.RETURN_BOOK;

      dispatch({ type: actionType });

      sendRentalRequest().then(() => {
        showSuccessScreen();
        findBook?.();
      });
    }
  };

  useEffect(() => {
    findBook?.();
  }, []);

  return (
    <BookDetailsContext.Provider
      value={{
        ...bookState,
        loading,
        error,
        bookStatus,
        showedConfirmationModal,
        showedSuccessMessage,
        setBookStatus,
        hideConfirmationModal,
        performAction,
      }}
    >
      {children}
    </BookDetailsContext.Provider>
  );
};

export default BookDetailsContextProvider;

export const useBookDetailsContext = () => useContext(BookDetailsContext);
