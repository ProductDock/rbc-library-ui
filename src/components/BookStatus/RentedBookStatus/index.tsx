import { Typography } from "@mui/material";
import "./RentedBookStatus.css";
import status from "../StatusIcons/rented.svg";

type Props = {
  bookRentedByLoggedInUser: boolean;
};

const RentedBookStatus = ({ bookRentedByLoggedInUser }: Props) => {
  return bookRentedByLoggedInUser ? (
    <div className="book-status book-status-rented-by-you">
      <img src={status} alt="" />
      <Typography className="book-status-rented-text">Rented by you</Typography>
    </div>
  ) : (
    <div className="book-status">
      <img src={status} alt="" />
      <Typography className="book-status-rented-text">Rented</Typography>
    </div>
  );
};

export default RentedBookStatus;
