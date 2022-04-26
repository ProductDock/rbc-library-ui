import { Typography } from "@mui/material";
import "./AvailableBookStatus.css";
import status from "../StatusIcons/available.svg";

const AvailableBookStatus = () => {
  return (
    <div className="book-status">
      <img src={status} alt="" />
      <Typography className="book-status-text">Available</Typography>
    </div>
  );
};

export default AvailableBookStatus;
