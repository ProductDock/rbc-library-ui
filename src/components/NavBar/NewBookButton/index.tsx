/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "@mui/material";
import plusIcon from "../../../img/icons/plus-icon.svg";
import { useAddBookContext } from "../../../store/books/new/AddBookContext";
import "./NewBookButton.css";

const NewBookButton = () => {
    const { showAddBookForm } = useAddBookContext();
    const onClick = () => {
      showAddBookForm?.();
    };
    return (
      <Link
        className="add-book-button side-text"
        underline="none"
        onClick={onClick}
        data-testid="add-book-button"
      >
        Add a new book
        <img
          src={plusIcon}
          alt="plusIcon"
          className="add-book-button-icon"
        />
      </Link>
    );
};

export default NewBookButton;
