import { useParams } from "react-router-dom";
import BookDetails from "./BookDetails";
import SuccessScreen from "./SuccessScreen";
import BookDetailsContexProvider from "../../store/books/details/BookDetailsContext";
import SuccessScreenContextProvider from "../../store/books/success/SuccessScreenContext";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  return (
    <div>
      <BookDetailsContexProvider bookId={parseInt(bookId || "0", 10)}>
        <SuccessScreenContextProvider>
          <BookDetails />
          <SuccessScreen />
        </SuccessScreenContextProvider>
      </BookDetailsContexProvider>
    </div>
  );
};

export default BookDetailsPage;
