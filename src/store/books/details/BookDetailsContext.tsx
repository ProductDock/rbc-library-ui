import React, { useContext, useEffect, useReducer, useState } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./BookDetailsReducer";
import { actions } from "../BooksActions";
import { IBookDetailsContext } from "./Types";

const initialState = {
  book: null,
  loading: false,
  error: null,
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

  const rentABook = () => {
    if (!showedConfirmationModal) setShowedConfirmationModal(true);
  };

  const hideConfirmationModal = () => setShowedConfirmationModal(false);

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
