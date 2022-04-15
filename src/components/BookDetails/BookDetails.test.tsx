import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import BookDetails from ".";

test("should render book details when book service returns a book", async () => {
  render(<BookDetails />);

  const book = await screen.findAllByTestId("book-details");

  await act(async () => {
    expect(book).toBeTruthy();
  });
});
