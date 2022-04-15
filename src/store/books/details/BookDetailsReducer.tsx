import { IBookDetailsContext } from "./Types";
import { actions } from "../BooksActions";

const reducer = (state: IBookDetailsContext, action: any) => {
  switch (action.type) {
    case actions.SET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
