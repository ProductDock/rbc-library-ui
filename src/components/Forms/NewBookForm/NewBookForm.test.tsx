import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewBookForm from ".";

describe("Test new book form", () => {
  test("should show new book form fields", async () => {
    render(<NewBookForm />);

    const formTitle = await screen.findByTestId("new-book-form-title");
    const title = screen.getByTestId("new-book-title");
    const author = screen.getByTestId("new-book-author");
    const cover = screen.getByTestId("new-book-cover");
    const description = screen.getByTestId("new-book-description");
    const copies = screen.getByTestId("new-book-copies");
    const selectTopics = screen.getByTestId("new-book-select-topics");
    const submitNewBookButton = screen.getByTestId("submit-new-book-button");
    const cancelNewBookButton = screen.getByTestId("cancel-new-book-button");

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
    render(<NewBookForm />);

    const submitNewBookButton = await screen.findByTestId(
      "submit-new-book-button"
    );
    expect(submitNewBookButton).toBeDisabled();
  });

  test("should enable submit new book button when mandatory fields provided", async () => {
    render(<NewBookForm />);

    const title = await screen.getByTestId("new-book-title");
    const author = screen.getByTestId("new-book-author");
    const cover = screen.getByTestId("new-book-cover");
    const description = screen.getByTestId("new-book-description");

    userEvent.type(title, "Book title");
    userEvent.type(author, "Book author");
    userEvent.type(cover, "Book cover");
    userEvent.type(description, "Book description");

    const submitNewBookButton = await screen.findByTestId(
        "submit-new-book-button"
    );
    expect(submitNewBookButton).toBeEnabled();
  });
});
