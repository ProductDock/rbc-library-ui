import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";

describe("Test book number in section", () => {
  test("should show number of books returned from server when number is provided", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(`Catalog (15)`)).toBeTruthy();
    });
  });
});
