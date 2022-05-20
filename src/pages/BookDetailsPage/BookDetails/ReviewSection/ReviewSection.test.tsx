import { render, screen, act } from "@testing-library/react";
import Router from "react-router-dom";
import BookDetailsPage from "../../BookDetailsPage";

const BOOK_ID_WITH_REVIEWS = "1";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("Test review section", () => {
  test("should find Reviews section title when api returns book", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: BOOK_ID_WITH_REVIEWS });

    render(<BookDetailsPage />);

    const reviewsSectionTitle = await screen.findByText(`Reviews (2)`);

    await act(async () => {
      expect(reviewsSectionTitle).toBeTruthy();
    });
  });

  test("should render write a review button", async () => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ bookId: BOOK_ID_WITH_REVIEWS });

    render(<BookDetailsPage />);

    const writeAReviewButton = await screen.findByText(`Write a review`);

    await act(async () => {
      expect(writeAReviewButton).toBeTruthy();
    });
  });
});
