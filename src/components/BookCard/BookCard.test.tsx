import React from "react";
import { render, screen } from "@testing-library/react";
import BookCard from ".";

test("renders test page and finds title", async () => {
  render(
    <BookCard
      title="Book2"
      author="John Doe"
      cover="Cover"
      records={[{ email: "ok", status: "ok" }]}
    />
  );
  const bookTitle = screen.getByText("Book2");
  expect(bookTitle).toBeInTheDocument();

  const bookAuthor = screen.getByText("John Doe");
  expect(bookAuthor).toBeInTheDocument();
});
