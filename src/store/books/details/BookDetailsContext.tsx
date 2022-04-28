import React, { useContext, useEffect, useReducer, useState } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./BookDetailsReducer";
import { actions } from "../BooksActions";
import { IBookDetailsContext } from "./Types";

const initialState = {
  book: null,
  loading: false,
  error: null,
  showedSuccessMessage: false,
  showedConfirmationModal: false,
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

  const findBook = async () => {
    setLoading(true);
    await bookService
      .getBook(bookId)
      .then((resp) => dispatch({ type: actions.SET_BOOK, payload: resp.data }))
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  const hideConfirmationModal = () => setShowedConfirmationModal(false);

  const rentABook = () => {
    if (!showedConfirmationModal) setShowedConfirmationModal(true);
    else {
      hideConfirmationModal();
      setShowedSuccessMessage(true);
    }
  };

  useEffect(() => {
    if (showedSuccessMessage) {
      setTimeout(() => setShowedSuccessMessage(false), 2000);
    }
  }, [showedSuccessMessage]);

  useEffect(() => {
    findBook?.();
  }, []);

  return (
    <BookDetailsContext.Provider
      value={{
        ...bookState,
        loading,
        error,
        showedConfirmationModal,
        showedSuccessMessage,
        hideConfirmationModal,
        rentABook,
      }}
    >
      {children}
    </BookDetailsContext.Provider>
  );
};

export default BookDetailsContextProvider;

export const useBookDetailsContext = () => useContext(BookDetailsContext);
