import { Button, Typography } from "@mui/material";
import "./CancelButton.css";

type Props = {
  onClick: () => void;
  text: string;
};

const CancelButton = ({ text, onClick }: Props) => {
  return (
    <Button
      className="cancel-button"
      onClick={onClick}
      data-testid="cancel-button"
    >
      <Typography className="cancel-button-text">{text}</Typography>
    </Button>
  );
};

export default CancelButton;
