import { Typography } from "@mui/material";
import "./BookReturnButton.css";

type Props = {
  onClick?: () => void;
};

const BookReturnButton = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      className="return-button"
      onClick={onClick}
      data-testid="return-book-button"
    >
      <Typography>Return the book</Typography>
    </button>
  );
};

export default BookReturnButton;
