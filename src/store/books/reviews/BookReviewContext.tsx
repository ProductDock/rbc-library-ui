import React, { useContext, useReducer } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./BookReviewReducer";
import { actions } from "./BookReviewActions";
import { BookReviewFormVariant, IBookReviewContext } from "./Types";
import { useAuthContext } from "../../auth/AuthContext";
import { BookReview } from "../details/Types";

const initialState = {
  selectedReview: null,
  showedReviewForm: false,
  formVariant: BookReviewFormVariant.CREATE,
};

export const BookReviewContext =
  React.createContext<IBookReviewContext>(initialState);

const BookReviewContextProvider = (props: any) => {
  const [reviewState, dispatch] = useReducer(reducer, initialState);
  const { userProfile } = useAuthContext();

  const addReview = async (bookId: number, bookReview: BookReview) =>
    bookService.postBookReview(bookId, bookReview);

  const editReview = async (bookId: number, bookReview: BookReview) =>
    bookService.putBookReview(bookId, bookReview, userProfile?.email);

  const selectReview = async (bookReview: BookReview) =>
    dispatch({ type: actions.SELECT_REVIEW_FOR_EDIT, payload: bookReview });

  const showReviewForm = async (formVariant: BookReviewFormVariant) =>
    dispatch({ type: actions.SHOW_REVIEW_FORM, payload: formVariant });

  const hideReviewForm = async () =>
    dispatch({ type: actions.HIDE_REVIEW_FORM });

  return (
    <BookReviewContext.Provider
      value={{
        ...reviewState,
        addReview,
        editReview,
        selectReview,
        showReviewForm,
        hideReviewForm,
      }}
    >
      {props.children}
    </BookReviewContext.Provider>
  );
};

export default BookReviewContextProvider;

export const useBookReviewContext = () => useContext(BookReviewContext);
