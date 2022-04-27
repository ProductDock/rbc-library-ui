import { Typography } from "@mui/material";
import "./RentedBookStatus.css";
import status from "../StatusIcons/rented.svg";

type Props = {
  bookRentedByYou: boolean;
};

const RentedBookStatus = ({ bookRentedByYou }: Props) => {
  return bookRentedByYou ? (
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
