import React, { useContext, useEffect, useReducer } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./NewBookReducer";
import { actions } from "./NewBookActions";
import { INewBookContext, NewBook } from "./Types";

const initialState = {
  showedNewBookForm: false,
  existingTopics: [],
};

export const NewBookContext =
  React.createContext<INewBookContext>(initialState);

const NewBookContextProvider = (props: any) => {
  const [newBookState, dispatch] = useReducer(reducer, initialState);

  const addBook = async (book: NewBook) => bookService.postBook(book);

  const showNewBookForm = async () =>
    dispatch({ type: actions.SHOW_NEW_BOOK_FORM });

  const hideNewBookForm = () => dispatch({ type: actions.HIDE_NEW_BOOK_FORM });

  const getExistingTopics = async () =>
    bookService
      .fetchTopics()
      .then((resp) =>
        dispatch({ type: actions.GET_TOPICS, payload: resp.data })
      );

  useEffect(() => {
    getExistingTopics?.();
  }, []);

  return (
    <NewBookContext.Provider
      value={{
        ...newBookState,
        addBook,
        showNewBookForm,
        hideNewBookForm,
      }}
    >
      {props.children}
    </NewBookContext.Provider>
  );
};

export default NewBookContextProvider;

export const useNewBookContext = () => useContext(NewBookContext);
