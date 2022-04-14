import React, { useContext, useEffect, useReducer, useState } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./BooksReducer";
import { actions } from "../BooksActions";
import { IBooksContext } from "./Types";

const initialState = {
  books: [],
  allBooksCount: 0,
  loading: false,
  error: null,
  page: 0,
  topics: [],
};

export const BooksContext = React.createContext<IBooksContext>(initialState);

const BooksContextProvider = (props: any) => {
  const [booksState, dispatch] = useReducer(reducer, initialState);
  const { page, topics } = booksState;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const findBooks = async () => {
    setLoading(true);
    await bookService
      .fetchBooks({ page, topics })
      .then((resp) => {
        dispatch({ type: actions.SET_BOOKS, payload: resp.data });
      })
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  const setPage = (pageNumber: number) => {
    dispatch({ type: actions.SET_PAGE, payload: pageNumber });
  };

  const setTopicFilter = (topicFilter: string[]) => {
    dispatch({ type: actions.SET_TOPICS, payload: topicFilter });
  };

  useEffect(() => {
    findBooks?.();
  }, [page, topics]);

  return (
    <BooksContext.Provider
      value={{
        ...booksState,
        loading,
        error,
        setPage,
        setTopicFilter,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;

export const useBooksContext = () => useContext(BooksContext);
