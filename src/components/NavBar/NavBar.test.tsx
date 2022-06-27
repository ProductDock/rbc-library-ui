import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as bookService from "../../services/BookService";
import App from "../../App";

const SCREEN_WIDTH = 900;

const initTest = (width: any) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: width >= 800,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  });
};

beforeEach(() => {
  initTest(SCREEN_WIDTH);
});

describe("Test navbar", () => {
  test("should render search component when the app is rendered", async () => {
    render(<App />);

    const searchComponent = await screen.findByTestId(`search-autocomplete`);

    expect(searchComponent).toBeTruthy();
  });

  test("should render placeholder text in the search bar when the app is loaded", async () => {
    render(<App />);

    const searchComponent = await screen.findAllByPlaceholderText(
      `Search for title or author`
    );

    expect(searchComponent).toBeTruthy();
  });

  test("should render book suggestions in the dropdown when text is typed", async () => {
    render(<App />);

    const searchTextArea = await screen.findByTestId("search-autocomplete");

    userEvent.type(searchTextArea, "T");
    userEvent.type(searchTextArea, "i");
    userEvent.type(searchTextArea, "t");
    userEvent.type(searchTextArea, "l");

    await act(async () => {
      expect(screen.queryAllByText("Title2")).toBeTruthy();
    });
  });

  test("shouldn't render book suggestions in the dropdown when text with less than 3 characters is typed", async () => {
    render(<App />);

    const searchTextArea = await screen.findByTestId("search-autocomplete");

    userEvent.type(searchTextArea, "D");

    await waitFor(() => {
      expect(screen.queryByText("Title2")).toBeFalsy();
    });
  });

  test("should make an api call when text is typed", async () => {
    render(<App />);

    const mockFetchSuggestedBooks = jest.spyOn(
      bookService,
      "fetchSuggestedBooks"
    );
    const searchTextArea = await screen.findByTestId("search-autocomplete");

    userEvent.type(searchTextArea, "D");
    userEvent.type(searchTextArea, "u");
    userEvent.type(searchTextArea, "m");
    userEvent.type(searchTextArea, "m");

    await waitFor(() =>
      expect(mockFetchSuggestedBooks).toBeCalledWith({ search: "Dumm" })
    );
  });

  test("should make an api call when text is typed and enter is pressed", async () => {
    render(<App />);

    const searchTextArea = await screen.findByTestId("search-autocomplete");

    const mockFetchBooks = jest.spyOn(bookService, "fetchBooks");

    userEvent.type(searchTextArea, "Dum{enter}");

    act(async () =>
      expect(mockFetchBooks).toBeCalledWith({
        page: 0,
        recommended: undefined,
        searchText: "Dum",
        topics: [],
      })
    );
  });
});
