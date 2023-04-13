import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookReviewForm from ".";
import * as BookReviewContext from "../../../../store/books/reviews/BookReviewContext";
import { BookReviewFormVariant } from "../../../../store/books/reviews/Types";

beforeEach(() => {
  jest.spyOn(BookReviewContext, "useBookReviewContext").mockReturnValue({
    showedReviewForm: true,
    selectedReview: null,
    formVariant: BookReviewFormVariant.CREATE,
  });
});

describe("Test book review form", () => {
  test("should show review form fields", async () => {
    render(<BookReviewForm />);

    const formTitle = await screen.findByTestId("sidebar-modal-title");
    const rating = screen.getByTestId("book-review-rating");
    const checkboxes = screen.getByTestId("book-review-checkboxes");
    const textarea = screen.getByTestId("review-comment-textarea");
    const submitReviewButton = screen.getByTestId(
      "sidebar-modal-submit-button"
    );
    const skipReviewButton = screen.getByTestId("sidebar-modal-cancel-button");

    expect(formTitle).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(checkboxes).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
    expect(submitReviewButton).toBeInTheDocument();
    expect(skipReviewButton).toBeInTheDocument();
  });

  test("should disable submit review button when review fields not provided", async () => {
    render(<BookReviewForm />);

    const submitReviewButton = await screen.findByTestId(
      "sidebar-modal-submit-button"
    );
    expect(submitReviewButton).toBeDisabled();
  });

  test("should enable submit review button when review comment present", async () => {
    render(<BookReviewForm />);

    const reviewCommentTextArea = await screen.findByTestId(
      "review-comment-textarea"
    );
    userEvent.type(reviewCommentTextArea, "Test review comment");

    const submitReviewButton = await screen.findByTestId(
      "sidebar-modal-submit-button"
    );
    expect(submitReviewButton).toBeEnabled();
  });

  test("should enable submit review button when review star is selected", async () => {
    render(<BookReviewForm />);

    const bookReview = await screen.findByTestId("book-review-rating");
    const firstStar = bookReview.firstElementChild;

    fireEvent.click(firstStar!!);

    const submitReviewButton = await screen.findByTestId(
      "sidebar-modal-submit-button"
    );
    expect(submitReviewButton).toBeEnabled();
  });

  test("should enable submit review button when recommendation is selected", async () => {
    render(<BookReviewForm />);

    const recommendation = await screen.findAllByTestId(
      "book-recommendation-checkbox"
    );

    userEvent.click(recommendation.at(0)!!);

    const submitReviewButton = await screen.findByTestId(
      "sidebar-modal-submit-button"
    );
    expect(submitReviewButton).toBeEnabled();
  });
});
