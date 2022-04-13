import { useParams } from "react-router";
import BookDetails from "../components/BookDetails";
import BooksContexProvider from "../store/books/BooksContext";

const BookDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="book-details-container">
      <BooksContexProvider>
        <BookDetails bookId={id} />
      </BooksContexProvider>
    </div>
  );
};

export default BookDetailsPage;
