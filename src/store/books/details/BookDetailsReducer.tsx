import { IBookDetailsContext } from "./Types";
import { actions } from "../BooksActions";

const reducer = (state: IBookDetailsContext, action: any) => {
  switch (action.type) {
    case actions.SET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case actions.RENT_BOOK:
      return {
        ...state,
        status: "rented",
        successMessage: "You have successfully rented a book",
      };
    case actions.RETURN_BOOK:
      return {
        ...state,
        status: "available",
        successMessage: "You have successfully returned a book",
      };
    default:
      return state;
  }
};

export default reducer;
