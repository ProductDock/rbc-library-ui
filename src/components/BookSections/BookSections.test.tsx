import { render, screen, waitFor } from "@testing-library/react";
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

jest.mock("../../services/BookService", () => {
  return {
    fetchAllBooks: () => Promise.resolve({ data: [] }),
    countAllBooks: () => Promise.resolve({ data: 15 }),
  };
});

describe("Test book number in section", () => {
  test("should show number of books returned from server when number is provided", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(`Catalog (15)`)).toBeTruthy();
    });
  });

  test("should show 0 when there is no books", async () => {
    jest.mock("../../services/BookService", () => {
      return {
        fetchAllBooks: () => Promise.resolve({ data: [] }),
        countAllBooks: () => Promise.resolve({ data: 0 }),
      };
    });

    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(`Catalog (0)`)).toBeTruthy();
    });
  });
});
