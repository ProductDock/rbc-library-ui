/* eslint-disable react/jsx-no-undef */
import { act, render, screen } from "@testing-library/react";
import Router, { BrowserRouter } from "react-router-dom";
import BookDetailsPage from "../../../BookDetailsPage";

const BOOK_ID_WITH_REVIEWS = "1";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

beforeEach(() => {
  jest
    .spyOn(Router, "useParams")
    .mockReturnValue({ bookId: BOOK_ID_WITH_REVIEWS });
});

describe("Test if reviews are loaded properly", () => {
  test("should render book details with 3 reviews", async () => {
    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const reviews = await screen.findAllByTestId("review-card");

    expect(reviews).toHaveLength(3);
  });

  test("should render your review", async () => {
    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const yourReview = await screen.findByText("Your review");

    expect(yourReview).toBeTruthy();
  });

  test("should render your review first in the list", async () => {
    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const reviews = await screen.findAllByTestId("review-card");
    const yourReview = reviews[0];

    expect(yourReview).toHaveClass("your-review-card-div");
  });

  test("should render book details with review rating", async () => {
    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const rating = await screen.findByText("4");

    await act(async () => {
      expect(rating).toBeTruthy();
    });
  });

  test("should render book details with name of the reviewer", async () => {
    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const userName = await screen.findByText("Dummy user");

    await act(async () => {
      expect(userName).toBeTruthy();
    });
  });

  test("should render book details with review recommendations", async () => {
    render(
      <BrowserRouter>
        <BookDetailsPage />
      </BrowserRouter>
    );

    const recommendations = await screen.findByText(
      "Recommended to - Medior, Senior"
    );

    await act(async () => {
      expect(recommendations).toBeTruthy();
    });
  });
});
