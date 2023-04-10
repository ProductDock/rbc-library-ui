import { Button, Typography } from "@mui/material";
import "./SubmitButton.css";

type Props = {
  text?: string;
  onClick: Function;
  disabled: boolean;
};

const SubmitNewBookButton = ({ text, onClick, disabled }: Props) => {
  const buttonTextClass = () =>
    disabled ? "submit-button-text-disabled" : "submit-button-text";

  return (
    <Button
      data-testid="submit-button"
      disabled={disabled}
      className="submit-button"
      onClick={() => onClick()}
    >
      <Typography className={buttonTextClass()}>{text}</Typography>
    </Button>
  );
};

export default SubmitNewBookButton;
