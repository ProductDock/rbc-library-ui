import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app and check for text", () => {
  render(<App />);
  const linkElement = screen.getByText("ProductDock");
  expect(linkElement).toBeInTheDocument();
});

test("renders app and check for text", () => {
  render(<App />);
  const linkElement = screen.getByText("Library");
  expect(linkElement).toBeInTheDocument();
});
