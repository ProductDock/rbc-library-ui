import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../store/books/details/BookDetailsContext";
import BookCover from "../BookCover";
import BookStatus from "../BookStatus";
import ReviewSection from "../ReviewSection";
import "./BookDetails.css";

const BookDetails = () => {
  const { book } = useBookDetailsContext();

  return (
    <div className="book-details" data-testid="book-details">
      <div className="bd-cover">
        <BookCover imageUrl={book?.cover} />
      </div>
      <BookStatus records={book?.records} />
      <div className="bd-text-box">
        <Typography className="bd-title">{book?.title}</Typography>
        <Typography className="bd-author"> {book?.author} </Typography>
      </div>
      <ReviewSection reviews={book?.reviews} />
    </div>
  );
};

export default BookDetails;
