import "./SuccessPage.css";
import { Typography } from "@mui/material";
import successIcon from "../../../../img/icons/success-icon.svg";
import { useSuccessScreenContext } from "../../../../store/success/SuccessScreenContext";

export interface SuccessPageRefObject {
  show?: () => void;
}

const SuccessPage = () => {
  const { showed, successMessage } = useSuccessScreenContext();

  if (showed) {
    return (
      <div className="success-page-container">
        <div className="success-page-content">
          <img src={successIcon} alt="successIcon" />
          <Typography className="success-text">Success!</Typography>
          <Typography className="success-message">{successMessage}</Typography>
          <Typography className="gratitude-message">
            Thank you for using PD library
          </Typography>
        </div>
      </div>
    );
  }

  return null;
};

export default SuccessPage;
