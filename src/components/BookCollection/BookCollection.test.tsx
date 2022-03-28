import { act, render, screen } from "@testing-library/react";
import App from "../../App";
import * as AuthContext from "../../store/auth/AuthContext";

beforeEach(() => {
  jest.spyOn(AuthContext, "useAuthContext").mockImplementation(() => ({
    isLoggedIn: true,
    loaded: true,
    userProfile: {
      name: "test",
      imageUrl: "http://test.com",
      email: "test@test.com",
    },
  }));
});

describe("Test find all book", () => {
  test("should render book collection when book service return list of books", async () => {
    render(<App />);

    const allBooks = await screen.findAllByTestId("book-box");

    await act(async () => {
      expect(allBooks).toBeTruthy();
    });
  });
});
