import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AdminBooksPage from ".";
import userEvent from "@testing-library/user-event";
import NewBookContextProvider from "../../store/books/new/NewBookContext";
import SuccessScreenContextProvider from "../../store/books/success/SuccessScreenContext";
import Notification from "../../components/Notification";
import { rest } from "msw";
import { server } from "../../msw/server";

export const BOOK_URL = `*/catalog/books`;

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

  test("should add new book", async () => {
    render(
      <MemoryRouter>
        <NewBookContextProvider>
          <SuccessScreenContextProvider>
            <AdminBooksPage />
            <Notification />
          </SuccessScreenContextProvider>
        </NewBookContextProvider>
      </MemoryRouter>
    );

    const newBookButton = await screen.findByTestId("new-book-button");

    userEvent.click(newBookButton);

    const title = await screen.findByTestId("new-book-title");
    const author = screen.getByTestId("new-book-author");
    const cover = screen.getByTestId("new-book-cover");
    const description = screen.getByTestId("new-book-description");

    userEvent.type(title, "Book title");
    userEvent.type(author, "Book author");
    userEvent.type(cover, "Book cover");
    userEvent.type(description, "Book description");

    const submitNewBookButton = await screen.findByTestId(
      "sidebar-modal-submit-button"
    );

    userEvent.click(submitNewBookButton);

    const snackbar = await screen.findByTestId("snackbar");

    expect(snackbar).toBeInTheDocument();
  });

  test("should show error message if book is not added", async () => {
    server.use(
      rest.post(BOOK_URL, (req, res, ctx) =>
        res(ctx.status(400, "Mocked error status"))
      )
    );

    render(
      <MemoryRouter>
        <NewBookContextProvider>
          <SuccessScreenContextProvider>
            <AdminBooksPage />
            <Notification />
          </SuccessScreenContextProvider>
        </NewBookContextProvider>
      </MemoryRouter>
    );

    const newBookButton = await screen.findByTestId("new-book-button");

    userEvent.click(newBookButton);

    const title = await screen.findByTestId("new-book-title");
    const author = screen.getByTestId("new-book-author");
    const cover = screen.getByTestId("new-book-cover");
    const description = screen.getByTestId("new-book-description");

    userEvent.type(title, "Book title");
    userEvent.type(author, "Book author");
    userEvent.type(cover, "Book cover");
    userEvent.type(description, "Book description");

    const submitNewBookButton = await screen.findByTestId(
      "sidebar-modal-submit-button"
    );

    userEvent.click(submitNewBookButton);

    const errorMessage = await screen.findByText("Warning!");

    expect(errorMessage).toBeInTheDocument();
  });
});
