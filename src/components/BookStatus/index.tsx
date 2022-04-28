/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useAuthContext } from "../../store/auth/AuthContext";
import { Record } from "../../store/books/catalog/Types";
import BookStatusCalculator from "../../store/books/status/BookStatusCalculator";
import AvailableBookRule from "../../store/books/status/BookStatusRules/AvailableBookRule";
import AvailableBookStatus from "./AvailableBookStatus";
import RentedBookStatus from "./RentedBookStatus";
import RentedByYouBookStatus from "./RentedByYouBookStatus";

type Props = {
  records?: Record[];
};

const BookStatus = ({ records }: Props) => {
  const { userProfile } = useAuthContext();
  const [getBookStatus, setBookStatus] = useState("AVAILBLE");

  useEffect(() => {
    if (!records || !userProfile) {
      return;
    }
    const bookStatus = BookStatusCalculator.calculateBookStatus(
      records,
      userProfile.email
    );
    setBookStatus(bookStatus);
  });

  return (
    <div>
      {
        {
          AVAILABLE: <AvailableBookStatus />,
          RENTED: <RentedBookStatus />,
          RENTED_BY_YOU: <RentedByYouBookStatus />,
        }[getBookStatus]
      }
    </div>
  );
};

export default BookStatus;
