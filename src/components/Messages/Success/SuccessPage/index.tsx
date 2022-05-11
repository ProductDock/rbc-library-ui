import "./SuccessPage.css";
import { Typography } from "@mui/material";
import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import successIcon from "../../../../img/icons/success-icon.svg";

type Props = {
  onSuccessDisappear?: () => void;
  successMessage: string | null;
};

export interface SuccessPageRefObject {
  show?: () => void;
}

const SuccessPage = forwardRef(
  (
    { successMessage, onSuccessDisappear }: Props,
    ref: Ref<SuccessPageRefObject>
  ) => {
    const [showed, setShowed] = useState(false);

    const show = () => {
      setShowed(true);
      onSuccessDisappear?.();
      setTimeout(() => setShowed(false), 2000);
    };

    useImperativeHandle(ref, () => ({ show }));

    if (showed) {
      return (
        <div className="success-page-container">
          <div className="success-page-content">
            <img src={successIcon} alt="successIcon" />
            <Typography className="success-text">Success!</Typography>
            <Typography className="success-message">
              {successMessage}
            </Typography>
            <Typography className="gratitude-message">
              Thank you for using PD library
            </Typography>
          </div>
        </div>
      );
    }

    return null;
  }
);

export default SuccessPage;
