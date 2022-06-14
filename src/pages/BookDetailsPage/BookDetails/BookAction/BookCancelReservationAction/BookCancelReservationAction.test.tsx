/* eslint-disable no-global-assign */
import Router from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";
import BookDetailsPage from "../../../BookDetailsPage";

const RESERVED_BY_YOU_BOOK_ID = "2";
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
      .mockReturnValue({ bookId: RESERVED_BY_YOU_BOOK_ID });

    render(<BookDetailsPage />);

    await waitFor(() =>
      expect(screen.queryByTestId("cancel-reservation-button")).toBeTruthy()
    );

    const cancelButton = screen.getByTestId("cancel-reservation-button");
    cancelButton?.click();

    const confirmButton = await screen.findByTestId("confirm-button");
    confirmButton.click();
  });
});
