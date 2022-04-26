import { Typography } from "@mui/material";
import "./RentedBookStatus.css";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../store/auth/AuthContext";
import status from "../StatusIcons/rented.svg";

type Props = {
  users: String[];
};

const RentedBookStatus = ({ users }: Props) => {
  const { userProfile } = useAuthContext();
  const [bookRentedByYou, setBookRentedByYou] = useState(false);

  useEffect(() => {
    console.log(users);
    if (userProfile?.email === "nenad.becanovic@productdock.com") {
      setBookRentedByYou(true);
    }
  });

  return bookRentedByYou ? (
    <div className="book-status book-status-rented-by-you">
      <img src={status} alt="" />
      <Typography className="book-status-rented-text">Rented by you</Typography>
    </div>
  ) : (
    <div className="book-status">
      <img src={status} alt="" />
      <Typography className="book-status-rented-text">Rented</Typography>
    </div>
  );
};

export default RentedBookStatus;
