import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AdminBooksPage from "..";
import userEvent from "@testing-library/user-event";
import { server } from "../../../msw/server";
import { rest } from "msw";
import { warningMessages } from "../../../constants/warningMessages";

const DELETE_BOOK_URL = `*/catalog/books/*`;

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

  test("should render buttons in rows", async () => {
    render(
      <MemoryRouter>
        <AdminBooksPage />
      </MemoryRouter>
    );

    const deleteButton = await screen.findAllByTestId("delete-btn");

    expect(deleteButton.length).toBeGreaterThan(0);
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

  test("should open confirmation modal on delete", async () => {
    render(
      <MemoryRouter>
        <AdminBooksPage />
      </MemoryRouter>
    );

    const deleteButton = (await screen.findAllByTestId("delete-btn"))[0];

    userEvent.click(deleteButton);

    const modal = await screen.findByTestId("confirmation-modal");

    expect(modal).toBeVisible();
  });

  test("should notify if deleting unavailable book", async () => {
    server.use(
      rest.delete(DELETE_BOOK_URL, (req, res, ctx) =>
        res(ctx.status(400, "Mocked error status"))
      )
    );

    render(
      <MemoryRouter>
        <AdminBooksPage />
      </MemoryRouter>
    );

    const deleteButton = (await screen.findAllByTestId("delete-btn"))[0];

    userEvent.click(deleteButton);

    const modal = await screen.findByTestId("confirmation-modal");

    const confirmDeleteButton = screen.getByText("Delete");

    userEvent.click(confirmDeleteButton);

    const notification = await screen.findByText(
      warningMessages.DELETE_BOOK_TITLE
    );

    expect(notification).toBeInTheDocument();
  });

  test("should close modal if deleting book is successful", async () => {
    server.use(
      rest.delete(DELETE_BOOK_URL, (req, res, ctx) =>
        res(ctx.status(200, "Mocked status"))
      )
    );

    render(
      <MemoryRouter>
        <AdminBooksPage />
      </MemoryRouter>
    );

    const deleteButton = (await screen.findAllByTestId("delete-btn"))[0];

    userEvent.click(deleteButton);

    const modal = await screen.findByTestId("confirmation-modal");

    const confirmDeleteButton = screen.getByText("Delete");

    userEvent.click(confirmDeleteButton);

    await waitForElementToBeRemoved(() =>
      screen.getByTestId("confirmation-modal")
    );

    expect(modal).not.toBeInTheDocument();
  });
});
