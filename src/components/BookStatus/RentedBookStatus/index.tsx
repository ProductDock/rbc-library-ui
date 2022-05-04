import { Typography } from "@mui/material";
import "./RentedBookStatus.css";
import status from "../../../img/book-status/rented.svg";

const RentedBookStatus = () => {
  return (
    <div className="book-status">
      <img src={status} alt="" />
      <Typography className="book-status-rented-text">Rented</Typography>
    </div>
  );
};

export default RentedBookStatus;
