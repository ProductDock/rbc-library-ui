/* eslint-disable no-global-assign */
import Router, { BrowserRouter } from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";
import BookDetailsPage from "../../../BookDetailsPage";
import SuccessScreenContextProvider from "../../../../../store/books/success/SuccessScreenContext";
import Notification from "../../../../../components/Notification";

const AVAILABLE_BOOK_ID = "1";
const SCREEN_WIDTH = 900;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

afterEach(() => {
  jest.restoreAllMocks();
});

const initTest = (width: any) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: width >= 800,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  });
};

describe("Test book rent action", () => {
  test("should show success page when book successfully reserved", async () => {
    initTest(SCREEN_WIDTH);
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: AVAILABLE_BOOK_ID });

    render(
      <BrowserRouter>
        <SuccessScreenContextProvider>
          <BookDetailsPage />
          <Notification />
        </SuccessScreenContextProvider>
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(screen.queryByTestId("reserve-book-button")).toBeTruthy()
    );

    const reserveButton = screen.getByTestId("reserve-book-button");
    reserveButton?.click();

    const confirmButton = await screen.findByTestId("confirm-button");
    confirmButton.click();

    const successText = await screen.findByText("Success!");
    expect(successText).toBeInTheDocument();
  });
});
