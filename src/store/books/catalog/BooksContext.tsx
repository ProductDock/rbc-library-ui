import React, { useContext, useEffect, useReducer, useState } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./BooksReducer";
import { actions } from "../BooksActions";
import { IBooksContext } from "./Types";
import { useQueryParam } from "../../../router/useQueryParam";

const initialState = {
  recommendedBooks: [],
  recommendedBooksCount: 0,
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

  const [topicQueryParam, setTopicQueryParam] = useQueryParam("topics");
  const [stateReady, setStateReady] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const findBooks = async (recommended?: boolean) => {
    setLoading(true);
    await bookService
      .fetchBooks({ page, topics, recommended })
      .then((resp) => {
        if (recommended) {
          dispatch({ type: actions.SET_RECOMMENDED_BOOKS, payload: resp.data });
        } else dispatch({ type: actions.SET_BOOKS, payload: resp.data });
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
    if (stateReady) {
      setTopicQueryParam(topics);
      findBooks?.();
    }
  }, [page, topics, stateReady]);

  useEffect(() => {
    if (stateReady) {
      findBooks?.(true);
    }
  }, [topics, stateReady]);

  useEffect(() => {
    setTopicFilter(topicQueryParam);
    setStateReady(true);
  }, []);

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
