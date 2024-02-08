import {
  fireEvent,
  getByTestId,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import AdminHomePage from "../../pages/AdminHomePage/AdminHomePage";
import { MemoryRouter } from "react-router";
import { routes } from "../../constants/routes";

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

    expect(menuComponent).toBeTruthy();
  });

  test("should change selected item on click", () => {
    const { getByTestId } = render(
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

    const readerButton = getByTestId("reader-button");

    fireEvent.click(readerButton);

    expect(readerButton).toHaveClass("Mui-selected");
  });

  test("should dashboard be selected on default", () => {
    const { getByTestId } = render(
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

    const dashboardButton = getByTestId("dashboard-button");

    expect(dashboardButton).toHaveClass("Mui-selected");
  });
});
