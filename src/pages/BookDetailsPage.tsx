import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import BookCover from "../components/BookCover";
import BooksContexProvider, {
  useBooksContext,
} from "../store/books/BooksContext";

const BookDetailsPage = () => {
  const { book, setBookId } = useBooksContext();
  const { id } = useParams();

  if (id) {
    console.log("uzeo id ");
    console.log(id);
    setBookId?.(parseInt(id, 10));
  }

  return (
    <div className="book-details-container">
      <BooksContexProvider>
        <BookCover imageUrl={book?.cover} />
        <div className="bd-text-box">
          <span>
            <Typography> {book?.title} </Typography>
          </span>
          <span>
            <Typography> {book?.author} </Typography>
          </span>
        </div>
      </BooksContexProvider>
    </div>
  );
};

export default BookDetailsPage;
