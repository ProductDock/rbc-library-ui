/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from "react";
import { useAuthContext } from "../../store/auth/AuthContext";
import { Record } from "../../store/books/catalog/Types";
import BookStatusCalculator from "../../store/books/status/BookStatusCalculator";
import { BookStatus as BookStatusValues } from "../../store/books/status/Types";
import AvailableBookStatus from "./AvailableBookStatus";
import RentedBookStatus from "./RentedBookStatus";
import RentedByYouBookStatus from "./RentedByYouBookStatus";
import ReservedBookStatus from "./ReservedBookStatus";
import ReservedByYouBookStatus from "./ReservedByYouBookStatus";

type Props = {
  records?: Record[];
  statusChangeCallback?: Function;
};

const BookStatus = ({ records, statusChangeCallback }: Props) => {
  const { userProfile } = useAuthContext();
  const [bookStatus, setBookStatus] = useState<BookStatusValues | null>(null);

  useEffect(() => {
    if (!records || !userProfile) {
      return;
    }
    const calculatedBookStatus = BookStatusCalculator.calculate(
      records,
      userProfile.email
    );
    setBookStatus(calculatedBookStatus);
  });

  useEffect(() => statusChangeCallback?.(bookStatus), [bookStatus]);

  return (
    <div>
      {bookStatus &&
        {
          AVAILABLE: <AvailableBookStatus />,
          RENTED: <RentedBookStatus />,
          RENTED_BY_YOU: <RentedByYouBookStatus />,
          RESERVED: <ReservedBookStatus />,
          RESERVED_BY_YOU: <ReservedByYouBookStatus />,
        }[bookStatus]}
    </div>
  );
};

export default BookStatus;
