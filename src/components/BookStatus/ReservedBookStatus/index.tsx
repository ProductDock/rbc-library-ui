import { Typography } from "@mui/material";
import "./ReservedBookStatus.css";
import status from "../../../img/book-status/reserved.svg";

const ReservedBookStatus = () => {
  return (
    <div className="book-status">
      <img src={status} alt="" />
      <Typography className="book-status-reserved-text">Reserved</Typography>
    </div>
  );
};

export default ReservedBookStatus;
