import { Typography } from "@mui/material";
import "./RentedByYouBookStatus.css";
import status from "../../../img/book-status/rented.svg";

const RentedByYouBookStatus = () => {
  return (
    <div className="book-status-rented-by-you">
      <img src={status} alt="" />
      <Typography className="book-status-rented-text">Rented by you</Typography>
    </div>
  );
};

export default RentedByYouBookStatus;
