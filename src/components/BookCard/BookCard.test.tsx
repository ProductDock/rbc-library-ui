import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BookCard from ".";

test("renders test page and finds title", async () => {
  render(
    <Router>
      <BookCard
        title="Book2"
        author="John Doe"
        cover="Cover"
        records={[{ email: "example@productdock.com", status: "AVAILABLE" }]}
        rating={3.5}
        ratingsCount={3}
      />
    </Router>
  );
  const bookTitle = screen.getByText("Book2");
  expect(bookTitle).toBeInTheDocument();

  const bookAuthor = screen.getByText("John Doe");
  expect(bookAuthor).toBeInTheDocument();

  const bookStatus = screen.getByText("Available");
  expect(bookStatus).toBeInTheDocument();

  const bookRating = screen.getByText("3.5");
  expect(bookRating).toBeInTheDocument();

  const bookRatingCount = screen.getByText("(3 ratings)");
  expect(bookRatingCount).toBeInTheDocument();
});
