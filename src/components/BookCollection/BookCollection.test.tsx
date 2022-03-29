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
