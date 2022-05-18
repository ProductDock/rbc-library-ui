import { act, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import { routes } from "../../constants/routes";
import HomePage from "../../pages/HomePage";
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

const filterButtonsToBeEnabled = async (topicName: string) =>
  waitFor(() => {
    expect(screen.queryByTestId(topicName)).not.toBeDisabled();
  });

const clickOnTopicButtonWhenEnabled = async (topicName: string) => {
  await filterButtonsToBeEnabled(topicName);
  const topicButton = await screen.findByTestId(topicName);
  expect(topicButton).toBeTruthy();
  topicButton.click();
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

    await clickOnTopicButtonWhenEnabled(MARKETING);
    const topicButton = screen.getByTestId(MARKETING);

    await act(async () => {
      expect(topicButton).toHaveClass(SELECTED_TOPIC_BUTTON_CLASS);
    });

    await clickOnTopicButtonWhenEnabled(MARKETING);

    await act(async () => {
      expect(topicButton).toHaveClass(DEFAULT_TOPIC_BUTTON_CLASS);
    });
  });

  test("should make api call when selected", async () => {
    const mockFetchBooks = jest.spyOn(bookService, "fetchBooks");

    render(<App />);

    await clickOnTopicButtonWhenEnabled(MARKETING);

    expect(mockFetchBooks).toHaveBeenLastCalledWith({
      page: 0,
      topics: [MARKETING],
    });
  });

  test("should select topic buttons when topic filter present in url", async () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: routes.HOME,
            search: `?topics=${MARKETING}&topics=${DESIGN}`,
          },
        ]}
      >
        <HomePage />
      </MemoryRouter>
    );
    const marketingTopicButton = await screen.findByTestId(MARKETING);
    const designTopicButton = screen.getByTestId(DESIGN);

    expect(marketingTopicButton).toHaveClass(SELECTED_TOPIC_BUTTON_CLASS);
    expect(designTopicButton).toHaveClass(SELECTED_TOPIC_BUTTON_CLASS);
  });

  test("should make topics button disabled until results are loaded", async () => {
    render(<App />);
    const topicButton = screen.getByTestId(MARKETING);
    expect(topicButton).toBeDisabled();
  });
});

describe("Test clear all button", () => {
  test("should disable filters ", async () => {
    render(<App />);

    waitFor(() => {
      expect(screen.queryByTestId(CLEAR_ALL_TOPIC_BUTTON_CLASS)).toBeFalsy();
    });

    await clickOnTopicButtonWhenEnabled(MARKETING);
    await clickOnTopicButtonWhenEnabled(DESIGN);

    const clearAllTopicButton = await screen.findByTestId(
      CLEAR_ALL_TOPIC_BUTTON_CLASS
    );
    clearAllTopicButton.click();

    await act(async () => {
      expect(screen.queryByTestId(MARKETING)).toHaveClass(
        DEFAULT_TOPIC_BUTTON_CLASS
      );
      expect(screen.queryByTestId(DESIGN)).toHaveClass(
        DEFAULT_TOPIC_BUTTON_CLASS
      );
    });
  });
});
