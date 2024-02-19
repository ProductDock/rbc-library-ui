/* eslint-disable no-unused-vars */
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
  searchText: undefined,
};

export const BooksContext = React.createContext<IBooksContext>(initialState);

const BooksContextProvider = (props: any) => {
  const [booksState, dispatch] = useReducer(reducer, initialState);
  const { page, topics, searchText } = booksState;

  const [topicQueryParam, searchQueryParam, setQueryParam] = useQueryParam(
    "topics",
    "searchText"
  );
  const [stateReady, setStateReady] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [perPage, setPerPage] = useState<boolean>(false);

  const findBooks = async (recommended?: boolean) => {
    setLoading(true);
    await bookService
      .fetchBooks({ page, topics, recommended, searchText })
      .then((resp) => {
        if (recommended) {
          dispatch({ type: actions.SET_RECOMMENDED_BOOKS, payload: resp.data });
        } else if (perPage) {
          dispatch({ type: actions.SET_BOOKS_PER_PAGE, payload: resp.data });
        } else dispatch({ type: actions.SET_BOOKS, payload: resp.data });
      })
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  const setPage = (pageNumber: number, paginated: boolean = false) => {
    setPerPage(paginated);
    dispatch({ type: actions.SET_PAGE, payload: pageNumber });
  };

  const setTopicFilter = (topicFilter: string[]) => {
    dispatch({ type: actions.SET_TOPICS, payload: topicFilter });
  };

  const setSearchText = (search: string | undefined) => {
    dispatch({ type: actions.SET_SEARCH_TEXT, payload: search });
  };

  useEffect(() => {
    if (stateReady) {
      setQueryParam(topics, searchText || "");
      findBooks?.();
    }
  }, [page, topics, stateReady, searchText]);

  useEffect(() => {
    if (stateReady) {
      findBooks?.(true);
    }
  }, [topics, stateReady, searchText]);

  useEffect(() => {
    setSearchText(searchQueryParam);
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
        setSearchText,
        findBooks,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;

export const useBooksContext = () => useContext(BooksContext);
