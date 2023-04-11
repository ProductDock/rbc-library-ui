import { Button, Typography } from "@mui/material";
import "./CancelButton.css";

type Props = {
  onClick: () => void;
  text: string;
};

const CancelButton = ({ text, onClick }: Props) => {
  return (
    <Button
      className="form-cancel-button"
      onClick={onClick}
      data-testid="sidebar-modal-cancel-button"
    >
      <Typography className="form-cancel-button-text">{text}</Typography>
    </Button>
  );
};

export default CancelButton;
