import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import * as AuthContext from "../auth/AuthContext";
import { Book } from "./Types";

const books: Book[] = [
  { id: 1, author: "Pera Peric", cover: "Cover", title: "Book title" },
  { id: 2, author: "Nikola Peric", cover: "Cover1", title: "Book title1" },
  { id: 3, author: "Milan Peric", cover: "Cover2", title: "Book title2" },
  { id: 4, author: "Petar Peric", cover: "Cover3", title: "Book title3" },
];
jest.mock("../../services/BookService", () => {
  return {
    countAllBooks: () => Promise.resolve({ data: 0 }),
    fetchAllBooks: () => Promise.resolve({ data: books }),
  };
});

beforeEach(() => {
  jest.spyOn(AuthContext, "useAuthContext").mockImplementation(() => ({
    isLoggedIn: true,
    loaded: true,
    userProfile: {
      name: "test",
      imageUrl: "http://test.com",
      email: "test@test.com",
    },
  }));
});

describe("Test find all book", () => {
  test("should render book collection when book service return list of books", async () => {
    render(<App />);
    await waitFor(() => {
      books.forEach((book) => {
        expect(screen.getByText(book.title)).toBeTruthy();
        expect(screen.getByText(book.author)).toBeTruthy();
      });
    });
  });
});
