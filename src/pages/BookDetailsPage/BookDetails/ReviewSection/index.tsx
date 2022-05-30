/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-wrap-multilines */
import { Link, Typography } from "@mui/material";
import { useState } from "react";
import { Review } from "../../../../store/books/details/Types";
import ReviewCollection from "./ReviewCollection";
import Section from "../../../../components/Section";
import "./ReviewSection.css";
import BookReviewForm from "../../../../components/BookReviewForm";
import { useSuccessScreenContext } from "../../../../store/books/success/SuccessScreenContext";
import plusIcon from "../../../../img/icons/plus-icon.svg";
import { useBookDetailsContext } from "../../../../store/books/details/BookDetailsContext";

const successMessage = "You have successfully reviewed the book";

type Props = {
  reviews?: Review[];
};

const ReviewSection = ({ reviews }: Props) => {
  const { reloadBook } = useBookDetailsContext();
  const [showedReviewForm, setShowedReviewForm] = useState(false);

  const { showSuccessScreen } = useSuccessScreenContext();

  const showReviewForm = () => setShowedReviewForm(true);
  const hideReviewForm = () => setShowedReviewForm(false);

  const endReview = () => {
    hideReviewForm();
    reloadBook?.();
    showSuccessScreen?.(successMessage);
  };

  return (
    <>
      <div className="review-section">
        <Section
          title="Reviews"
          numberOfItems={reviews?.length || 0}
          action={
            <Link
              className="write-a-review-button side-text"
              underline="none"
              onClick={showReviewForm}
              data-testid="write-a-review-button"
            >
              Write a review
              <img
                src={plusIcon}
                alt="plusIcon"
                className="write-a-review-button-icon"
              />
            </Link>
          }
        >
          {reviews?.length ? (
            <ReviewCollection reviews={reviews} />
          ) : (
            <Typography className="review-section-message">
              There are no reviews for this book yet
            </Typography>
          )}
        </Section>
      </div>
      {showedReviewForm && (
        <>
          <div className="book-review-form-wrapper" onClick={hideReviewForm} />
          <div className="book-review-form-container">
            <BookReviewForm
              onSkip={hideReviewForm}
              onSuccessCallback={endReview}
              skipReviewButtonText="Cancel"
            />
          </div>
        </>
      )}
    </>
  );
};

export default ReviewSection;
