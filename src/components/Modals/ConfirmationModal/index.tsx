/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  DialogTitle,
} from "@mui/material";
import "./ConfirmationModal.css";
import ModalActionButton, { Variant } from "./ModalActionButton";
import closeIcon from "../../../img/icons/close-icon.svg";

type Props = {
  showed: boolean;
  title: string;
  description: string;
  hideModal?: () => void;
  handleConfirm?: () => void;
};

const ConfirmationModal = ({
  showed,
  hideModal,
  handleConfirm,
  title,
  description,
}: Props) => {
  return (
    <Dialog open={showed}>
      <DialogTitle className="modal-title-container">
        <Typography className="modal-title">
          <b> {title}</b>
        </Typography>
        <img src={closeIcon} alt="closeIcon" onClick={hideModal} />
      </DialogTitle>
      <DialogContent className="modal-content">
        <Typography className="modal-description">{description}</Typography>
      </DialogContent>
      <DialogActions className="action-container">
        <ModalActionButton
          variant={Variant.cancelButton}
          handleClick={hideModal}
        />
        <ModalActionButton
          variant={Variant.confirmButton}
          handleClick={handleConfirm}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
