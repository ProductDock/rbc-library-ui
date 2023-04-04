import { useParams } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookDetailsContexProvider from "../../store/books/details/BookDetailsContext";
import SuccessScreenContextProvider from "../../store/books/success/SuccessScreenContext";
import Notification from "./BookDetails/Notification";
import BookReviewContextProvider from "../../store/books/reviews/BookReviewContext";
import SuggestedBooksContextProvider from "../../store/books/suggested/SuggestedBooksContext";
import NavBar from "../../components/NavBar";
import NewBookContextProvider from "../../store/books/new/NewBookContext";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  return (
    <BookDetailsContexProvider bookId={parseInt(bookId || "0", 10)}>
      <NewBookContextProvider>
        <BookReviewContextProvider>
          <SuccessScreenContextProvider>
            <SuggestedBooksContextProvider>
              <NavBar />
            </SuggestedBooksContextProvider>
            <BookDetails />
            <Notification />
          </SuccessScreenContextProvider>
        </BookReviewContextProvider>
      </NewBookContextProvider>
    </BookDetailsContexProvider>
  );
};

export default BookDetailsPage;
