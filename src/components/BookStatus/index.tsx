import { useEffect, useState } from "react";
import { useAuthContext } from "../../store/auth/AuthContext";
import { Record } from "../../store/books/catalog/Types";
import BookStatusCalculator from "../../store/books/status/BookStatusCalculator";
import AvailableBookStatus from "./AvailableBookStatus";
import RentedBookStatus from "./RentedBookStatus";
import RentedByYouBookStatus from "./RentedByYouBookStatus";
import ReservedBookStatus from "./ReservedBookStatus";
import ReservedByYouBookStatus from "./ReservedByYouBookStatus";

type Props = {
  records?: Record[];
};

const BookStatus = ({ records }: Props) => {
  const { userProfile } = useAuthContext();
  const [getBookStatus, setBookStatus] = useState("AVAILABLE");

  useEffect(() => {
    if (!records || !userProfile) {
      return;
    }
    const bookStatus = BookStatusCalculator.calculate(
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
          RESERVED: <ReservedBookStatus />,
          RESERVED_BY_YOU: <ReservedByYouBookStatus />,
        }[getBookStatus]
      }
    </div>
  );
};

export default BookStatus;
