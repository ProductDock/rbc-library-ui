import React from "react";
import { render, screen } from "@testing-library/react";
import TestPage from "../../pages/TestPage";

test("renders test page and finds title", () => {
  render(<TestPage />);
  const linkElement = screen.getByText("Book2");
  expect(linkElement).toBeInTheDocument();
});

test("renders test page and finds author", () => {
  render(<TestPage />);
  const linkElement = screen.getByText("John Doe");
  expect(linkElement).toBeInTheDocument();
});
