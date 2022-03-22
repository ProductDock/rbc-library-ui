import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app and check for text", () => {
  render(<App />);
  const navbarCompany = screen.getByText("ProductDock");
  expect(navbarCompany).toBeInTheDocument();

  const navbarTitle = screen.getByText("Library");
  expect(navbarTitle).toBeInTheDocument();
});
