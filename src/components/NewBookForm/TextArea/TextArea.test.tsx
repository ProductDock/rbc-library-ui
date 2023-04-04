import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextArea from ".";

describe("Test text area", () => {
  test("should reduce number of characters to max length", async () => {
    const setTextMock = jest.fn();
    render(<TextArea maxLength={10} text="" setText={setTextMock} minRows={1} placeholder="Enter a link to the book cover" />);

    const textarea = await screen.findByTestId("review-comment-textarea");
    userEvent.type(textarea, "more then 10 characters");

    expect(setTextMock).toBeCalledWith("more then ");
    expect(setTextMock).not.toBeCalledWith("more then 1");
  });

  test("should show text length and max length", async () => {
    const setTextMock = jest.fn();
    render(<TextArea maxLength={10} text="test" setText={setTextMock} minRows={1} placeholder="Enter a link to the book cover" />);

    const textLength = await screen.findByText("4");
    const maxLength = screen.getByText("/10");

    expect(textLength).toBeInTheDocument();
    expect(maxLength).toBeInTheDocument();
  });
});
