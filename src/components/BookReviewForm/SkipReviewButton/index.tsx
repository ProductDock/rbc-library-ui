import { Button, Typography } from "@mui/material";
import "./SkipReviewButton.css";

type Props = {
  onClick: () => void;
  text: string;
};

const SkipReviewButton = ({ text, onClick }: Props) => {
  return (
    <Button className="skip-review-button" onClick={onClick}>
      <Typography className="skip-review-button-text">{text}</Typography>
    </Button>
  );
};

export default SkipReviewButton;
