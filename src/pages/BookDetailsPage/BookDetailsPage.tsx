import { useParams } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookDetailsContexProvider from "../../store/books/details/BookDetailsContext";
import SuccessScreenContextProvider from "../../store/books/success/SuccessScreenContext";
import Notification from "./BookDetails/Notification";
import BookReviewContextProvider from "../../store/books/reviews/BookReviewContext";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  return (
    <BookDetailsContexProvider bookId={parseInt(bookId || "0", 10)}>
      <BookReviewContextProvider>
        <SuccessScreenContextProvider>
          <BookDetails />
          <Notification />
        </SuccessScreenContextProvider>
      </BookReviewContextProvider>
    </BookDetailsContexProvider>
  );
};

export default BookDetailsPage;
