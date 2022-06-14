/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { Button, Typography } from "@mui/material";
import "./ModalActionButton.css";

export enum Variant {
  cancelButton,
  confirmButton,
  deleteButton,
}

type Props = {
  variant: Variant;
  handleClick?: () => void;
};

const ModalActionButton = ({ variant, handleClick }: Props) => {
  const buttonText = () => {
    switch (variant) {
      case Variant.cancelButton:
        return "Cancel";
      case Variant.confirmButton:
        return "Confirm";
      case Variant.deleteButton:
        return "Delete";
      default:
        return "";
    }
  };

  const buttonClassname = () => {
    switch (variant) {
      case Variant.cancelButton:
        return "cancel-button";
      case Variant.confirmButton:
        return "confirm-button";
      case Variant.deleteButton:
        return "delete-button";
      default:
        return "";
    }
  };

  return (
    <Button
      type="button"
      className={buttonClassname()}
      onClick={handleClick}
      data-testid={buttonClassname()}
    >
      <Typography className="modal-action-button-text">
        {buttonText()}
      </Typography>
    </Button>
  );
};

export default ModalActionButton;
