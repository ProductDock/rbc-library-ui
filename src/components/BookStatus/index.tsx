import { useEffect, useState } from "react";
import AvailableBookStatus from "./AvailableBookStatus";
import RentedBookStatus from "./RentedBookStatus";

const BookStatus = () => {
  // const { books } = useBooksContext();
  const [isBookAvailable, setIsBookAvailable] = useState(true);

  useEffect(() => {
    setIsBookAvailable(false);
  });

  return isBookAvailable ? (
    <AvailableBookStatus />
  ) : (
    <RentedBookStatus users={[]} />
  );
};

export default BookStatus;
