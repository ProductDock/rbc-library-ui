import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Router, { BrowserRouter } from "react-router-dom";
import BookDetailsQrPage from ".";

const AVAILABLE_BOOK_ID = "1";
const RENTED_BOOK_ID = "6";
const RENTED_BY_YOU_BOOK_ID = "3";

const SUCCESS_DISAPPEAR_AFTER = 2000;
const BUTTON_APPEAR_AFTER = 1500;

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
      <BookDetailsQrPage />
    </BrowserRouter>
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Test book details qr page", () => {
  test("should render book details", async () => {
    const book = await screen.findByTestId("book-details");

    await act(async () => {
      expect(book).toBeTruthy();
    });
  });

  test("should show rent a book button when book is available", async () => {
    const statusButton = await screen.findByTestId("rent-book-button");
    expect(statusButton).toBeInTheDocument();
  });

  test("should show return a book button when book is rented by you", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RENTED_BY_YOU_BOOK_ID });
    render(
      <BrowserRouter>
        <BookDetailsQrPage />
      </BrowserRouter>
    );

    const returnButton = await screen.findByTestId("return-book-button");

    expect(returnButton).toBeInTheDocument();
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

  test("should show success page when book successfully rented", async () => {
    await waitFor(
      () => expect(screen.queryByTestId("rent-book-button")).toBeTruthy(),
      {
        timeout: BUTTON_APPEAR_AFTER,
      }
    );

    const rentButton = screen.getByTestId("rent-book-button");
    rentButton?.click();

    const confirmButton = await screen.findByTestId("confirm-button");
    confirmButton.click();

    const successText = await screen.findByText("Success!");
    expect(successText).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText("Success!")).toBeFalsy(), {
      timeout: SUCCESS_DISAPPEAR_AFTER,
    });
  });
});
