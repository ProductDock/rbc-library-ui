import { act, render, screen } from "@testing-library/react";
import App from "../../App";
import * as AuthContext from "./AuthContext";

describe("Test authentication context", () => {
  test("should display home page with books if user is logged in", async () => {
    render(<App />);

    const allBooks = await screen.findByText("Catalog (25)");

    await act(async () => {
      expect(allBooks).toBeInTheDocument();
    });
  });

  test("should not display the home page with books if the user is not logged in", async () => {
    jest.spyOn(AuthContext, "useAuthContext").mockImplementation(() => ({
      isLoggedIn: false,
      loaded: true,
      userProfile: null,
    }));

    render(<App />);

    const allBooks = screen.queryByText("Catalog (25)");

    act(() => {
      expect(allBooks).not.toBeInTheDocument();
    });
  });
});
