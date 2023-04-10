import { useEffect, useRef, useState } from "react";
import CancelButton from "./CancelButton";
import ModalTitle from "./ModalTitle";
import "./SidebarFormModal.css";
import SubmitButton from "./SubmitButton";

type Props = {
  children?: any;
  title: string;
  submitButtonText: string;
  submitDisabled: boolean;
  cancelButtonText: string;
  description?: string;
  open: Boolean;
  handleClose: Function;
  handleSubmit: Function;
};

const SidebarFormModal = ({
  open,
  handleClose,
  children,
  title,
  description,
  submitButtonText,
  submitDisabled,
  cancelButtonText,
  handleSubmit,
}: Props) => {
  const outsideModal = useRef<any>(null);
  const [showed, setShowed] = useState(open);

  const hideModal = () => {
    handleClose?.();
  };

  const modalClickCaptured = (e: any) => {
    if (outsideModal?.current?.className === e.target.className) {
      handleClose?.();
    }
  };

  useEffect(() => {
    if (showed) {
      document.body.classList.add("no-scroll");
    }
  }, [showed]);

  useEffect(() => {
    if (open === false) {
      setShowed(false);
      document.body.classList.remove("no-scroll");
    } else {
      setShowed(true);
    }
  }, [open]);

  return (
    showed && (
      <div
        ref={outsideModal}
        className="sidebar-modal-wrapper"
        onClick={modalClickCaptured}
      >
        <div className="sidebar-modal-container">
          <ModalTitle
            title={title}
            description={description}
            hideModal={hideModal}
          />
          {children}
          <div className="sidebar-modal-form-actions-container">
            <SubmitButton
              text={submitButtonText}
              disabled={submitDisabled}
              onClick={handleSubmit}
            />
            <CancelButton text={cancelButtonText} onClick={hideModal} />
          </div>
        </div>
      </div>
    )
  );
};

export default SidebarFormModal;
