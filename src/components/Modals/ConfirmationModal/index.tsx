/* eslint-disable no-unused-vars */
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
import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import ModalActionButton, { Variant } from "./ModalActionButton";
import closeIcon from "../../../img/icons/close-icon.svg";

export enum ActionVariant {
  confirm,
  delete,
  notify,
  unsubscribe,
}

type Props = {
  title: string;
  description: any;
  children?: any;
  onConfirmation?: () => void;
  variant: ActionVariant;
};

export interface ConfirmationRefObject {
  hideModal?: () => void;
  showModal?: () => void;
}

const ConfirmationModal = forwardRef(
  (
    { onConfirmation, title, description, children, variant }: Props,
    ref: Ref<ConfirmationRefObject>
  ) => {
    const [showed, setShowed] = useState(false);

    const showModal = () => setShowed(true);
    const hideModal = () => setShowed(false);

    useImperativeHandle(ref, () => ({ showModal, hideModal }));

    return (
      <Dialog open={showed} data-testid="confirmation-modal">
        <DialogTitle className="modal-title-container">
          <Typography className="modal-title">
            <b> {title}</b>
          </Typography>
          <img
            src={closeIcon}
            alt="closeIcon"
            onClick={hideModal}
            className="close-icon-modal"
          />
        </DialogTitle>
        <DialogContent className="modal-content">
          <Typography className="modal-description">{description}</Typography>
        </DialogContent>
        {children}
        <DialogActions className="action-container">
          <ModalActionButton
            variant={Variant.cancelButton}
            handleClick={hideModal}
          />
          {variant === ActionVariant.delete && (
            <ModalActionButton
              variant={Variant.deleteButton}
              handleClick={onConfirmation}
            />
          )}
          {variant === ActionVariant.confirm && (
            <ModalActionButton
              variant={Variant.confirmButton}
              handleClick={onConfirmation}
            />
          )}
          {variant === ActionVariant.unsubscribe && (
            <ModalActionButton
              variant={Variant.unsubscribeButton}
              handleClick={onConfirmation}
            />
          )}
        </DialogActions>
      </Dialog>
    );
  }
);

export default ConfirmationModal;
