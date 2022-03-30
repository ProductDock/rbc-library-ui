import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import * as AuthContext from "../../store/auth/AuthContext";

describe("AccountAvatar component", () => {
  test("should render account avatar and check for dropdown menu button", () => {
    render(<App />);
    const accountAvatar = screen.getByLabelText("Account settings");
    expect(accountAvatar).toBeInTheDocument();
  });

  test("should render account avatar and show dropdown menu on button click", () => {
    render(<App />);
    const button = screen.getByTestId("avatar-button");
    userEvent.click(button);
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  test("should call sign out method and redirect to landing url", async () => {
    const signOutMock = jest.fn().mockResolvedValue({});

    jest.spyOn(AuthContext, "useAuthContext").mockImplementation(() => ({
      signOut: signOutMock,
      isLoggedIn: true,
      loaded: true,
      userProfile: {
        name: "test",
        imageUrl: "http://test.com",
        email: "test@test.com",
        googleAccessToken: "1234567",
      },
    }));

    render(<App />);

    const avatarButton = await screen.findByTestId("avatar-button");
    userEvent.click(avatarButton);

    const signOutButton = screen.getByTestId("sign-out-button");
    userEvent.click(signOutButton);

    expect(signOutMock).toBeCalledTimes(1);

    const landingText = await screen.findByText("Landing page");
    expect(landingText).toBeTruthy();
  });
});
