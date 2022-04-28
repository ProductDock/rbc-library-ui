import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import "./BookRentButton.css";

const BookRentButton = () => {
  const { rentABook } = useBookDetailsContext();

  return (
    <button type="button" className="rent-button" onClick={rentABook}>
      <Typography>Rent a book</Typography>
    </button>
  );
};

export default BookRentButton;
