import { IBooksContext, SuggestedBook } from "./Types";
import { actions } from "../BooksActions";

const NotFoundSuggestion: SuggestedBook = {
  id: 0,
  title: "",
  author: "",
  recommended: false,
  notFound: true,
};

const reducer = (state: IBooksContext, action: any) => {
  switch (action.type) {
    case actions.SET_BOOKS:
      return {
        ...state,
        books: [...state.books, ...action.payload.books],
        allBooksCount: action.payload.count,
      };
    case actions.SET_RECOMMENDED_BOOKS:
      return {
        ...state,
        recommendedBooks: [...action.payload.books],
        recommendedBooksCount: action.payload.count,
      };
    case actions.SET_SUGGESTED_BOOKS:
      return {
        ...state,
        suggestedBooks:
          action.payload.length > 0 ? action.payload : [NotFoundSuggestion],
      };
    case actions.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case actions.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
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
