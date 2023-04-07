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
import BookReviewForm from "../../../components/Forms/BookReviewForm";
import { BookActions } from "../../../store/books/status/Types";
import { successMessages } from "../../../constants/successMessages";
import { useSuccessScreenContext } from "../../../store/books/success/SuccessScreenContext";
import { gratitudeMessages } from "../../../constants/gratitudeMessages";
import BookRecordsUsers from "../../../components/BookStatus/BookRecordsUsers";
import { useNewBookContext } from "../../../store/books/new/NewBookContext";
import NewBookForm from "../../../components/Forms/NewBookForm";

type Props = {
  qrScanned?: boolean;
};

const BookDetails = ({ qrScanned }: Props) => {
  const { book, currentAction, bookStatus, setBookStatus, reloadBook } = useBookDetailsContext();
  const { showedReviewForm, hideReviewForm } = useBookReviewContext();
  const { showSuccessScreen } = useSuccessScreenContext();
  const isLargeScreen = useMediaQuery(MediaQueries.X_MEDIUM);
  const { showedNewBookForm, hideNewBookForm } = useNewBookContext();

  const showingBookDetails = () => {
    if (isLargeScreen) return true;
    if (!showedReviewForm && !isLargeScreen) return true;

    return false;
  };

  const endReview = () => {
    hideReviewForm?.();
    if (currentAction === BookActions.RETURN) {
      reloadBook?.();
      showSuccessScreen?.(successMessages.RETURN_BOOK, gratitudeMessages.THANK_YOU);
    }
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
              <BookStarRating rating={book?.rating?.score} ratingsCount={book?.rating?.count} ratingsCountShow />
            </div>
          </div>
          <div className="book-details-right">
            <div className="book-details-status">
              <BookStatus records={book?.records} statusChangeCallback={setBookStatus} />
              {bookStatus !== "AVAILABLE" && book?.records && book?.records?.length > 1 && (
                <BookRecordsUsers records={book?.records} bookStatus={bookStatus} />
              )}
            </div>
            <div className="bd-text-box">
              <Typography className="bd-title">{book?.title}</Typography>
              <Typography className="bd-author"> {book?.author} </Typography>
              <BookAction bookStatus={bookStatus} qrScanned={qrScanned} />
            </div>
            <DescriptionSection description={book?.description} />
            <CategoriesSection categories={book?.topics} />
            <ReviewSection reviews={book?.reviews} />
          </div>
        </div>
      )}
      {showedReviewForm && (
        <>
          <div className="book-review-form-wrapper" onClick={endReview} />
          <BookReviewForm />
        </>
      )}
      {showedNewBookForm && (
      <>
        <div className="new-book-form-wrapper" onClick={hideNewBookForm} />
        <NewBookForm />
      </>
      )}
    </>
  );
};

export default BookDetails;
