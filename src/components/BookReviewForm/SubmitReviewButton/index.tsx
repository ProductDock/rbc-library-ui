import { Button, Typography } from "@mui/material";
import "./SubmitReviewButton.css";

type Props = {
  text?: string;
  onClick: () => void;
  disabled: boolean;
};

const SubmitReviewButton = ({ text, onClick, disabled }: Props) => {
  const buttonTextClass = () =>
    disabled
      ? "submit-review-button-text-disabled"
      : "submit-review-button-text";

  return (
    <Button
      data-testid="submit-review-button"
      disabled={disabled}
      className="submit-review-button"
      onClick={onClick}
    >
      <Typography className={buttonTextClass()}>{text}</Typography>
    </Button>
  );
};

export default SubmitReviewButton;
