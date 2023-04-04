import { Button, Typography } from "@mui/material";
import "./CancelNewBookButton.css";

type Props = {
  onClick: () => void;
  text: string;
};

const CancelNewBookButton = ({ text, onClick }: Props) => {
  return (
    <Button
      className="cancel-new-book-button"
      onClick={onClick}
      data-testid="cancel-new-book-button"
    >
      <Typography className="cancel-new-book-button-text">{text}</Typography>
    </Button>
  );
};

export default CancelNewBookButton;
