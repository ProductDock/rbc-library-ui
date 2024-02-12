import { render, screen } from "@testing-library/react";
import AdminHomePage from "../../pages/AdminHomePage/AdminHomePage";
import { MemoryRouter } from "react-router";
import { routes } from "../../constants/routes";
import userEvent from "@testing-library/user-event";

describe("Test side-menu", () => {
  test("should render side menu on admin page", async () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: routes.HOME,
          },
        ]}
      >
        <AdminHomePage />
      </MemoryRouter>
    );

    const menuComponent = await screen.findByTestId(`menu-list`);

    expect(menuComponent).toBeInTheDocument();
  });

  test("should change selected item on click", () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: routes.HOME,
          },
        ]}
      >
        <AdminHomePage />
      </MemoryRouter>
    );

    const readerButton = screen.getByTestId("reader-button");

    userEvent.click(readerButton);

    expect(readerButton).toHaveClass("Mui-selected");
  });

  test("should dashboard be selected on default", () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: routes.HOME,
          },
        ]}
      >
        <AdminHomePage />
      </MemoryRouter>
    );

    const dashboardButton = screen.getByTestId("dashboard-button");

    expect(dashboardButton).toHaveClass("Mui-selected");
  });
});
