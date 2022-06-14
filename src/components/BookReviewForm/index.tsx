/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Typography, Rating } from "@mui/material";
import { useCallback, useState } from "react";
import BookReviewFormTitle from "./FormTitle";
import "./BookReviewForm.css";
import TextArea from "./TextArea";
import SubmitReviewButton from "./SubmitReviewButton";
import SkipReviewButton from "./SkipReviewButton";
import CheckboxGroup from "./CheckboxGroup";
import {
  BookRecommendations,
  BookReview,
} from "../../store/books/details/Types";
import { useBookDetailsContext } from "../../store/books/details/BookDetailsContext";
import RecommendationCheckboxValues from "./util/RecomendationCheckoxValues";
import { useBookReviewContext } from "../../store/books/reviews/BookReviewContext";
import { BookReviewFormVariant } from "../../store/books/reviews/Types";
import { BookActions } from "../../store/books/status/Types";
import { successMessages } from "../../constants/successMessages";
import { useSuccessScreenContext } from "../../store/books/success/SuccessScreenContext";
import { gratitudeMessages } from "../../constants/gratitudeMessages";

const BookReviewForm = () => {
  const { book, currentAction, reloadBook } = useBookDetailsContext();
  const { addReview, editReview, formVariant, selectedReview, hideReviewForm } =
    useBookReviewContext();
  const { showSuccessScreen } = useSuccessScreenContext();

  const [comment, setComment] = useState<string>(selectedReview?.comment || "");
  const [rating, setRating] = useState<number | null>(
    selectedReview?.rating || 0
  );
  const [recommendation, setRecommendation] = useState<BookRecommendations[]>(
    selectedReview?.recommendation || []
  );

  const createReview = (): BookReview => {
    const review: BookReview = {
      comment,
      rating,
      recommendation,
    };

    if (!comment) review.comment = null;
    if (!rating) review.rating = null;

    return review;
  };

  const endReview = () => {
    hideReviewForm?.();
    if (currentAction === BookActions.RETURNED) {
      reloadBook?.();
      showSuccessScreen?.(
        successMessages.RETURN_BOOK,
        gratitudeMessages.THANK_YOU
      );
    }
  };

  const onSuccessCallback = () => {
    if (currentAction === BookActions.RETURNED) {
      showSuccessScreen?.(
        successMessages.RETURN_BOOK,
        gratitudeMessages.THANK_YOU
      );
    } else {
      showSuccessScreen?.(
        successMessages.REVIEW_BOOK,
        gratitudeMessages.THANK_YOU
      );
    }
    hideReviewForm?.();
    reloadBook?.();
  };

  const handleSubmit = () => {
    selectedReview
      ? editReview?.(book?.id || 0, createReview()).then(() =>
          onSuccessCallback()
        )
      : addReview?.(book?.id || 0, createReview()).then(() =>
          onSuccessCallback()
        );
  };

  const isSubmitEnabled = useCallback(() => {
    return rating || recommendation.length > 0 || comment.length > 0;
  }, [recommendation, rating, comment]);

  return (
    <>
      <div className="book-review-form-container">
        <div className="field-container">
          <BookReviewFormTitle onSkip={endReview} />
          <Typography className="book-review-field-title">
            How would you rate your experience with this book?
          </Typography>
          <Rating
            data-testid="book-review-rating"
            className="book-review-field"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
          />
          <Typography className="book-review-field-title">
            To whom would you recommend this book?
          </Typography>
          <CheckboxGroup
            checkboxes={RecommendationCheckboxValues.get()}
            setCheckedValues={setRecommendation}
            checkedValues={recommendation}
          />
          <Typography className="book-review-field-title">Comment</Typography>
          <TextArea maxLength={500} text={comment} setText={setComment} />
        </div>
      </div>
      <div className="book-review-form-footer">
        <SubmitReviewButton
          text={formVariant === BookReviewFormVariant.EDIT ? "Save" : "Submit"}
          disabled={!isSubmitEnabled()}
          onClick={handleSubmit}
        />
        <SkipReviewButton
          text={
            formVariant === BookReviewFormVariant.EDIT || !currentAction
              ? "Cancel"
              : "Skip"
          }
          onClick={endReview}
        />
      </div>
    </>
  );
};

export default BookReviewForm;
