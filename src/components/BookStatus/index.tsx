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
  const [bookRentedByLoggedInUser, setBookRentedByLoggedInUser] =
    useState(false);

  useEffect(() => {
    if (records && userProfile) {
      const rentals = records.filter((record) => record.status === "RENTED");
      if (
        rentals.filter((rental) => rental.email === userProfile.email).length >
        0
      ) {
        setBookRentedByLoggedInUser(true);
        setIsBookAvailable(false);
      } else if (rentals.length === numberOfCopies) {
        setIsBookAvailable(false);
      }
    }
  });

  return isBookAvailable ? (
    <AvailableBookStatus />
  ) : (
    <RentedBookStatus bookRentedByLoggedInUser={bookRentedByLoggedInUser} />
  );
};

export default BookStatus;
