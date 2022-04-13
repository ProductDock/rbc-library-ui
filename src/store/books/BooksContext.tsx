import React, { useContext, useEffect, useReducer, useState } from "react";
import * as bookService from "../../services/BookService";
import reducer from "./BooksReducer";
import { actions } from "./BooksActions";
import { IBooksContext } from "./Types";

const initialState = {
  books: [],
  allBooksCount: 0,
  book: null,
  bookId: 0,
  loading: false,
  error: null,
  page: 0,
  topics: [],
};

export const BooksContext = React.createContext<IBooksContext>(initialState);

const BooksContextProvider = (props: any) => {
  const [booksState, dispatch] = useReducer(reducer, initialState);
  const { page, topics, bookId } = booksState;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const findBooks = async () => {
    setLoading(true);
    await bookService
      .fetchBooks({ page, topics })
      .then((resp) => dispatch({ type: actions.SET_BOOKS, payload: resp.data }))
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  const findBook = async () => {
    console.log("usao u findBook");
    console.log(bookId);
    setLoading(true);
    await bookService.getBook(bookId).then((resp) => console.log(resp.data));
    await bookService
      .getBook(bookId)
      .then((resp) => dispatch({ type: actions.SET_BOOK, payload: resp.data }))
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  const countAllBooks = async () => {
    await bookService
      .countAllBooks()
      .then((resp) =>
        dispatch({ type: actions.SET_ALL_BOOKS_COUNT, payload: resp.data })
      )
      .catch(() => setError("Error while fetching data"));
  };

  const setPage = (pageNumber: number) => {
    dispatch({ type: actions.SET_PAGE, payload: pageNumber });
  };

  const setTopicFilter = (topicFilter: string[]) => {
    dispatch({ type: actions.SET_TOPICS, payload: topicFilter });
  };

  const setBookId = (bookIdParam: number) => {
    console.log("Usao u setBookId");
    console.log(bookIdParam);
    dispatch({ type: actions.SET_BOOK_ID, payload: bookIdParam });
  };

  useEffect(() => {
    findBooks?.();
  }, [page, topics]);

  useEffect(() => {
    findBook?.();
  }, [bookId]);

  useEffect(() => {
    countAllBooks?.();
  }, []);

  return (
    <BooksContext.Provider
      value={{
        ...booksState,
        loading,
        error,
        setPage,
        setTopicFilter,
        setBookId,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;

export const useBooksContext = () => useContext(BooksContext);
