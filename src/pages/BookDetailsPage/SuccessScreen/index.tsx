import "./SuccessScreen.css";
import { Typography } from "@mui/material";
import successIcon from "../../../img/icons/success-icon.svg";
import { useSuccessScreenContext } from "../../../store/books/success/SuccessScreenContext";

export interface SuccessScreenRefObject {
  show?: () => void;
}

const SuccessScreen = () => {
  const { showed, successMessage, gratitudeMessage } =
    useSuccessScreenContext();

  if (showed) {
    return (
      <div className="success-screen-container">
        <div className="success-screen-content">
          <img src={successIcon} alt="successIcon" />
          <Typography className="success-text">Success!</Typography>
          <Typography className="success-message">{successMessage}</Typography>
          <Typography className="gratitude-message">
            {gratitudeMessage}
          </Typography>
        </div>
      </div>
    );
  }

  return null;
};

export default SuccessScreen;
