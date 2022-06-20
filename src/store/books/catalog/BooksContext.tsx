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
  suggestedBooks: [],
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

  const [topicQueryParam, setTopicQueryParam] = useQueryParam("topics");
  const [stateReady, setStateReady] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const findBooks = async (recommended?: boolean) => {
    setLoading(true);
    await bookService
      .fetchBooks({ page, topics, recommended, searchText })
      .then((resp) => {
        if (recommended) {
          dispatch({ type: actions.SET_RECOMMENDED_BOOKS, payload: resp.data });
        } else dispatch({ type: actions.SET_BOOKS, payload: resp.data });
      })
      .catch(() => setError("Error while fetching data"));
    setLoading(false);
  };

  const findSuggestedBooks = async (searchText: string) => {
    await bookService
      .fetchSuggestedBooks(searchText)
      .then((resp) => {
        dispatch({ type: actions.SET_SUGGESTED_BOOKS, payload: resp.data });
      })
      .catch(() => setError("Error while fetching data"));
  };

  const setPage = (pageNumber: number) => {
    dispatch({ type: actions.SET_PAGE, payload: pageNumber });
  };

  const setTopicFilter = (topicFilter: string[]) => {
    dispatch({ type: actions.SET_TOPICS, payload: topicFilter });
  };

  const setSearchText = (searchText: string) => {
    dispatch({ type: actions.SET_SEARCH_TEXT, payload: searchText });
  };

  const clearSuggestedBooks = () => {
    dispatch({ type: actions.SET_SUGGESTED_BOOKS, payload: [] });
  };

  useEffect(() => {
    if (stateReady) {
      setTopicQueryParam(topics);
      findBooks?.();
    }
  }, [page, topics, stateReady, searchText]);

  useEffect(() => {
    if (stateReady) {
      findBooks?.(true);
    }
  }, [topics, stateReady, searchText]);

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
        findSuggestedBooks,
        setSearchText,
        clearSuggestedBooks,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;

export const useBooksContext = () => useContext(BooksContext);
