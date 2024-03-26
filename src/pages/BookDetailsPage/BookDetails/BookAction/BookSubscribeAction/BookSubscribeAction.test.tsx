/* eslint-disable no-global-assign */
import Router, { BrowserRouter } from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";
import BookDetailsPage from "../../../BookDetailsPage";

const UNSUBSCRIBED_BOOK = "5";
const SUBSCRIBED_BOOK = "6";
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
      .mockReturnValue({ bookId: SUBSCRIBED_BOOK });

    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const button = await screen.findByTestId("subscribe-button");

    expect(button).toBeInTheDocument();
  });

  test("should render subscribe button for unavailable book", async () => {
    initTest(SCREEN_WIDTH);
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: UNSUBSCRIBED_BOOK });

    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const button = await screen.findByTestId("unsubscribe-button");

    expect(button).toBeInTheDocument();
  });
});
