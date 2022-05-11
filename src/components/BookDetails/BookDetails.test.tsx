import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Router from "react-router-dom";
import { BooksFixture } from "../../msw/fixtures";
import BookDetailsPage from "../../pages/BookDetailsPage";

const { books } = BooksFixture;
const testBook = books[1];
const AVAILABLE_BOOK_ID = "1";
const RENTED_BOOK_ID = "2";
const RENTED_BY_YOU_BOOK_ID = "3";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

beforeEach(() => {
  jest
    .spyOn(Router, "useParams")
    .mockReturnValue({ bookId: AVAILABLE_BOOK_ID });
});

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

  test("should show rent a book button when book is available", async () => {
    render(<BookDetailsPage />);

    const statusButton = await screen.findByTestId("rent-book-button");
    expect(statusButton).toBeInTheDocument();
  });

  test("should show return a book button when book is rented by you", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RENTED_BY_YOU_BOOK_ID });

    render(<BookDetailsPage />);

    const statusButton = await screen.findByTestId("return-book-button");
    expect(statusButton).toBeInTheDocument();
  });

  test("should not display book action button when book is rented by other user", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ bookId: RENTED_BOOK_ID });

    render(<BookDetailsPage />);

    const rentButton = screen.queryByTestId("rent-book-button");
    const returnButton = screen.queryByTestId("return-book-button");

    await act(async () => {
      expect(rentButton).toBeFalsy();
      expect(returnButton).toBeFalsy();
    });
  });

  test("should show success page when book successfully rented", async () => {
    render(<BookDetailsPage />);

    await waitFor(() =>
      expect(screen.queryByTestId("rent-book-button")).toBeTruthy()
    );

    const statusButton = screen.getByTestId("rent-book-button");
    statusButton?.click();

    const messageBox = await screen.findByText(
      "Please confirm your book rental and enjoy reading the book."
    );
    const confirmButton = screen.getByTestId("confirm-button");

    expect(messageBox).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();

    confirmButton.click();
    const successText = await screen.findByText("Success!");
    expect(successText).toBeInTheDocument();
  });
});
