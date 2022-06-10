/* eslint-disable no-unused-vars */
import { Typography, useMediaQuery } from "@mui/material";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookCover from "../../../components/BookCover";
import BookStatus from "../../../components/BookStatus";
import ReviewSection from "./ReviewSection";
import "./BookDetails.css";
import BookAction from "./BookAction";
import BookStarRating from "../../../components/BookStarRating";
import DescriptionSection from "./DescriptionSection";
import CategoriesSection from "./CategoriesSection";
import { useBookReviewContext } from "../../../store/books/reviews/BookReviewContext";
import { MediaQueries } from "../../../constants/mediaQueries";
import BookReviewForm from "../../../components/BookReviewForm";

const BookDetails = () => {
  const { book, bookStatus, setBookStatus } = useBookDetailsContext();
  const { showedReviewForm, hideReviewForm } = useBookReviewContext();
  const isLargeScreen = useMediaQuery(MediaQueries.LARGE);

  const showingBookDetails = () => {
    if (isLargeScreen) return true;
    if (!showedReviewForm && !isLargeScreen) return true;

    return false;
  };

  return (
    <>
      {showingBookDetails() && (
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
            <CategoriesSection categories={book?.topics} />
            <ReviewSection reviews={book?.reviews} />
          </div>
        </div>
      )}
      {showedReviewForm && (
        <>
          <div className="book-review-form-wrapper" onClick={hideReviewForm} />
          <BookReviewForm />
        </>
      )}
    </>
  );
};

export default BookDetails;
