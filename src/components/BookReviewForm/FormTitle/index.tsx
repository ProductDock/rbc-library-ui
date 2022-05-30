/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Typography } from "@mui/material";
import "./FormTitle.css";
import closeIcon from "../../../img/icons/close-icon.svg";

type Props = {
  onSkip: () => void;
};

const BookReviewFormTitle = ({ onSkip }: Props) => {
  return (
    <>
      <div className="title-container">
        <Typography
          data-testid="book-review-form-title"
          className="book-review-title"
        >
          Write a review
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
