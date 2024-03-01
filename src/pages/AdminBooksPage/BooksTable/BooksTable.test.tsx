import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { routes } from "../../../constants/routes";
import AdminBooksPage from "..";

describe("test books table", () => {
  test("should render books table", async () => {
    render(
      <MemoryRouter>
        <AdminBooksPage />
      </MemoryRouter>
    );

    const booksTable = await screen.findByTestId("books-table");

    expect(booksTable).toBeInTheDocument();
  });
  /*
  test("should render buttons in rows", async () => {
    render(
      <MemoryRouter>
        <AdminBooksPage />
      </MemoryRouter>
    );

    const deleteButton = await screen.findAllByTestId("delete-btn");
    const editButton = await screen.findAllByTestId("edit-btn");

    expect(deleteButton.length).toBeGreaterThan(0);
    expect(editButton.length).toBeGreaterThan(0);
  });

  test("should render 18 rows per page", async () => {
    render(
      <MemoryRouter>
        <AdminBooksPage />
      </MemoryRouter>
    );

    const deleteButton = await screen.findAllByTestId("delete-btn");

    expect(deleteButton.length).toEqual(18);
  });
  */
});
