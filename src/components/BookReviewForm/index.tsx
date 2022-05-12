import { Typography, Rating } from "@mui/material";
import { useCallback, useState } from "react";
import BookReviewFormTitle from "./FormTitle";
import "./BookReviewForm.css";
import TextArea from "./TextArea";
import SubmitReviewButton from "./SubmitReviewButton";
import SkipReviewButton from "./SkipReviewButton";
import CheckboxGroup from "./CheckboxGroup";
import { BookRecommendations } from "../../store/books/details/Types";
import { useBookDetailsContext } from "../../store/books/details/BookDetailsContext";
import RecommendationCheckboxValues from "./util/RecomendationCheckoxValues";

type Props = {
  onSkip: () => void;
  onSuccessCallback?: () => void;
};

const BookReviewForm = ({ onSkip, onSuccessCallback }: Props) => {
  const { reviewBook } = useBookDetailsContext();

  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number | null>(0);
  const [recommendation, setRecommendation] = useState<BookRecommendations[]>(
    []
  );

  const handleSubmit = () => {
    reviewBook?.({
      comment,
      rating,
      recommendation,
    }).then(() => onSuccessCallback?.());
  };

  const isSubmitEnabled = useCallback(() => {
    return rating || recommendation.length > 0 || comment.length > 0;
  }, [recommendation, rating, comment]);

  return (
    <>
      <BookReviewFormTitle />
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
      <TextArea maxLentgth={500} text={comment} setText={setComment} />

      <div className="book-review-form-footer">
        <SubmitReviewButton
          disabled={!isSubmitEnabled()}
          onClick={handleSubmit}
        />
        <SkipReviewButton text="Skip" onClick={onSkip} />
      </div>
    </>
  );
};

export default BookReviewForm;
