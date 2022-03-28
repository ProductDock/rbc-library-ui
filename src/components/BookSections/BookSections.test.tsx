import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import * as AuthContext from "../../store/auth/AuthContext";
import { Book } from "../../store/books/Types";

const books: Book[] = [
  { id: 1, author: "Pera Peric", cover: "Cover", title: "Book title" },
  { id: 2, author: "Nikola Peric", cover: "Cover1", title: "Book title1" },
  { id: 3, author: "Milan Peric", cover: "Cover2", title: "Book title2" },
  { id: 4, author: "Petar Peric", cover: "Cover3", title: "Book title3" },
];
jest.mock("../../services/BookService", () => {
  return {
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

describe("Test book number in section", () => {
  test("should show number of book returned from server when books provided", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(`Catalog (${books.length})`)).toBeTruthy();
    });
  });

  test("should show 0 when returned empty array of books", async () => {
    jest.mock("../../services/BookService", () => {
      return {
        fetchAllBooks: () => Promise.resolve({ data: [] }),
      };
    });

    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(`Catalog (0)`)).toBeTruthy();
    });
  });
});
