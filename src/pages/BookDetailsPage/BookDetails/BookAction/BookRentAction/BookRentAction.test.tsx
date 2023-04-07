import Router, { BrowserRouter } from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";
import BookDetailsQrPage from "../../../../BookDetailsQrPage";
import SuccessScreenContextProvider from "../../../../../store/books/success/SuccessScreenContext";

const AVAILABLE_BOOK_ID = "1";
const RESERVED_BY_YOU_BOOK_ID = "2";
const SUCCESS_DISAPPEAR_AFTER = 2000;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Test book rent action", () => {
  test("should show success page when book successfully rented", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: AVAILABLE_BOOK_ID });

    render(
      <BrowserRouter>
        <SuccessScreenContextProvider>
          <BookDetailsQrPage />
        </SuccessScreenContextProvider>
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(screen.queryByTestId("rent-book-button")).toBeTruthy()
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

  test("should show success page when book successfully rented after reservation", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RESERVED_BY_YOU_BOOK_ID });

    render(
      <BrowserRouter>
        <SuccessScreenContextProvider>
          <BookDetailsQrPage />
        </SuccessScreenContextProvider>
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(screen.queryByTestId("rent-book-button")).toBeTruthy()
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
