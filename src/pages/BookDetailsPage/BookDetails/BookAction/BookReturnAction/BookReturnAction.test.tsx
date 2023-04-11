import Router, { BrowserRouter } from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookDetailsQrPage from "../../../../BookDetailsQrPage";
import SuccessScreenContextProvider from "../../../../../store/books/success/SuccessScreenContext";

const RENTED_BY_YOU_BOOK_ID = "3";
const RENTED_BY_YOU_BOOK_ID_WITH_REVIEW = "4";
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
  test("should show review page when book successfully returned", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RENTED_BY_YOU_BOOK_ID });

    render(
      <BrowserRouter>
        <SuccessScreenContextProvider>
          <BookDetailsQrPage />
        </SuccessScreenContextProvider>
      </BrowserRouter>
    );

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

    render(
      <BrowserRouter>
        <SuccessScreenContextProvider>
          <BookDetailsQrPage />
        </SuccessScreenContextProvider>
      </BrowserRouter>
    );

    const returnButton = await screen.findByTestId(
      "return-book-button",
      {},
      { timeout: BUTTON_LOADED_AFTER }
    );
    returnButton?.click();

    const confirmButton = await screen.findByTestId("confirm-button");
    confirmButton.click();

    const skipReviewButton = await screen.findByTestId(
      "sidebar-modal-cancel-button"
    );
    skipReviewButton.click();

    const successText = await screen.findByText("Success!");
    expect(successText).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText("Success!")).toBeFalsy(), {
      timeout: SUCCESS_DISAPPEAR_AFTER,
    });
  });

  test("should show edit book review form after successful book return, when user already reviewed book", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RENTED_BY_YOU_BOOK_ID_WITH_REVIEW });

    render(
      <BrowserRouter>
        <SuccessScreenContextProvider>
          <BookDetailsQrPage />
        </SuccessScreenContextProvider>
      </BrowserRouter>
    );

    const returnButton = await screen.findByTestId(
      "return-book-button",
      {},
      { timeout: BUTTON_LOADED_AFTER }
    );
    returnButton?.click();

    const confirmButton = await screen.findByTestId("confirm-button");
    confirmButton.click();

    const editReviewForm = await screen.findByText("Edit a review");
    expect(editReviewForm).toBeTruthy();
  });

  test("should show success page when book review submitted after successful book return", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: RENTED_BY_YOU_BOOK_ID });

    render(
      <BrowserRouter>
        <SuccessScreenContextProvider>
          <BookDetailsQrPage />
        </SuccessScreenContextProvider>
      </BrowserRouter>
    );

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

    const submitReviewButton = screen.getByTestId(
      "sidebar-modal-submit-button"
    );
    expect(submitReviewButton).toBeEnabled();
    submitReviewButton.click();

    const successText = await screen.findByText("Success!");
    expect(successText).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText("Success!")).toBeFalsy(), {
      timeout: SUCCESS_DISAPPEAR_AFTER,
    });
  });
});
