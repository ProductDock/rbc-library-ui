import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BooksFixture } from "../../msw/fixtures";
import BookDetailsPage from "../../pages/BookDetailsPage";

const { books } = BooksFixture;
const testBook = books[1];

describe("Test book details page", () => {
  test("should render book details", async () => {
    render(<BookDetailsPage />);

    const book = await screen.findByTestId("book-details");

    await act(async () => {
      expect(book).toBeTruthy();
    });
  });

  test("should find correct title, author name and book status when api returns book", async () => {
    render(<BookDetailsPage />);

    const bookTitle = await screen.findByText(testBook.title);
    const bookAuthor = screen.getByText(testBook.author);
    const bookStatus = screen.getByText("Available");

    await act(async () => {
      expect(bookTitle).toBeTruthy();
      expect(bookAuthor).toBeTruthy();
      expect(bookStatus).toBeTruthy();
    });
  });
});
