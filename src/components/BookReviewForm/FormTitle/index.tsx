/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Typography } from "@mui/material";
import "./FormTitle.css";
import closeIcon from "../../../img/icons/close-icon.svg";
import { useBookReviewContext } from "../../../store/books/reviews/BookReviewContext";
import { BookReviewFormVariant } from "../../../store/books/reviews/Types";

type Props = {
  onSkip: () => void;
};

const BookReviewFormTitle = ({ onSkip }: Props) => {
  const { formVariant } = useBookReviewContext();

  return (
    <>
      <div className="title-container">
        <Typography
          data-testid="book-review-form-title"
          className="book-review-title"
        >
          {formVariant === BookReviewFormVariant.EDIT ? "Edit" : "Write"} a
          review
        </Typography>
        <img
          src={closeIcon}
          alt="closeIcon"
          onClick={onSkip}
          className="close-icon"
        />
      </div>
      <Typography className="book-review-title-description">
        You can review the book once
      </Typography>
    </>
  );
};

export default BookReviewFormTitle;
