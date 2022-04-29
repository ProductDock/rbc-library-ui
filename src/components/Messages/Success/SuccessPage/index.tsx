import "./SuccessPage.css";
import { Typography } from "@mui/material";
import successIcon from "../../../../img/icons/success-icon.svg";

type Props = {
  successMessage: string | null;
};

const SuccessPage = ({ successMessage }: Props) => {
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
};

export default SuccessPage;
