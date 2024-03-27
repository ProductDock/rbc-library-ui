/* eslint-disable no-global-assign */
import Router, { BrowserRouter } from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";
import BookDetailsPage from "../../../BookDetailsPage";
import userEvent from "@testing-library/user-event";
import Notification from "../../../../../components/Notification";
import SuccessScreenContextProvider from "../../../../../store/books/success/SuccessScreenContext";

const BOOK_FOR_SUBSCRIPTION = "5";
const BOOK_FOR_UNSUBSCRIPTION = "6";
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

describe("Test book subscribe action", () => {
  test("should render subscribe button for unavailable book", async () => {
    initTest(SCREEN_WIDTH);
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: BOOK_FOR_SUBSCRIPTION });

    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const button = await screen.findByTestId("subscribe-button");

    expect(button).toBeInTheDocument();
  });

  test("should render unsubscribe button for unavailable book", async () => {
    initTest(SCREEN_WIDTH);
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: BOOK_FOR_UNSUBSCRIPTION });

    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const button = await screen.findByTestId("unsubscribe-button");

    expect(button).toBeInTheDocument();
  });

  test("should open confirmation modal on subscribe button click", async () => {
    initTest(SCREEN_WIDTH);
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: BOOK_FOR_SUBSCRIPTION });

    render(
      <BrowserRouter>
        <SuccessScreenContextProvider>
          <BookDetailsPage />
          <Notification />
        </SuccessScreenContextProvider>
      </BrowserRouter>
    );

    const button = await screen.findByTestId("subscribe-button");

    userEvent.click(button);

    const modal = await screen.findByTestId("confirmation-modal");

    expect(modal).toBeInTheDocument();
  });

  test("should show success message on confirmation click", async () => {
    initTest(SCREEN_WIDTH);
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: BOOK_FOR_SUBSCRIPTION });

    render(
      <BrowserRouter>
        <SuccessScreenContextProvider>
          <BookDetailsPage />
          <Notification />
        </SuccessScreenContextProvider>
      </BrowserRouter>
    );

    const button = await screen.findByTestId("subscribe-button");

    userEvent.click(button);

    const modal = await screen.findByTestId("confirmation-modal");

    const confirmButton = screen.getByText("Confirm");

    userEvent.click(confirmButton);

    const notification = await screen.findByText("Success!");

    expect(notification).toBeInTheDocument();
  });
});
