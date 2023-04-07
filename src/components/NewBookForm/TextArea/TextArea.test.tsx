import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextArea from ".";

describe("Test text area", () => {
  test("should reduce number of characters to max length", async () => {
    const setTextMock = jest.fn();
    render(<TextArea dataTestId="new-book-title" maxLength={10} text="" setText={setTextMock} minRows={1} placeholder="Enter book title" />);

    const textarea = await screen.findByTestId("new-book-title");
    userEvent.type(textarea, "more then 10 characters");

    expect(setTextMock).toBeCalledWith("more then ");
    expect(setTextMock).not.toBeCalledWith("more then 1");
  });
});
