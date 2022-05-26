import { render, screen } from "@testing-library/react";
import App from "../../../../App";
import * as BooksContext from "../../../../store/books/catalog/BooksContext";

describe("Test recommended books collection", () => {
  test("should show message when no recommended books are present", async () => {
    jest.spyOn(BooksContext, "useBooksContext").mockImplementation(() => ({
      recommendedBooks: [],
      recommendedBooksCount: 0,
      books: [],
      allBooksCount: 0,
      loading: false,
      error: null,
      page: 0,
      topics: [],
    }));

    render(<App />);

    const noRecommendedBooksMessageHeader = await screen.findByText(
      "There are no recommended books with the applied filters"
    );
    const noRecommendedBooksMessage = screen.getByText(
      "Try to adjust your active filters to get results"
    );

    expect(noRecommendedBooksMessageHeader).toBeTruthy();
    expect(noRecommendedBooksMessage).toBeTruthy();
  });
});
