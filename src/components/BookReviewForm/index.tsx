import { Typography, Rating } from "@mui/material";
import { useCallback, useState } from "react";
import BookReviewFormTitle from "./FormTitle";
import "./BookReviewForm.css";
import BookReviewTextArea from "./TextArea";
import SubmitReviewButton from "./SubmitReviewButton";
import SkipReviewButton from "./SkipReviewButton";
import CheckboxGroup, { CheckboxProps } from "./CheckboxGroup";

const checkboxes: CheckboxProps[] = [
  { values: ["JUNIOR", "MEDIOR", "SENIOR"], label: "Select all" },
  { values: ["JUNIOR"], label: "Junior" },
  { values: ["MEDIOR"], label: "Medior" },
  { values: ["SENIOR"], label: "Senior" },
];

const BookReviewForm = () => {
  const [description, setDescription] = useState<string>("");
  const [rating, setRating] = useState<number | null>();
  const [checkedSeniority, setCheckedSeniority] = useState<string[]>([]);

  const handleSubmit = () => {};

  const handleSkip = () => {};

  const isSubmitEnabled = useCallback(() => {
    return rating || checkedSeniority.length > 0 || description.length > 0;
  }, [checkedSeniority, rating, description]);

  return (
    <>
      <BookReviewFormTitle />
      <Typography className="book-review-field-title">
        How would you rate your experience with this book?
      </Typography>
      <Rating
        className="book-review-field"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
      <Typography className="book-review-field-title">
        To whom would you recommend this book?
      </Typography>
      <CheckboxGroup
        checkboxes={checkboxes}
        setCheckedValues={setCheckedSeniority}
        checkedValues={checkedSeniority}
      />
      <Typography className="book-review-field-title">Description</Typography>
      <BookReviewTextArea
        maxLentgth={500}
        text={description}
        setText={setDescription}
      />

      <div className="book-review-form-footer">
        <SubmitReviewButton
          disabled={!isSubmitEnabled()}
          onClick={handleSubmit}
        />
        <SkipReviewButton text="Skip" onClick={handleSkip} />
      </div>
    </>
  );
};

export default BookReviewForm;
