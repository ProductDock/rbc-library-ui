import { useParams } from "react-router";
import BookDetails from "../components/BookDetails";
import BookDetailsContexProvider from "../store/books/details/BookDetailsContext";

const BookDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="book-details-container">
      <BookDetailsContexProvider>
        <BookDetails bookId={id} />
      </BookDetailsContexProvider>
    </div>
  );
};

export default BookDetailsPage;
