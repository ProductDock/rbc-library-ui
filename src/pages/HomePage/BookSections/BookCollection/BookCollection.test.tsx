import { act, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import App from "../../../../App";
import { server } from "../../../../msw/server";
import { BooksFixture } from "../../../../msw/fixtures";
import * as BooksContext from "../../../../store/books/catalog/BooksContext";

export const BOOKS_URL = `*/search`;

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Test find all book", () => {
  test("should show message when no books in catalog are present", async () => {
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

    const noBooksInCatalogMessageHeader = await screen.findByText(
      "No books found"
    );
    const noBooksInCatalogMessage = screen.getAllByText(
      "Try to adjust your active filters or search text to get results"
    );

    expect(noBooksInCatalogMessageHeader).toBeTruthy();
    expect(noBooksInCatalogMessage).toBeTruthy();
  });

  test("should render book collection when book service returns list of books", async () => {
    render(<App />);

    const allBooks = await screen.findAllByTestId("book-box");

    await act(async () => {
      expect(allBooks).toBeTruthy();
    });
  });
});

test("should render first page with 18 books", async () => {
  render(<App />);

  const books = await screen.findAllByTestId("book-box");

  expect(books).toHaveLength(18);
});

test("should render load more button", async () => {
  render(<App />);

  const button = await screen.findByTestId("pagination-button");

  expect(button).toBeInTheDocument();
});

test("should not render load more button when number of showed books is equal total number of books", async () => {
  const { books } = BooksFixture;
  server.use(
    rest.get(BOOKS_URL, (req, res, ctx) =>
      res(
        ctx.status(200, "Mocked status"),
        ctx.json({ books: books.slice(0, 2), count: 2 })
      )
    )
  );

  render(<App />);

  await waitFor(() =>
    expect(screen.queryByTestId("pagination-button")).toBeFalsy()
  );
});
