import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextArea from ".";

describe("Test text area", () => {
  test("should reduce number of characters to max length", async () => {
    const setTextMock = jest.fn();
    render(<TextArea maxLentgth={10} text="" setText={setTextMock} />);

    const textarea = await screen.findByTestId("review-comment-textarea");
    userEvent.type(textarea, "more then 10 characters");

    expect(setTextMock).toBeCalledWith("more then ");
    expect(setTextMock).not.toBeCalledWith("more then 1");
  });

  test("should show text length and max length", async () => {
    const setTextMock = jest.fn();
    render(<TextArea maxLentgth={10} text="test" setText={setTextMock} />);

    const textLength = await screen.findByText("4");
    const maxLength = screen.getByText("/10");

    expect(textLength).toBeInTheDocument();
    expect(maxLength).toBeInTheDocument();
  });
});
