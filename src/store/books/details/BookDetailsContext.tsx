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

  const [showedSuccessMessage, setShowedSuccessMessage] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [bookReload, setBookReload] = useState<boolean>(false);

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

  const showSuccessScreen = () => {
    setShowedSuccessMessage(true);
    setBookReload(!bookReload);
    setTimeout(() => setShowedSuccessMessage(false), 2000);
  };

  const sendRentalRequest = async () => {
    await bookService.postRentalRequest({
      bookId: bookId.toString(),
      requestedStatus: bookStatus,
    });
  };

  const performAction = async (
    action: string,
    onSuccessHandler: () => void
  ) => {
    dispatch({ type: action });

    return sendRentalRequest().then(onSuccessHandler);
  };

  useEffect(() => {
    findBook?.();
  }, [bookReload]);

  return (
    <BookDetailsContext.Provider
      value={{
        ...bookState,
        loading,
        error,
        bookStatus,
        showedSuccessMessage,
        setBookStatus,
        showSuccessScreen,
        performAction,
      }}
    >
      {children}
    </BookDetailsContext.Provider>
  );
};

export default BookDetailsContextProvider;

export const useBookDetailsContext = () => useContext(BookDetailsContext);
