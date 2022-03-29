import React from "react";
import { render, screen } from "@testing-library/react";
import SectionTitle from ".";

test("should render section title with text correclty", () => {
  render(<SectionTitle title="All books" numberOfBooks={1} />);
  const linkElement = screen.getByText("All books (1)");
  expect(linkElement).toBeInTheDocument();
});
