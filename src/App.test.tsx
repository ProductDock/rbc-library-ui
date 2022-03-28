import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "./App";

test("renders app and check for text", async () => {
  render(<App />);
  const navbarCompany = await screen.findByText("ProductDock");

  await act(async () => {
    expect(navbarCompany).toBeInTheDocument();
  });

  const navbarTitle = screen.getByText("Library");
  expect(navbarTitle).toBeInTheDocument();
});
