/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Typography } from "@mui/material";
import "./FormTitle.css";
import closeIcon from "../../../../img/icons/close-icon.svg";

type Props = {
  onSkip: () => void;
};

const NewBookFormTitle = ({ onSkip }: Props) => {
  return (
    <div className="title-container">
      <Typography
        data-testid="new-book-form-title"
        className="new-book-title"
      >
        Add a new book
      </Typography>
      <img
        src={closeIcon}
        alt="closeIcon"
        onClick={onSkip}
        className="close-icon"
      />
    </div>
  );
};

export default NewBookFormTitle;
