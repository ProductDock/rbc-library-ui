import { ISuggestedBooksContext, SuggestedBook } from "./Types";
import { actions } from "../BooksActions";

const NotFoundSuggestion: SuggestedBook = {
  id: 0,
  title: "",
  author: "",
  recommended: false,
  notFound: true,
};

const reducer = (state: ISuggestedBooksContext, action: any) => {
  switch (action.type) {
    case actions.SET_SUGGESTED_BOOKS:
      return {
        ...state,
        suggestedBooks:
          action.payload.length > 0 ? action.payload : [NotFoundSuggestion],
      };
    case actions.CLEAR_SUGGESTED_BOOKS:
      return {
        ...state,
        suggestedBooks: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
