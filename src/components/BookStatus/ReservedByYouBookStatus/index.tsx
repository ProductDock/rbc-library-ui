import { Typography } from "@mui/material";
import "./ReservedByYouBookStatus.css";
import status from "../../../img/book-status/reserved.svg";

const ReservedByYouBookStatus = () => {
  return (
    <div className="book-status-reserved-by-you">
      <img src={status} alt="" />
      <Typography className="book-status-reserved-text">
        Reserved by you
      </Typography>
    </div>
  );
};

export default ReservedByYouBookStatus;
