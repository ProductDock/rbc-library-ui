import { IBooksContext } from "./Types";
import { actions } from "./BooksActions";

const reducer = (state: IBooksContext, action: any) => {
  switch (action.type) {
    case actions.SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case actions.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case actions.SET_ALL_BOOKS_COUNT:
      return {
        ...state,
        allBooksCount: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
