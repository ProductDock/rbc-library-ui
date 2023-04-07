/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Typography } from "@mui/material";
import "./FormTitle.css";
import closeIcon from "../../../../img/icons/close-icon.svg";

type Props = {
  onSkip: () => void;
  text: string;
  description?: string;
};

const NewBookFormTitle = ({ onSkip, text, description }: Props) => {
  return (
    <>
      <div className="title-container">
        <Typography
          data-testid="form-title"
          className="form-title"
        >
          {text}
        </Typography>
        <img
          src={closeIcon}
          alt="closeIcon"
          onClick={onSkip}
          className="close-icon"
        />
      </div>
      {description && (
      <Typography className="book-title-description">
        {description}
      </Typography>
    )}
    </>
  );
};

export default NewBookFormTitle;
