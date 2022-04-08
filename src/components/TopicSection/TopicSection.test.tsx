import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import * as bookService from "../../services/BookService";

describe("Test topic buttons", () => {
  test("should render topic buttons", async () => {
    render(<App />);
    const topics = [
      "SOFTWARE DEVELOPMENT",
      "PRODUCT MANAGEMENT",
      "MARKETING",
      "DESIGN",
      "PSYCHOLOGY",
    ];
    const topicText = await screen.findByText("Find your favorites");

    await act(async () => {
      expect(topicText).toBeTruthy();

      topics.forEach((topic) => {
        const topicButton = screen.getByText(topic);
        expect(topicButton).toBeTruthy();
      });
    });
  });

  test("selected button should have correct styling", async () => {
    render(<App />);

    const topicButton = await screen.findByTestId("MARKETING");

    expect(topicButton).toBeTruthy();

    topicButton.click();
    await act(async () => {
      expect(topicButton).toHaveClass("selected-button");
    });

    topicButton.click();
    await act(async () => {
      expect(topicButton).toHaveClass("topic-button");
    });
  });

  test("should make api call when selected", async () => {
    const mockFetchBooks = jest.spyOn(bookService, "fetchBooks");

    render(<App />);

    const topicButton = await screen.findByTestId("MARKETING");
    userEvent.click(topicButton);

    expect(mockFetchBooks).toHaveBeenLastCalledWith({
      page: 0,
      topics: ["MARKETING"],
    });
  });
});
