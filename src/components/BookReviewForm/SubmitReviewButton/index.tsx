/* eslint-disable no-confusing-arrow */
import { Button, Typography } from "@mui/material";
import "./SubmitReviewButton.css";

type Props = {
  onClick: () => void;
  disabled: boolean;
};

const SubmitReviewButton = ({ onClick, disabled }: Props) => {
  const buttonTextClass = () =>
    disabled
      ? "submit-review-button-text-disabled"
      : "submit-review-button-text";

  return (
    <Button
      disabled={disabled}
      className="submit-review-button"
      onClick={onClick}
    >
      <Typography className={buttonTextClass()}>Submit</Typography>
    </Button>
  );
};

export default SubmitReviewButton;
