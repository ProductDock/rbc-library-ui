import { useMediaQuery } from "@mui/material";
import { MediaQueries } from "../../../../constants/mediaQueries";
import { BookStatus } from "../../../../store/books/status/Types";
import BookCancelReservationAction from "./BookCancelReservationAction";
import BookRentAction from "./BookRentAction";
import BookReserveAction from "./BookReserveAction";
import BookReturnAction from "./BookReturnAction";

type Props = {
  bookStatus: BookStatus | null;
};

const BookAction = ({ bookStatus }: Props) => {
  const isLargeScreen = useMediaQuery(MediaQueries.X_MEDIUM);
  if (isLargeScreen && bookStatus === BookStatus.AVAILABLE) {
    return <BookReserveAction />;
  }
  if (bookStatus === BookStatus.AVAILABLE) return <BookRentAction />;
  if (bookStatus === BookStatus.RENTED_BY_YOU) return <BookReturnAction />;
  if (bookStatus === BookStatus.RESERVED_BY_YOU) {
    return <BookCancelReservationAction />;
  }
  return null;
};

export default BookAction;
