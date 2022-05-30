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

type Props = {
  onSkip: () => void;
  onSuccessCallback?: () => void;
  skipReviewButtonText?: string;
};

const BookReviewForm = ({
  onSkip,
  onSuccessCallback,
  skipReviewButtonText,
}: Props) => {
  const { reviewBook } = useBookDetailsContext();

  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number | null>(0);
  const [recommendation, setRecommendation] = useState<BookRecommendations[]>(
    []
  );

  const createReview = (): BookReview => {
    const review: BookReview = { comment, rating, recommendation };

    if (!comment) review.comment = null;
    if (!rating) review.rating = null;

    return review;
  };

  const handleSubmit = () => {
    reviewBook?.(createReview()).then(() => onSuccessCallback?.());
  };

  const isSubmitEnabled = useCallback(() => {
    return rating || recommendation.length > 0 || comment.length > 0;
  }, [recommendation, rating, comment]);

  return (
    <>
      <div className="field-container">
        <BookReviewFormTitle onSkip={onSkip} />
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

      <div className="book-review-form-footer">
        <SubmitReviewButton
          disabled={!isSubmitEnabled()}
          onClick={handleSubmit}
        />
        <SkipReviewButton
          text={skipReviewButtonText || "Skip"}
          onClick={onSkip}
        />
      </div>
    </>
  );
};

export default BookReviewForm;
