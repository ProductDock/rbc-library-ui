/* eslint-disable no-promise-executor-return */
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Router, { BrowserRouter } from "react-router-dom";
import { BooksFixture } from "../../../msw/fixtures";
import BookDetailsPage from "../BookDetailsPage";

const { books } = BooksFixture;
const testBook = books[1];
const AVAILABLE_BOOK_ID = "1";
const RENTED_BOOK_ID = "6";
const RENTED_BY_YOU_BOOK_ID = "3";
const RENTED_BY_OTHER_USERS_BOOK_ID = "5";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

beforeEach(() => {
  jest
    .spyOn(Router, "useParams")
    .mockReturnValue({ bookId: AVAILABLE_BOOK_ID });
  render(
    <BrowserRouter>
      <BookDetailsPage />
    </BrowserRouter>
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Test book details page", () => {
  test("should render book details", async () => {
    const book = await screen.findByTestId("book-details");

    await act(async () => {
      expect(book).toBeTruthy();
    });
  });

  test("should find correct title, author name and book status when api returns book", async () => {
    const bookTitle = await screen.findByText(testBook.title);
    const bookAuthor = screen.getByText(testBook.author);
    const bookStatus = screen.getByText("Available");
    const bookRating = screen.getByText(testBook.rating?.score || 0);
    const bookRatingsCount = screen.getByText(
      `(${testBook.rating?.count || 0} ratings)`
    );

    await act(async () => {
      expect(bookTitle).toBeTruthy();
      expect(bookAuthor).toBeTruthy();
      expect(bookStatus).toBeTruthy();
      expect(bookRating).toBeTruthy();
      expect(bookRatingsCount).toBeTruthy();
    });
  });

  test("should show reserve a book button when book is available", async () => {
    const statusButton = await screen.findByTestId("reserve-book-button");
    expect(statusButton).toBeInTheDocument();
  });

  test("should not display book action button when book is rented by you", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RENTED_BY_YOU_BOOK_ID });
    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const rentButton = screen.queryByTestId("rent-book-button");
    const returnButton = screen.queryByTestId("return-book-button");

    await act(async () => {
      expect(rentButton).toBeFalsy();
      expect(returnButton).toBeFalsy();
    });
  });

  test("should not display book action button when book is rented by other user", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ bookId: RENTED_BOOK_ID });

    const rentButton = screen.queryByTestId("rent-book-button");
    const returnButton = screen.queryByTestId("return-book-button");

    await act(async () => {
      expect(rentButton).toBeFalsy();
      expect(returnButton).toBeFalsy();
    });
  });

  test("should display user avatars when book is rented by users other then logged in user", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RENTED_BY_OTHER_USERS_BOOK_ID });
    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const bookStatus = await screen.findByText("Rented");
    const statusComponent = screen.getByTestId("rented-book-status");
    const recordsAvatars = screen.getByTestId("records-users-avatars");

    await act(async () => {
      expect(bookStatus).toBeTruthy();
      expect(statusComponent).toBeTruthy();
      expect(recordsAvatars).toBeTruthy();
    });
  });

  test("should display user full name in status when book is rented by single user other then logged in user", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ bookId: RENTED_BOOK_ID });
    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const bookStatus = await screen.findByText("Rented by Test2 test2");
    const recordsAvatars = screen.queryByTestId("records-users-avatars");

    await act(async () => {
      expect(bookStatus).toBeTruthy();
      expect(recordsAvatars).toBeFalsy();
    });
  });
});
