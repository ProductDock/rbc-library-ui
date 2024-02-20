import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AdminBooksPage from ".";
import userEvent from "@testing-library/user-event";

describe("Test admin books page", () => {
  test("should render new book button", async () => {
    render(
      <MemoryRouter>
        <AdminBooksPage />
      </MemoryRouter>
    );

    const newBookButton = await screen.findByTestId("new-book-button");

    expect(newBookButton).toBeInTheDocument();
  });
});
