import { render, screen } from "@testing-library/react";
import App from "../../App";
import * as AuthContext from "./AuthContext";

jest.spyOn(AuthContext, "useAuthContext").mockImplementation();
jest.mock("../../components/Section/SectionTitle", () => {
  return {
    __esModule: true,
    default: () => {
      return <div>All books (1)</div>;
    },
  };
});

describe("Test authentication context", () => {
  test("should display home page with books if user is logged in", async () => {
    jest.spyOn(AuthContext, "useAuthContext").mockImplementation(() => ({
      isLoggedIn: true,
      loaded: true,
      userProfile: {
        name: "test",
        imageUrl: "http://test.com",
        email: "test@test.com",
      },
    }));

    render(<App />);

    expect(screen.getByText("All books (1)")).toBeInTheDocument();
  });

  test("should not display the home page with books if the user is not logged in", async () => {
    jest.spyOn(AuthContext, "useAuthContext").mockImplementation(() => ({
      isLoggedIn: false,
      loaded: true,
      userProfile: null,
    }));

    render(<App />);

    expect(screen.queryByText("All books (1)")).not.toBeInTheDocument();
  });
});
