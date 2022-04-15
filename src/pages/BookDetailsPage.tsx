import BookDetails from "../components/BookDetails";
import BookDetailsContexProvider from "../store/books/details/BookDetailsContext";

const BookDetailsPage = () => {
  return (
    <div className="book-details-container">
      <BookDetailsContexProvider>
        <BookDetails />
      </BookDetailsContexProvider>
    </div>
  );
};

export default BookDetailsPage;
