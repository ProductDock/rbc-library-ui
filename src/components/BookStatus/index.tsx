/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from "react";
import { Record } from "../../store/books/catalog/Types";
import { useAuthContext } from "../../store/auth/AuthContext";
import { DetailedRecord } from "../../store/books/details/Types";
import BookStatusCalculator from "../../store/books/status/BookStatusCalculator";
import { BookStatus as BookStatusValues } from "../../store/books/status/Types";
import AvailableBookStatus from "./AvailableBookStatus";
import RentedBookStatus from "./RentedBookStatus";
import RentedByYouBookStatus from "./RentedByYouBookStatus";
import ReservedBookStatus from "./ReservedBookStatus";
import ReservedByYouBookStatus from "./ReservedByYouBookStatus";

type Props = {
  records?: DetailedRecord[] | Record[];
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

  const getUserFullName = () => {
    if (records?.length === 1) {
      return (records as DetailedRecord[])[0].user?.fullName;
    }
    return "";
  };

  return (
    <div>
      {bookStatus &&
        {
          AVAILABLE: <AvailableBookStatus />,
          RENTED: <RentedBookStatus userFullName={getUserFullName()} />,
          RENTED_BY_YOU: <RentedByYouBookStatus />,
          RESERVED: <ReservedBookStatus userFullName={getUserFullName()} />,
          RESERVED_BY_YOU: <ReservedByYouBookStatus />,
        }[bookStatus]}
    </div>
  );
};

export default BookStatus;
