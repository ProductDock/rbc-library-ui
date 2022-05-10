import { BookStatus } from "../../store/books/status/Types";
import BookRentAction from "./BookRentAction";
import BookReturnAction from "./BookReturnAction";

type Props = {
  bookStatus: BookStatus | null;
};

const BookAction = ({ bookStatus }: Props) => {
  if (bookStatus === BookStatus.AVAILABLE) return <BookRentAction />;
  if (bookStatus === BookStatus.RENTED_BY_YOU) return <BookReturnAction />;

  return null;
};

export default BookAction;
