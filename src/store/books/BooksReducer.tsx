import { IBooksContext } from "./Types";
import { actions } from "./BooksActions";

const reducer = (state: IBooksContext, action: any) => {
  switch (action.type) {
    case actions.SET_BOOKS:
      return {
        ...state,
        books: [...state.books, ...action.payload.books],
      };
    case actions.SET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case actions.SET_BOOK_ID:
      return {
        ...state,
        bookId: action.payload,
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
    case actions.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case actions.SET_TOPICS:
      return {
        ...state,
        page: 0,
        topics: action.payload,
        books: [],
      };
    default:
      return state;
  }
};

export default reducer;
