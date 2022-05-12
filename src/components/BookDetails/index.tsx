/* eslint-disable no-unused-vars */
import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../store/books/details/BookDetailsContext";
import BookCover from "../BookCover";
import BookReviewForm from "../BookReviewForm";
import BookStatus from "../BookStatus";
import ReviewSection from "../ReviewSection";
import "./BookDetails.css";
import BookAction from "../BookAction";

const BookDetails = () => {
  const { book, bookStatus, setBookStatus } = useBookDetailsContext();

  return (
    <div className="book-details" data-testid="book-details">
      <div className="bd-cover">
        <BookCover imageUrl={book?.cover} />
      </div>
      <BookStatus
        records={book?.records}
        statusChangeCallback={setBookStatus}
      />
      <div className="bd-text-box">
        <Typography className="bd-title">{book?.title}</Typography>
        <Typography className="bd-author"> {book?.author} </Typography>
        <BookAction bookStatus={bookStatus} />
      </div>
      <ReviewSection reviews={book?.reviews} />
    </div>
  );
};

export default BookDetails;
