import { Button, Typography } from "@mui/material";
import "./SubmitNewBookButton.css";

type Props = {
  text?: string;
  onClick: () => void;
  disabled: boolean;
};

const SubmitNewBookButton = ({ text, onClick, disabled }: Props) => {
  const buttonTextClass = () =>
    disabled
      ? "submit-new-book-button-text-disabled"
      : "submit-new-book-button-text";

  return (
    <Button
      data-testid="submit-new-book-button"
      disabled={disabled}
      className="submit-new-book-button"
      onClick={onClick}
    >
      <Typography className={buttonTextClass()}>{text}</Typography>
    </Button>
  );
};

export default SubmitNewBookButton;
