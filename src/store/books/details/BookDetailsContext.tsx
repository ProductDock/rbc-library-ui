import React, { useContext, useEffect, useReducer, useState } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./BookDetailsReducer";
import { actions } from "../BooksActions";
import { IBookDetailsContext, RentalRequest } from "./Types";

const initialState = {
  book: null,
  loading: false,
  error: null,
  status: "AVAILABLE",
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

  const findBook = async () => {
    setLoading(true);
    await bookService
      .getBook(bookId)
      .then((resp) => dispatch({ type: actions.SET_BOOK, payload: resp.data }))
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  const hideConfirmationModal = () => setShowedConfirmationModal(false);

  const performAction = () => {
    let actionType: string = actions.RENT_BOOK;
    const { status } = bookState;
    if (status === "RENTED") actionType = actions.RETURN_BOOK;

    if (!showedConfirmationModal) setShowedConfirmationModal(true);
    else {
      dispatch({ type: actionType });
      setShowedSuccessMessage(true);
      setShowedConfirmationModal(false);
    }
  };

  const sendRentalRequest = async (rentalRequest: RentalRequest) => {
    await bookService.postRentalRequest(rentalRequest);
  };

  useEffect(() => {
    if (showedSuccessMessage) {
      sendRentalRequest({
        bookId: bookId.toString(),
        requestedStatus: bookState.status,
      });
      setTimeout(() => setShowedSuccessMessage(false), 2000);
      findBook?.();
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
        performAction,
      }}
    >
      {children}
    </BookDetailsContext.Provider>
  );
};

export default BookDetailsContextProvider;

export const useBookDetailsContext = () => useContext(BookDetailsContext);
