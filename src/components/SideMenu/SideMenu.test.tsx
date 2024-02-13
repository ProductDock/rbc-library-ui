import { act, render, screen } from "@testing-library/react";
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

  test("should change selected item on click", async () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: routes.ADMIN_HOME,
          },
        ]}
      >
        <AdminHomePage />
      </MemoryRouter>
    );

    const booksbutton = screen.getByTestId("books-button");

    userEvent.click(booksbutton);

    expect(screen.getByTestId("books-button")).toHaveClass("Mui-selected");
  });

  test("should dashboard be selected on default", () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: routes.ADMIN_HOME,
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
