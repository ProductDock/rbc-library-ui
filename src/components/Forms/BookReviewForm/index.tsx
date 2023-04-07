/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Typography, Rating } from "@mui/material";
import { useCallback, useState } from "react";
import "./BookReviewForm.css";
import TextArea from "../Components/TextArea";
import CheckboxGroup from "./CheckboxGroup";
import { BookRecommendations, BookReview } from "../../../store/books/details/Types";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import RecommendationCheckboxValues from "./util/RecomendationCheckoxValues";
import { useBookReviewContext } from "../../../store/books/reviews/BookReviewContext";
import { BookReviewFormVariant } from "../../../store/books/reviews/Types";
import { BookActions } from "../../../store/books/status/Types";
import { successMessages } from "../../../constants/successMessages";
import { useSuccessScreenContext } from "../../../store/books/success/SuccessScreenContext";
import { gratitudeMessages } from "../../../constants/gratitudeMessages";
import CancelButton from "../Components/CancelButton";
import SubmitButton from "../Components/SubmitButton";
import FormTitle from "../Components/FormTitle";

const BookReviewForm = () => {
  const { book, currentAction, reloadBook } = useBookDetailsContext();
  const { addReview, editReview, formVariant, selectedReview, hideReviewForm } = useBookReviewContext();
  const { showSuccessScreen } = useSuccessScreenContext();

  const [comment, setComment] = useState<string>(selectedReview?.comment || "");
  const [rating, setRating] = useState<number | null>(selectedReview?.rating || 0);
  const [recommendation, setRecommendation] = useState<BookRecommendations[]>(selectedReview?.recommendation || []);

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
    if (currentAction === BookActions.RETURN) {
      reloadBook?.();
      showSuccessScreen?.(successMessages.RETURN_BOOK, gratitudeMessages.THANK_YOU);
    }
  };

  const onSuccessCallback = () => {
    if (currentAction === BookActions.RETURN) {
      showSuccessScreen?.(successMessages.RETURN_BOOK, gratitudeMessages.THANK_YOU);
    } else {
      showSuccessScreen?.(successMessages.REVIEW_BOOK, gratitudeMessages.THANK_YOU);
    }
    hideReviewForm?.();
    reloadBook?.();
  };

  const handleSubmit = () => {
    selectedReview
      ? editReview?.(book?.id || 0, createReview()).then(() => onSuccessCallback())
      : addReview?.(book?.id || 0, createReview()).then(() => onSuccessCallback());
  };

  const isSubmitEnabled = useCallback(() => {
    return rating || recommendation.length > 0 || comment.length > 0;
  }, [recommendation, rating, comment]);

  return (
    <div className="book-review-form-container">
      <div className="field-container">
        <FormTitle
          onSkip={endReview}
          text={formVariant === BookReviewFormVariant.EDIT ? "Edit a review " : "Write a review "}
          description="You can review the book once"
        />
        <Typography className="book-review-field-title">How would you rate your experience with this book?</Typography>
        <Rating
          data-testid="book-review-rating"
          className="book-review-field"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
        />
        <Typography className="book-review-field-title">To whom would you recommend this book?</Typography>
        <CheckboxGroup
          checkboxes={RecommendationCheckboxValues.get()}
          setCheckedValues={setRecommendation}
          checkedValues={recommendation}
        />
        <Typography className="book-review-field-title">Comment</Typography>
        <TextArea dataTestId="review-comment-textarea" maxLength={500} text={comment} setText={setComment} minRows={5} placeholder="Please be as detailed as possible" showTextLength />
        <div className="book-review-form-footer">
          <SubmitButton
            text={formVariant === BookReviewFormVariant.EDIT ? "Save" : "Submit"}
            disabled={!isSubmitEnabled()}
            onClick={handleSubmit}
          />
          <CancelButton
            text={formVariant === BookReviewFormVariant.EDIT || !currentAction ? "Cancel" : "Skip"}
            onClick={endReview}
          />
        </div>
      </div>
    </div>
  );
};

export default BookReviewForm;
