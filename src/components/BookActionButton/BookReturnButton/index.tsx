import { Typography } from "@mui/material";
import "./BookReturnButton.css";

const BookReturnButton = () => {
  return (
    <button type="button" className="return-button">
      <Typography>Return the book</Typography>
    </button>
  );
};

export default BookReturnButton;
