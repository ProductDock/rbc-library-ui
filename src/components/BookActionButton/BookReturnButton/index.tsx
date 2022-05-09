import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import "./BookReturnButton.css";

const BookReturnButton = () => {
  const { performAction } = useBookDetailsContext();

  return (
    <button
      type="button"
      className="return-button"
      onClick={performAction}
      data-testid="return-book-button"
    >
      <Typography>Return the book</Typography>
    </button>
  );
};

export default BookReturnButton;
