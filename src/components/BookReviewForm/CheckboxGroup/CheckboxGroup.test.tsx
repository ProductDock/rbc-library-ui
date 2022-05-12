import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookReviewForm from "..";

describe("Test checkbox group", () => {
  test("should select all checkboxes when select all checked", async () => {
    render(<BookReviewForm onSkip={jest.fn()} />);

    const recommendationCheckbox = await screen.findAllByTestId(
      "book-recommendation-checkbox"
    );

    const selectAllCheckbox = recommendationCheckbox.at(0)!!;
    userEvent.click(selectAllCheckbox);

    recommendationCheckbox.forEach((checkbox) =>
      expect(checkbox).toHaveClass("Mui-checked")
    );
  });

  test("should check select all checkbox when all checked", async () => {
    render(<BookReviewForm onSkip={jest.fn()} />);

    const recommendationCheckbox = await screen.findAllByTestId(
      "book-recommendation-checkbox"
    );
    const selectAllCheckbox = recommendationCheckbox.at(0)!!;
    expect(selectAllCheckbox).not.toHaveClass("Mui-checked");

    userEvent.click(recommendationCheckbox.at(1)!!);
    userEvent.click(recommendationCheckbox.at(2)!!);
    userEvent.click(recommendationCheckbox.at(3)!!);

    expect(selectAllCheckbox).toHaveClass("Mui-checked");
  });

  test("should uncheck select all checkbox when one checkbox unchecked", async () => {
    render(<BookReviewForm onSkip={jest.fn()} />);

    const recommendationCheckbox = await screen.findAllByTestId(
      "book-recommendation-checkbox"
    );
    const selectAllCheckbox = recommendationCheckbox.at(0)!!;
    userEvent.click(selectAllCheckbox);
    expect(selectAllCheckbox).toHaveClass("Mui-checked");

    userEvent.click(recommendationCheckbox.at(1)!!);

    expect(selectAllCheckbox).not.toHaveClass("Mui-checked");
  });
});
