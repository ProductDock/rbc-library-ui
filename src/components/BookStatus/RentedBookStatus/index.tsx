import { Typography } from "@mui/material";
import "./RentedBookStatus.css";
import status from "../../../img/book-status/rented.svg";

type Props = {
  userFullName: string;
};

const RentedBookStatus = ({ userFullName }: Props) => {
  return (
    <div className="rented-book-status">
      <img src={status} alt="" />
      {userFullName === "" ? (
        <Typography className="book-status-rented-text">Rented</Typography>
      ) : (
        <Typography className="book-status-rented-text">
          Rented by {userFullName}
        </Typography>
      )}
    </div>
  );
};

export default RentedBookStatus;
