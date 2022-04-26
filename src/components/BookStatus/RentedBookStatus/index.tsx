import { Typography } from "@mui/material";
import "./RentedBookStatus.css";
import status from "../StatusIcons/rented.svg";

const RentedBookStatus = () => {
  return (
    <div className="book-status">
      <img src={status} alt="" />
      <Typography className="book-status-text">Rented</Typography>
    </div>
  );
};

export default RentedBookStatus;
