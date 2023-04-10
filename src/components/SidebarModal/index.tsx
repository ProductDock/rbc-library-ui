import { useEffect, useRef, useState } from "react";
import ModalTitle from "./ModalTitle";
import "./SidebarModal.css";

type Props = {
  children?: any;
  title: string;
  description?: string;
  open: Boolean;
  handleClose: Function;
};

const SidebarModal = ({
  open,
  handleClose,
  children,
  title,
  description,
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

  return showed ? (
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
      </div>
    </div>
  ) : null;
};

export default SidebarModal;
