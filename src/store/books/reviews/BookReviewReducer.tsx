import { IBookReviewContext } from "./Types";
import { actions } from "./BookReviewActions";

const reducer = (state: IBookReviewContext, action: any) => {
  switch (action.type) {
    case actions.SELECT_REVIEW_FOR_EDIT:
      return {
        ...state,
        selectedReview: action.payload,
      };
    case actions.RESET_SELECTED_REVIEW:
      return {
        ...state,
        selectedReview: null,
      };
    case actions.SHOW_REVIEW_FORM:
      return {
        ...state,
        showedReviewForm: true,
        formVariant: action.payload,
      };
    case actions.HIDE_REVIEW_FORM:
      return {
        ...state,
        showedReviewForm: false,
      };
    default:
      return state;
  }
};

export default reducer;
