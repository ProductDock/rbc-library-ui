import { Typography } from "@mui/material";
import "./ReservedBookStatus.css";
import status from "../../../img/book-status/reserved.svg";

type Props = {
  userFullName: string | undefined;
};

const ReservedBookStatus = ({ userFullName }: Props) => {
  return (
    <div className="reserved-book-status">
      <img src={status} alt="" />
      <Typography className="book-status-reserved-text">
        Reserved{userFullName ? ` by ${userFullName}` : ""}
      </Typography>
    </div>
  );
};

export default ReservedBookStatus;
