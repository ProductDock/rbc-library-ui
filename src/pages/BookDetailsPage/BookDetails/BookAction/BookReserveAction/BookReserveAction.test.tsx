import Router from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";
import BookDetailsPage from "../../../BookDetailsPage";

const RESERVED_BY_YOU_BOOK_ID = "2";
const AVAILABLE_BOOK_ID = "1";
const SUCCESS_DISAPPEAR_AFTER = 2000;
const BUTTON_LOADED_AFTER = 2000;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Test book return action", () => {
  test("should show success screen  when book successfully reserved", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: AVAILABLE_BOOK_ID });

    render(<BookDetailsPage />);

    await waitFor(() =>
      expect(screen.queryByTestId("reserve-book-button")).toBeTruthy()
    );

    const reserveButton = screen.getByTestId("reserve-book-button");
    reserveButton?.click();

    const confirmButton = await screen.findByTestId("confirm-button");
    confirmButton.click();

    const successText = await screen.findByText("Success!");
    expect(successText).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText("Success!")).toBeFalsy(), {
      timeout: SUCCESS_DISAPPEAR_AFTER,
    });
  });

  test("should set status to AVAILABLE when book reservation successfully canceled", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RESERVED_BY_YOU_BOOK_ID });

    render(<BookDetailsPage />);

    const cancelButton = await screen.findByTestId(
      "cancel-reservation-button",
      {},
      { timeout: BUTTON_LOADED_AFTER }
    );
    cancelButton?.click();

    const confirmButton = await screen.findByTestId("confirm-button");
    confirmButton.click();

    const availableStatus = await screen.findByText("Available");
    expect(availableStatus).toBeInTheDocument();
  });
});
