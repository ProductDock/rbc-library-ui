import { Typography } from "@mui/material";
import "./RentedBookStatus.css";
import status from "../../../img/book-status/rented.svg";

type Props = {
  userFullName: string | undefined;
};

const RentedBookStatus = ({ userFullName }: Props) => {
  return (
    <div className="rented-book-status">
      <img src={status} alt="" />
      <Typography className="book-status-rented-text">
        Rented{userFullName ? ` by ${userFullName}` : ""}
      </Typography>
    </div>
  );
};

export default RentedBookStatus;
