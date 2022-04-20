import { Typography } from "@mui/material";
import "./BookRentButton.css";

const BookRentButton = () => {
  return (
    <button type="button" className="rent-button">
      <Typography>Rent a book</Typography>
    </button>
  );
};

export default BookRentButton;
