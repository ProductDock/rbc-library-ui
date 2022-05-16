import { useParams } from "react-router-dom";
import BookDetails from "../components/BookDetails";
import SuccessPage from "../components/Messages/Success/SuccessPage";
import BookDetailsContexProvider from "../store/books/details/BookDetailsContext";
import SuccessScreenContextProvider from "../store/success/SuccessScreenContext";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  return (
    <div>
      <BookDetailsContexProvider bookId={parseInt(bookId || "0", 10)}>
        <SuccessScreenContextProvider>
          <BookDetails />
          <SuccessPage />
        </SuccessScreenContextProvider>
      </BookDetailsContexProvider>
    </div>
  );
};

export default BookDetailsPage;
