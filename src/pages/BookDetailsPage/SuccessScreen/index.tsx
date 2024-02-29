import "./SuccessScreen.css";
import { Typography } from "@mui/material";
import successIcon from "../../../img/icons/success-icon.svg";
import { useSuccessScreenContext } from "../../../store/books/success/SuccessScreenContext";

export interface SuccessScreenRefObject {
  show?: () => void;
}

const SuccessScreen = () => {
  const { showed, successMessage, gratitudeMessage, warning } =
    useSuccessScreenContext();

  if (showed) {
    return (
      <div className="success-screen-container" data-testid="snackbar">
        <div className="success-screen-content">
          {!warning && <img src={successIcon} alt="successIcon" />}
          <Typography className="success-text">
            {warning ? "Warning!" : "Success!"}
          </Typography>
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
