import Router from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";
import BookDetailsPage from "../../../BookDetailsPage";

const AVAILABLE_BOOK_ID = "1";
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

    render(<BookDetailsPage />);

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
