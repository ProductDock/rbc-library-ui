import { Typography } from "@mui/material";
import "./CheckboxLabel.css";

type Props = {
  label: string;
};

const BookReviewCheckboxLabel = ({ label }: Props) => {
  return (
    <Typography className="book-review-checkbox-label">{label}</Typography>
  );
};

export default BookReviewCheckboxLabel;
