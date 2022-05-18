/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { Button, Typography } from "@mui/material";
import "./ModalActionButton.css";

export enum Variant {
  cancelButton,
  confirmButton,
}

type Props = {
  variant: Variant;
  handleClick?: () => void;
};

const ModalActionButton = ({ variant, handleClick }: Props) => {
  const buttonText = () =>
    variant === Variant.cancelButton ? "Cancel" : "Confirm";

  const buttonClassname = () =>
    variant === Variant.cancelButton ? "cancel-button" : "confirm-button";

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
