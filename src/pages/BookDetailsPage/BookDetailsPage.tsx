import { useParams } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookDetailsContexProvider from "../../store/books/details/BookDetailsContext";
import SuccessScreenContextProvider from "../../store/books/success/SuccessScreenContext";
import Notification from "./BookDetails/Notification";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  return (
    <div>
      <BookDetailsContexProvider bookId={parseInt(bookId || "0", 10)}>
        <SuccessScreenContextProvider>
          <BookDetails />
          <Notification />
        </SuccessScreenContextProvider>
      </BookDetailsContexProvider>
    </div>
  );
};

export default BookDetailsPage;
