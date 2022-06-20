import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as bookService from "../../services/BookService";
import App from "../../App";

describe("Test navbar", () => {
  test("should render search component when the app is rendered", async () => {
    render(<App />);

    const searchComponent = await screen.findByTestId(`search-autocomplete`);

    await act(async () => {
      expect(searchComponent).toBeTruthy();
    });
  });

  test("should render placeholder text in the search bar when the app is loaded", async () => {
    render(<App />);

    const searchComponent = await screen.findAllByPlaceholderText(
      `Search for title or author`
    );

    await act(async () => {
      expect(searchComponent).toBeTruthy();
    });
  });

  test("should render book suggestions in the dropdown when text is typed", async () => {
    render(<App />);

    const searchTextArea = await screen.findByTestId("search-autocomplete");

    userEvent.type(searchTextArea, "Dum");

    waitFor(() => {
      expect(screen.findByText("Title2")).toBeTruthy();
    });
  });

  test("shouldn't render book suggestions in the dropdown when text with less than 3 characters is typed", async () => {
    render(<App />);

    const searchTextArea = await screen.findByTestId("search-autocomplete");

    userEvent.type(searchTextArea, "D");

    waitFor(() => {
      expect(screen.queryByText("Title2")).toBeFalsy();
    });
  });

  test("should make an api call when text is typed", async () => {
    render(<App />);

    const searchTextArea = await screen.findByTestId("search-autocomplete");

    const mockFetchSuggestedBooks = jest.spyOn(
      bookService,
      "fetchSuggestedBooks"
    );

    userEvent.type(searchTextArea, "Dum");

    await waitFor(() => expect(mockFetchSuggestedBooks).toBeCalledWith("Dum"));
  });

  test("should make an api call when text is typed and enter is pressed", async () => {
    render(<App />);

    const searchTextArea = await screen.findByTestId("search-autocomplete");

    const mockFetchBooks = jest.spyOn(bookService, "fetchBooks");

    userEvent.type(searchTextArea, "Dum{enter}");

    await waitFor(() =>
      expect(mockFetchBooks).toBeCalledWith({
        page: 0,
        recommended: undefined,
        searchText: "Dum",
        topics: [],
      })
    );
  });
});
