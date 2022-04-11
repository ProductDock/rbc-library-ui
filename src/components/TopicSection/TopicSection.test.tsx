import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "../../App";
import * as bookService from "../../services/BookService";

afterEach(() => {
  jest.restoreAllMocks();
});

const MARKETING = "MARKETING";
const SOFTWARE_DEVELOPMENT = "SOFTWARE DEVELOPMENT";
const PRODUCT_MANAGEMENT = "PRODUCT MANAGEMENT";
const DESIGN = "DESIGN";
const PSYCHOLOGY = "PSYCHOLOGY";

const DEFAULT_TOPIC_BUTTON_CLASS = "topic-button";
const SELECTED_TOPIC_BUTTON_CLASS = "selected-button";
const CLEAR_ALL_TOPIC_BUTTON_CLASS = "clear-all-button";

const filterButtonsToBeEnabled = async () => {
  await waitFor(() => {
    expect(screen.queryByTestId(MARKETING)).not.toBeDisabled();
  });
};

describe("Test topic buttons", () => {
  test("should render topic buttons", async () => {
    render(<App />);
    const topics = [
      SOFTWARE_DEVELOPMENT,
      PRODUCT_MANAGEMENT,
      MARKETING,
      DESIGN,
      PSYCHOLOGY,
    ];

    await act(async () => {
      topics.forEach((topic) => {
        const topicButton = screen.getByText(topic);
        expect(topicButton).toBeTruthy();
      });
    });
  });

  test("selected button should have correct styling", async () => {
    render(<App />);

    const topicButton = await screen.findByTestId(MARKETING);

    expect(topicButton).toBeTruthy();
    await filterButtonsToBeEnabled();

    topicButton.click();
    await act(async () => {
      expect(topicButton).toHaveClass(SELECTED_TOPIC_BUTTON_CLASS);
    });
    await filterButtonsToBeEnabled();

    topicButton.click();
    await act(async () => {
      expect(topicButton).toHaveClass(DEFAULT_TOPIC_BUTTON_CLASS);
    });
  });

  test("should make api call when selected", async () => {
    const mockFetchBooks = jest.spyOn(bookService, "fetchBooks");

    render(<App />);

    await filterButtonsToBeEnabled();
    const topicButton = await screen.findByTestId(MARKETING);
    fireEvent.click(topicButton);

    expect(mockFetchBooks).toHaveBeenLastCalledWith({
      page: 0,
      topics: [MARKETING],
    });
  });
});

describe("Test clear all button", () => {
  test("should disable filters ", async () => {
    render(<App />);

    expect(screen.queryByTestId(CLEAR_ALL_TOPIC_BUTTON_CLASS)).toBeFalsy();

    await filterButtonsToBeEnabled();

    const marketingTopicButton = await screen.findByTestId(MARKETING);
    marketingTopicButton.click();
    const designTopicButton = screen.getByTestId(DESIGN);
    designTopicButton.click();

    const clearAllTopicButton = screen.getByTestId(
      CLEAR_ALL_TOPIC_BUTTON_CLASS
    );
    expect(clearAllTopicButton).toBeTruthy();

    clearAllTopicButton.click();

    await act(async () => {
      expect(marketingTopicButton).toHaveClass(DEFAULT_TOPIC_BUTTON_CLASS);
      expect(designTopicButton).toHaveClass(DEFAULT_TOPIC_BUTTON_CLASS);
    });
  });
});
