/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useReducer, useState } from "react";
import { actions } from "../BooksActions";
import { Record } from "../catalog/Types";
import reducer from "./BookStatusReducer";
import { IBookStatusContext } from "./Types";

const initialState = {
  records: [],
  numberOfCopies: 0,
  isBookAvailable: true,
  bookRentedByLoggedInUser: false,
  loading: false,
  error: null,
};

type Props = {
  bookId: number;
  records: Record[];
  loggedInUserEmail: string;
  children: any;
};

export const BookStatusContext =
  React.createContext<IBookStatusContext>(initialState);

const BookStatusContextProvider = ({
  records,
  bookId,
  loggedInUserEmail,
  children,
}: Props) => {
  const [bookState, dispatch] = useReducer(reducer, initialState);
  const { bookRentedByLoggedInUser, isBookAvailable } = bookState;

  const [loading] = useState<boolean>(false);
  const [error] = useState<string | null>(null);
  const [numberOfCopies] = useState(0);

  //   const findNumberOfCopies = async () => {
  //     setLoading(true);
  //     await bookService
  //       .getBook(bookId)
  //       .then((resp) => dispatch({ type: actions.SET_BOOK, payload: resp.data }))
  //       .catch(() => setError("Error while fetching data"));
  //     setLoading(false);
  //   };

  const setIsBookAvailable = (bookAvailable: boolean) => {
    dispatch({ type: actions.SET_BOOK_STATUS, payload: bookAvailable });
  };

  const setBookRentedByLoggedInUser = (rentedByYou: boolean) => {
    dispatch({
      type: actions.SET_RENTED_BY_LOGGED_IN_USER,
      payload: rentedByYou,
    });
  };

  useEffect(() => {
    const rentals = records.filter((record) => record.status === "RENTED");
    if (
      rentals.filter((rental) => rental.email === loggedInUserEmail).length > 0
    ) {
      setBookRentedByLoggedInUser(true);
      setIsBookAvailable(false);
    } else if (rentals.length === numberOfCopies) {
      setIsBookAvailable(false);
    }
  });

  return (
    <BookStatusContext.Provider
      value={{
        ...bookState,
        loading,
        error,
      }}
    >
      {children}
    </BookStatusContext.Provider>
  );
};

export default BookStatusContextProvider;

export const useBookDetailsContext = () => useContext(BookStatusContext);
