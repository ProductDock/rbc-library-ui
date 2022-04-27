import { useEffect, useState } from "react";
import { useAuthContext } from "../../store/auth/AuthContext";
import { Record } from "../../store/books/catalog/Types";
import AvailableBookStatus from "./AvailableBookStatus";
import RentedBookStatus from "./RentedBookStatus";

type Props = {
  records?: Record[];
  numberOfCopies?: number;
};

const BookStatus = ({ records, numberOfCopies }: Props) => {
  const { userProfile } = useAuthContext();
  const [isBookAvailable, setIsBookAvailable] = useState(true);
  const [bookRentedByYou, setBookRentedByYou] = useState(false);

  useEffect(() => {
    let rents = 0;
    if (records && userProfile) {
      for (let i = 0; i < records.length; i += 1) {
        if (records[i].status === "RENTED") {
          rents += 1;
          if (records[i].email === userProfile.email) {
            setIsBookAvailable(false);
            setBookRentedByYou(true);
            break;
          }
        }
      }
    }
    if (rents === numberOfCopies) {
      setIsBookAvailable(false);
    }
  });

  return isBookAvailable ? (
    <AvailableBookStatus />
  ) : (
    <RentedBookStatus bookRentedByYou={bookRentedByYou} />
  );
};

export default BookStatus;
