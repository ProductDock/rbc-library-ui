/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import { render, screen } from "@testing-library/react";
import SidebarFormModal from ".";

const props = {
  title: "Dymmy title",
  description: "Description",
  submitButtonText: "Submit",
  submitDisabled: false,
  cancelButtonText: "Cancel",
  open: true,
  handleClose: jest.fn(),
  handleSubmit: jest.fn(),
};

describe("Test sidebar form modal", () => {
  test("should show modal components", async () => {
    render(<SidebarFormModal {...props} />);

    const formTitle = await screen.findByTestId("sidebar-modal-title");
    const description = screen.getByTestId("sidebar-modal-description");
    const closeIcon = screen.getByTestId("sidebar-modal-close-icon");
    const submitButton = screen.getByTestId("sidebar-modal-submit-button");
    const cancelButton = screen.getByTestId("sidebar-modal-cancel-button");

    expect(formTitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test("should hide modal when opened field set to false", async () => {
    props.open = false;
    render(<SidebarFormModal {...props} />);

    expect(screen.queryByTestId("sidebar-modal-wrapper")).toBeFalsy();
  });
});
