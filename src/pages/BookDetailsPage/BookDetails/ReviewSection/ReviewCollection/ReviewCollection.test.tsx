import { act, render, screen } from "@testing-library/react";
import Router from "react-router-dom";
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
  test("should render book details with 2 reviews", async () => {
    render(<BookDetailsPage />);

    const reviews = await screen.findAllByTestId("review-card");

    expect(reviews).toHaveLength(2);
  });

  test("should render book details with review rating", async () => {
    render(<BookDetailsPage />);

    const rating = await screen.findByText("4");

    await act(async () => {
      expect(rating).toBeTruthy();
    });
  });

  test("should render book details with name of the reviewer", async () => {
    render(<BookDetailsPage />);

    const userName = await screen.findByText("Dummy user");

    await act(async () => {
      expect(userName).toBeTruthy();
    });
  });

  test("should render book details with review recommendations", async () => {
    render(<BookDetailsPage />);

    const recommendations = await screen.findByText(
      "Recommended to - Medior, Senior"
    );

    await act(async () => {
      expect(recommendations).toBeTruthy();
    });
  });
});
