import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders test page and finds title", () => {
  render(<App />);
  const bookTitle = screen.getByText("Book2");
  expect(bookTitle).toBeInTheDocument();

  const bookAuthor = screen.getByText("John Doe");
  expect(bookAuthor).toBeInTheDocument();
});
