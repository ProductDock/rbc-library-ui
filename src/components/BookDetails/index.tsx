/* eslint-disable no-unused-vars */
import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../store/books/details/BookDetailsContext";
import BookCover from "../BookCover";
import BookReviewForm from "../BookReviewForm";
import BookStatus from "../BookStatus";
import ReviewSection from "../ReviewSection";
import "./BookDetails.css";
import BookAction from "../BookAction";
import BookStarRating from "../BookStarRating";
import DescriptionSection from "../DescriptionSection";
import CategoriesSection from "../CategoriesSection";

const BookDetails = () => {
  const { book, bookStatus, setBookStatus } = useBookDetailsContext();

  return (
    <div className="book-details" data-testid="book-details">
      <div className="book-details-left">
        <div className="bd-cover">
          <BookCover imageUrl={book?.cover} />
        </div>
        <div className="rating-div">
          <BookStarRating
            rating={book?.rating?.score}
            ratingsCount={book?.rating?.count}
            ratingsCountShow
          />
        </div>
      </div>
      <div className="book-details-right">
        <div className="book-details-status">
          <BookStatus
            records={book?.records}
            statusChangeCallback={setBookStatus}
          />
        </div>
        <div className="bd-text-box">
          <Typography className="bd-title">{book?.title}</Typography>
          <Typography className="bd-author"> {book?.author} </Typography>
          <BookAction bookStatus={bookStatus} />
        </div>
        <DescriptionSection description={book?.description} />
        <CategoriesSection categories={book?.categories} />
        <ReviewSection reviews={book?.reviews} />
      </div>
    </div>
  );
};

export default BookDetails;
