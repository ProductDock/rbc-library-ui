import "./SuccessPage.css";
import { Typography } from "@mui/material";
import successIcon from "../../../../img/icons/success-icon.svg";

const SuccessPage = () => {
  return (
    <div className="success-page-container">
      <div className="success-page-content">
        <img src={successIcon} alt="successIcon" />
        <Typography className="success-text">Success!</Typography>
        <Typography className="success-message">
          You have successfully rented a book
        </Typography>
        <Typography className="gratitude-message">
          Thank you for using PD library{" "}
        </Typography>
      </div>
    </div>
  );
};

export default SuccessPage;
