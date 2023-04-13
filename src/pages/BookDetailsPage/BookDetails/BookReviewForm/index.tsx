/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Typography, Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import "./BookReviewForm.css";
import TextArea from "../../../../components/FormComponents/Components/TextArea";
import CheckboxGroup from "./CheckboxGroup";
import {
  BookRecommendations,
  BookReview,
} from "../../../../store/books/details/Types";
import { useBookDetailsContext } from "../../../../store/books/details/BookDetailsContext";
import RecommendationCheckboxValues from "./util/RecomendationCheckoxValues";
import { useBookReviewContext } from "../../../../store/books/reviews/BookReviewContext";
import { BookActions } from "../../../../store/books/status/Types";
import { successMessages } from "../../../../constants/successMessages";
import { useSuccessScreenContext } from "../../../../store/books/success/SuccessScreenContext";
import { gratitudeMessages } from "../../../../constants/gratitudeMessages";
import SidebarFormModal from "../../../../components/SidebarFormModal";
import { BookReviewFormVariant } from "../../../../store/books/reviews/Types";

const BookReviewForm = () => {
  const { book, currentAction, reloadBook } = useBookDetailsContext();
  const {
    formVariant,
    showedReviewForm,
    addReview,
    editReview,
    selectedReview,
    hideReviewForm,
  } = useBookReviewContext();
  const { showSuccessScreen } = useSuccessScreenContext();

  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number | null>(0);
  const [recommendation, setRecommendation] = useState<BookRecommendations[]>(
    []
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
    if (currentAction === BookActions.RETURN) {
      reloadBook?.();
      showSuccessScreen?.(
        successMessages.RETURN_BOOK,
        gratitudeMessages.THANK_YOU
      );
    }
  };

  const onSuccessCallback = () => {
    if (currentAction === BookActions.RETURN) {
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

  useEffect(() => {
    setComment(selectedReview?.comment || "");
    setRating(selectedReview?.rating || 0);
    setRecommendation(selectedReview?.recommendation || []);
  }, [selectedReview]);

  const cancelReviewButtonText = (currentAction?: any) =>
    formVariant === BookReviewFormVariant.EDIT || !currentAction
      ? "Cancel"
      : "Skip";

  const submitReviewButtonText = () =>
    formVariant === BookReviewFormVariant.EDIT ? "Save" : "Submit";

  const formTitle = () =>
    formVariant === BookReviewFormVariant.EDIT
      ? "Edit a review"
      : "Write a review";

  return (
    <SidebarFormModal
      title={formTitle()}
      description="You can review the book once"
      open={showedReviewForm}
      handleClose={endReview}
      submitButtonText={submitReviewButtonText()}
      submitDisabled={!isSubmitEnabled()}
      handleSubmit={handleSubmit}
      cancelButtonText={cancelReviewButtonText(currentAction)}
    >
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
      <TextArea
        dataTestId="review-comment-textarea"
        maxLength={500}
        text={comment}
        setText={setComment}
        minRows={5}
        placeholder="Please be as detailed as possible"
        showTextLength
      />
    </SidebarFormModal>
  );
};

export default BookReviewForm;
