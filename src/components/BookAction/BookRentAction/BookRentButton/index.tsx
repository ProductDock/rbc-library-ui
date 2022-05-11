import { Typography } from "@mui/material";
import "./BookRentButton.css";

type Props = {
  onClick?: () => void;
};

const BookRentButton = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      className="rent-button"
      onClick={onClick}
      data-testid="rent-book-button"
    >
      <Typography>Rent a book</Typography>
    </button>
  );
};

export default BookRentButton;
