/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Typography } from "@mui/material";
import "./ModalTitle.css";
import closeIcon from "../../../img/icons/close-icon.svg";

type Props = {
  title: string;
  description?: string;
  hideModal?: (e: any) => void;
};

const ModalTitle = ({ title, description, hideModal }: Props) => {
  return (
    <>
      <div className="sidebar-modal-title-container">
        <Typography data-testid="modal-title" className="modal-title">
          {title}
        </Typography>
        <img
          id="close-x"
          src={closeIcon}
          alt="closeIcon"
          onClick={hideModal}
          className="close-icon"
        />
      </div>
      {description && (
        <Typography className="modal-title-description">
          {description}
        </Typography>
      )}
    </>
  );
};

export default ModalTitle;
