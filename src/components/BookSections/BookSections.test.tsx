import { act, render, screen } from "@testing-library/react";
import App from "../../App";

describe("Test book number in section", () => {
  test("should show number of books returned from server when number is provided", async () => {
    render(<App />);

    const sectionTitle = await screen.findByText(`Catalog (15)`);

    await act(async () => {
      expect(sectionTitle).toBeTruthy();
    });
  });
});
