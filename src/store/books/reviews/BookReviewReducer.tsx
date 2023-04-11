import { BookReviewFormVariant, IBookReviewContext } from "./Types";
import { actions } from "./BookReviewActions";

const reducer = (state: IBookReviewContext, action: any) => {
  switch (action.type) {
    case actions.SHOW_CREATE_REVIEW_FORM:
      return {
        ...state,
        showedReviewForm: true,
        selectedReview: null,
        formVariant: BookReviewFormVariant.CREATE,
      };
    case actions.SHOW_EDIT_REVIEW_FORM:
      return {
        ...state,
        showedReviewForm: true,
        selectedReview: action.payload,
        formVariant: BookReviewFormVariant.EDIT,
      };
    case actions.HIDE_REVIEW_FORM:
      return {
        ...state,
        showedReviewForm: false,
        selectedReview: null,
        formVariant: BookReviewFormVariant.CREATE,
      };
    default:
      return state;
  }
};

export default reducer;
