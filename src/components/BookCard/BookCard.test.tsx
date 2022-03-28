import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { Book } from "../../store/books/Types";
import * as BooksContext from "../../store/books/BooksContext";

const books: Book[] = [
  { id: 1, author: "John Doe", cover: "Cover", title: "Book2" },
];

test("renders test page and finds title", async () => {
  jest.spyOn(BooksContext, "useBooksContext").mockImplementation(() => ({
    books,
    loading: false,
    error: null,
  }));
  render(<App />);
  const bookTitle = screen.getByText("Book2");
  expect(bookTitle).toBeInTheDocument();

  const bookAuthor = screen.getByText("John Doe");
  expect(bookAuthor).toBeInTheDocument();
});
