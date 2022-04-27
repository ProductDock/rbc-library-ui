import { IBookStatusContext } from "./Types";
import { actions } from "../BooksActions";

const reducer = (state: IBookStatusContext, action: any) => {
  switch (action.type) {
    case actions.SET_BOOK_STATUS:
      return {
        ...state,
        isBookAvailable: action.payload,
      };
    case actions.SET_RENTED_BY_LOGGED_IN_USER:
      return {
        ...state,
        bookRentedByLoggedInUser: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
