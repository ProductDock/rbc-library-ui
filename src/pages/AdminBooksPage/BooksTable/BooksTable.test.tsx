import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { routes } from "../../../constants/routes";
import AdminBooksPage from "..";

describe("test books table", () => {
  test("should render books table", async () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: routes.ADMIN_BOOKS,
          },
        ]}
      >
        <AdminBooksPage />
      </MemoryRouter>
    );

    const booksTable = await screen.findByTestId("books-table");

    expect(booksTable).toBeInTheDocument();
  });
});
