import React, { useContext, useReducer } from "react";
import * as bookService from "../../../services/BookService";
import reducer from "./BookReviewReducer";
import { actions } from "./BookReviewActions";
import { BookReviewFormVariant, IBookReviewContext } from "./Types";
import { useAuthContext } from "../../auth/AuthContext";
import { BookReview } from "../details/Types";

const initialState = {
  showedReviewForm: false,
  selectedReview: null,
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

  const hideReviewForm = () => dispatch({ type: actions.HIDE_REVIEW_FORM });

  const deleteReview = async (bookId: number, onSuccessHandler: () => void) =>
    bookService
      .deleteBookReview(bookId, userProfile?.email)
      .then(onSuccessHandler)
      .then(() => hideReviewForm());

  const showCreateReviewForm = () =>
    dispatch({ type: actions.SHOW_CREATE_REVIEW_FORM });

  const showEditReviewForm = (review: BookReview) =>
    dispatch({ type: actions.SHOW_EDIT_REVIEW_FORM, payload: review });

  return (
    <BookReviewContext.Provider
      value={{
        ...reviewState,
        addReview,
        editReview,
        deleteReview,
        showCreateReviewForm,
        showEditReviewForm,
        hideReviewForm,
      }}
    >
      {props.children}
    </BookReviewContext.Provider>
  );
};

export default BookReviewContextProvider;

export const useBookReviewContext = () => useContext(BookReviewContext);
