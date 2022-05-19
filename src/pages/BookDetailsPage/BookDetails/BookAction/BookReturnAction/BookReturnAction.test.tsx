import Router from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookDetailsPage from "../../../BookDetailsPage";

const RENTED_BY_YOU_BOOK_ID = "3";
const SUCCESS_DISAPPEAR_AFTER = 2000;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Test book return action", () => {
  test("should show review page when book successfully returned", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RENTED_BY_YOU_BOOK_ID });

    render(<BookDetailsPage />);

    await waitFor(() =>
      expect(screen.queryByTestId("return-book-button")).toBeTruthy()
    );

    const rentButton = screen.getByTestId("return-book-button");
    rentButton?.click();

    const confirmButton = await screen.findByTestId("confirm-button");
    confirmButton.click();

    const reviewFormTitle = await screen.findByText("Write a review");
    expect(reviewFormTitle).toBeInTheDocument();
  });

  test("should show success page when book review skipped after successful book return", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RENTED_BY_YOU_BOOK_ID });

    render(<BookDetailsPage />);

    await waitFor(async () =>
      expect(screen.queryByTestId("return-book-button")).toBeTruthy()
    );

    const rentButton = screen.getByTestId("return-book-button");
    rentButton?.click();

    const confirmButton = await screen.findByTestId("confirm-button");
    confirmButton.click();

    const skipReviewButton = await screen.findByTestId("skip-review-button");
    skipReviewButton.click();

    const successText = await screen.findByText("Success!");
    expect(successText).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText("Success!")).toBeFalsy(), {
      timeout: SUCCESS_DISAPPEAR_AFTER,
    });
  });

  test("should show success page when book review submitted after successful book return", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RENTED_BY_YOU_BOOK_ID });

    render(<BookDetailsPage />);

    await waitFor(() =>
      expect(screen.queryByTestId("return-book-button")).toBeTruthy()
    );

    const rentButton = screen.getByTestId("return-book-button");
    rentButton?.click();

    const confirmButton = await screen.findByTestId("confirm-button");
    confirmButton.click();

    const reviewCommentTextArea = await screen.findByTestId(
      "review-comment-textarea"
    );
    userEvent.type(reviewCommentTextArea, "Test review comment");

    const submitReviewButton = screen.getByTestId("submit-review-button");
    expect(submitReviewButton).toBeEnabled();
    submitReviewButton.click();

    const successText = await screen.findByText("Success!");
    expect(successText).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText("Success!")).toBeFalsy(), {
      timeout: SUCCESS_DISAPPEAR_AFTER,
    });
  });
});
