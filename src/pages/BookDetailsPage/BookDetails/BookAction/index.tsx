import { BookStatus } from "../../../../store/books/status/Types";
import BookCancelReservationAction from "./BookCancelReservationAction";
import BookRentAction from "./BookRentAction";
import BookReserveAction from "./BookReserveAction";
import BookReturnAction from "./BookReturnAction";

type Props = {
  bookStatus: BookStatus | null;
  qrScanned?: boolean;
};

const BookAction = ({ bookStatus, qrScanned = false }: Props) => {
  if (!qrScanned) {
    if (bookStatus === BookStatus.AVAILABLE) {
      return <BookReserveAction />;
    }
    if (bookStatus === BookStatus.RESERVED_BY_YOU) {
      return <BookCancelReservationAction />;
    }
    if (bookStatus === BookStatus.RENTED_BY_YOU) {
      return <BookReturnAction />;
    }
  } else {
    if (bookStatus === BookStatus.AVAILABLE || bookStatus === BookStatus.RESERVED_BY_YOU) {
      return <BookRentAction />;
    }
    if (bookStatus === BookStatus.RENTED_BY_YOU) return <BookReturnAction />;
  }

  return null;
};

export default BookAction;
