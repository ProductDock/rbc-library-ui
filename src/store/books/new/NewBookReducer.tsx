import { INewBookContext } from "./Types";
import { actions } from "./NewBookActions";

const reducer = (state: INewBookContext, action: any) => {
  switch (action.type) {
    case actions.SHOW_NEW_BOOK_FORM:
      return {
        ...state,
        showedNewBookForm: true,
      };
    case actions.HIDE_NEW_BOOK_FORM:
      return {
        ...state,
        showedNewBookForm: false,
      };
      case actions.GET_TOPICS:
        return {
          ...state,
          existingTopics: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
