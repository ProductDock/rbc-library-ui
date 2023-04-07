import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import NewBookForm from "..";
import { TopicsFixture } from "../../../msw/fixtures";
import * as NewBookContext from "../../../store/books/new/NewBookContext";

describe("Test topic select", () => {
  test("should show topics when clicked on select menu", async () => {
    // const signOutMock = jest.fn().mockResolvedValue({});
    const topics = TopicsFixture;
    jest.spyOn(NewBookContext, "useNewBookContext").mockImplementation(() => ({
        showedNewBookForm: false,
        existingTopics: topics,
    }));

    render(
      <Router>
        <NewBookForm />
      </Router>);

    const topicsSelect = await screen.findByTestId(
      "new-book-select-topics"
    );

    const selectMenu = within(topicsSelect).getByRole('button');
    userEvent.click(selectMenu);

    expect(screen.getByText("None")).toBeInTheDocument();
    expect(screen.getByText("Software Development")).toBeInTheDocument();
    expect(screen.getByText("Product Management")).toBeInTheDocument();
    expect(screen.getByText("Design")).toBeInTheDocument();
    expect(screen.getByText("Psychology")).toBeInTheDocument();
  });

  test("should show selected topics when clicked on topic in select menu", async () => {
    const topics = TopicsFixture;
    jest.spyOn(NewBookContext, "useNewBookContext").mockImplementation(() => ({
        showedNewBookForm: false,
        existingTopics: topics,
    }));

    render(
      <Router>
        <NewBookForm />
      </Router>);

    const topicsSelect = await screen.findByTestId(
      "new-book-select-topics"
    );

    const selectMenu = within(topicsSelect).getByRole('button');
    userEvent.click(selectMenu);
    userEvent.click(screen.getByText("Software Development"));
    userEvent.click(selectMenu);

    expect(screen.queryByTestId("Software Development")).toBeInTheDocument();
    expect(screen.queryByTestId("Design")).not.toBeInTheDocument();
  });
});
