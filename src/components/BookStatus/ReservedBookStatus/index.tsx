import { Typography } from "@mui/material";
import "./ReservedBookStatus.css";
import status from "../../../img/book-status/reserved.svg";

type Props = {
  userFullName: string;
};

const ReservedBookStatus = ({ userFullName }: Props) => {
  return (
    <div className="reserved-book-status">
      <img src={status} alt="" />
      {userFullName === "" ? (
        <Typography className="book-status-reserved-text">Reserved</Typography>
      ) : (
        <Typography className="book-status-reserved-text">
          Reserved by {userFullName}
        </Typography>
      )}
    </div>
  );
};

export default ReservedBookStatus;
