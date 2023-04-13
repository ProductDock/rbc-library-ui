import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import NewBookForm from ".";
import { routes } from "../../constants/routes";
import { TopicsFixture } from "../../msw/fixtures";
import * as NewBookContext from "../../store/books/new/NewBookContext";

beforeEach(() => {
  const topics = TopicsFixture;
  jest.spyOn(NewBookContext, "useNewBookContext").mockImplementation(() => ({
    showedNewBookForm: true,
    existingTopics: topics,
  }));
});

describe("Test new book form", () => {
  test("should show new book form fields", async () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: routes.HOME,
          },
        ]}
      >
        <NewBookForm />
      </MemoryRouter>
    );

    const formTitle = await screen.findByTestId("sidebar-modal-title");
    const title = screen.getByTestId("new-book-title");
    const author = screen.getByTestId("new-book-author");
    const cover = screen.getByTestId("new-book-cover");
    const description = screen.getByTestId("new-book-description");
    const copies = screen.getByTestId("new-book-copies");
    const selectTopics = screen.getByTestId("new-book-select-topics");
    const submitNewBookButton = screen.getByTestId(
      "sidebar-modal-submit-button"
    );
    const cancelNewBookButton = screen.getByTestId(
      "sidebar-modal-cancel-button"
    );

    expect(formTitle).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(cover).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(copies).toBeInTheDocument();
    expect(selectTopics).toBeInTheDocument();
    expect(submitNewBookButton).toBeInTheDocument();
    expect(cancelNewBookButton).toBeInTheDocument();
  });

  test("should disable submit new book button when mandatory fields not provided", async () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: routes.HOME,
          },
        ]}
      >
        <NewBookForm />
      </MemoryRouter>
    );

    const submitNewBookButton = await screen.findByTestId(
      "sidebar-modal-submit-button"
    );
    expect(submitNewBookButton).toBeDisabled();
  });

  test("should enable submit new book button when mandatory fields provided", async () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: routes.HOME,
          },
        ]}
      >
        <NewBookForm />
      </MemoryRouter>
    );

    const title = await screen.getByTestId("new-book-title");
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
    expect(submitNewBookButton).toBeEnabled();
  });
});
