/* eslint-disable react/jsx-no-undef */
import { render, screen, act, waitFor } from "@testing-library/react";
import Router, { BrowserRouter } from "react-router-dom";
import BookDetailsPage from "../../../../BookDetailsPage";
import * as bookService from "../../../../../../services/BookService";
import { BooksFixture } from "../../../../../../msw/fixtures";

const { books } = BooksFixture;

const BOOK_ID_WITH_REVIEWS = "1";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("Test review card action buttons", () => {
  test("should render delete a review button", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: BOOK_ID_WITH_REVIEWS });

    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const deleteAReviewButton = await screen.findAllByTestId(
      "delete-a-review-button"
    );

    await act(async () => {
      expect(deleteAReviewButton).toBeTruthy();
    });
  });

  test("should render edit a review button", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: BOOK_ID_WITH_REVIEWS });

    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const editAReviewButton = await screen.findAllByTestId(
      "edit-a-review-button"
    );

    await act(async () => {
      expect(editAReviewButton).toBeTruthy();
    });
  });

  test("should make api call when review deleted", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: BOOK_ID_WITH_REVIEWS });

    const mockDeleteBookReview = jest.spyOn(bookService, "deleteBookReview");

    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(screen.queryByTestId("delete-a-review-button")).toBeTruthy()
    );

    const deleteAReviewButton = screen.getByTestId("delete-a-review-button");
    deleteAReviewButton?.click();

    const deleteButton = await screen.findByTestId("delete-button");
    deleteButton.click();

    expect(mockDeleteBookReview).toBeCalledWith(
      books[BOOK_ID_WITH_REVIEWS].id,
      "test@test.com"
    );
  });

  test("should make api call when review edited", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: BOOK_ID_WITH_REVIEWS });

    const mockEditBookReview = jest.spyOn(bookService, "putBookReview");

    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(screen.queryByTestId("edit-a-review-button")).toBeTruthy()
    );

    const editAReviewButton = screen.getByTestId("edit-a-review-button");
    editAReviewButton?.click();

    const editButton = await screen.findByTestId("submit-review-button");
    editButton.click();

    const usersReview = books[BOOK_ID_WITH_REVIEWS].reviews?.at(0);

    expect(mockEditBookReview).toBeCalledWith(
      books[BOOK_ID_WITH_REVIEWS].id,
      {
        comment: usersReview?.comment,
        rating: usersReview?.rating,
        recommendation: usersReview?.recommendation,
      },
      "test@test.com"
    );
  });

  test("should show existing review form fields", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: BOOK_ID_WITH_REVIEWS });

    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(screen.queryByTestId("edit-a-review-button")).toBeTruthy()
    );

    const editAReviewButton = screen.getByTestId("edit-a-review-button");
    editAReviewButton?.click();

    const usersReview = books[BOOK_ID_WITH_REVIEWS].reviews?.at(0);

    const recommendationCheckbox = await screen.findAllByTestId(
      "book-recommendation-checkbox"
    );
    const juniorCheckbox = recommendationCheckbox.at(2);
    const mediorCheckbox = recommendationCheckbox.at(3);
    expect(screen.findByText(usersReview?.comment!)).toBeTruthy();
    expect(screen.findByText(usersReview?.rating!)).toBeTruthy();
    expect(juniorCheckbox).toHaveClass("Mui-checked");
    expect(mediorCheckbox).toHaveClass("Mui-checked");
  });
});
