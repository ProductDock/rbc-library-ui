import { render, screen, act } from "@testing-library/react";
import BookDetailsPage from "../../pages/BookDetailsPage";

describe("Test review count and title", () => {
  test("should find Reviews section title when api returns book", async () => {
    render(<BookDetailsPage />);

    const reviewsSectionTitle = await screen.findByText(`Reviews (2)`);

    await act(async () => {
      expect(reviewsSectionTitle).toBeTruthy();
    });
  });
});
