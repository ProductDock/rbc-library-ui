import { render, screen } from "@testing-library/react";
import App from "../../../App";

describe("Test recommended book section", () => {
  test("should show number of books returned from server when number is provided", async () => {
    render(<App />);

    const sectionTitle = await screen.findByText(
      `ProductDock recommendations (25)`
    );

    expect(sectionTitle).toBeTruthy();
  });

  test("should render recommendation book carousel", async () => {
    render(<App />);

    const carousel = await screen.findByTestId("recommendation-carousel");

    expect(carousel).toBeTruthy();
  });
});
