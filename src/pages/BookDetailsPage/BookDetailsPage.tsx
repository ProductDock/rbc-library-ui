import { useParams } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookDetailsContexProvider from "../../store/books/details/BookDetailsContext";
import SuccessScreenContextProvider from "../../store/books/success/SuccessScreenContext";
import Notification from "./BookDetails/Notification";
import BookReviewContextProvider from "../../store/books/reviews/BookReviewContext";
import BooksContextProvider from "../../store/books/catalog/BooksContext";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  return (
    <BooksContextProvider>
      <BookDetailsContexProvider bookId={parseInt(bookId || "0", 10)}>
        <BookReviewContextProvider>
          <SuccessScreenContextProvider>
            <BookDetails />
            <Notification />
          </SuccessScreenContextProvider>
        </BookReviewContextProvider>
      </BookDetailsContexProvider>
    </BooksContextProvider>
  );
};

export default BookDetailsPage;
