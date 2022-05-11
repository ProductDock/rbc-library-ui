import { Typography } from "@mui/material";
import "./FormTitle.css";

const BookReviewFormTitle = () => {
  return (
    <>
      <Typography className="book-review-title">Write a review</Typography>
      <Typography className="book-review-title-description">
        You can review the book once
      </Typography>
    </>
  );
};

export default BookReviewFormTitle;
