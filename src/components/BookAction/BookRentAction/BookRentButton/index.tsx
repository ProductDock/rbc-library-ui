import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import "./BookRentButton.css";

const BookRentButton = () => {
  const { performAction } = useBookDetailsContext();

  return (
    <button
      type="button"
      className="rent-button"
      onClick={performAction}
      data-testid="rent-book-button"
    >
      <Typography>Rent a book</Typography>
    </button>
  );
};

export default BookRentButton;
