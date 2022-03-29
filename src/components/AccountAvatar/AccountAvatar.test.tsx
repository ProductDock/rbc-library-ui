import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccountAvatar from ".";

describe("AccountAvatar component", () => {
  test("should render account avatar and check for dropdown menu button", () => {
    render(<AccountAvatar />);
    const accountAvatar = screen.getByLabelText("Account settings");
    expect(accountAvatar).toBeInTheDocument();
  });

  test("should render account avatar and show dropdown menu on button click", () => {
    render(<AccountAvatar />);
    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });
});
