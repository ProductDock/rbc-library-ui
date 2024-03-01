import "./WarningScreen.css";
import { Typography } from "@mui/material";
import { useSuccessScreenContext } from "../../store/books/success/SuccessScreenContext";

export interface SuccessScreenRefObject {
  show?: () => void;
}

const WarningScreen = () => {
  const { showed, successMessage, gratitudeMessage } =
    useSuccessScreenContext();

  if (showed) {
    return (
      <div className="warning-screen-container" data-testid="snackbar">
        <div className="warning-screen-content">
          <Typography className="warning-text">Warning!</Typography>
          <Typography className="warning-message">{successMessage}</Typography>
          <Typography className="gratitude-message">
            {gratitudeMessage}
          </Typography>
        </div>
      </div>
    );
  }

  return null;
};

export default WarningScreen;
