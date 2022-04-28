import { Typography } from "@mui/material";
import "./RentedByYouBookStatus.css";
import status from "../StatusIcons/rented.svg";

const RentedByYouBookStatus = () => {
  return (
    <div className="book-status">
      <img src={status} alt="" />
      <Typography className="book-status-rented-text">Rented by you</Typography>
    </div>
  );
};

export default RentedByYouBookStatus;
