import { useParams } from "react-router-dom";
import BookDetails from "../components/BookDetails";
import BookDetailsContexProvider from "../store/books/details/BookDetailsContext";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  return (
    <div className="book-details-container">
      <BookDetailsContexProvider bookId={parseInt(bookId || "0", 10)}>
        <BookDetails />
      </BookDetailsContexProvider>
    </div>
  );
};

export default BookDetailsPage;
