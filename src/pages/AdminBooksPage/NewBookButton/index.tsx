/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useNewBookContext } from "../../../store/books/new/NewBookContext";
import "./NewBookButton.css";

const NewBookButton = () => {
  const { showNewBookForm: showAddBookForm } = useNewBookContext();
  const onClick = () => {
    showAddBookForm?.();
  };

  return (
    <Button className="add-book-button" onClick={onClick}>
      Add book
      <AddCircleOutlineOutlinedIcon className="add-book-button-icon" />
    </Button>
  );
};

export default NewBookButton;
