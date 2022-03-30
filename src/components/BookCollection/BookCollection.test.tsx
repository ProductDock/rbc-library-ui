import { act, render, screen } from "@testing-library/react";
import App from "../../App";

describe("Test find all book", () => {
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
