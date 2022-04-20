import { Typography } from "@mui/material";
import "./BookWaitingListButton.css";

const BookWaitingListButton = () => {
  return (
    <button type="button" className="waiting-list-button">
      <Typography>Join the waiting list</Typography>
    </button>
  );
};

export default BookWaitingListButton;
