import { TextareaAutosize, Typography } from "@mui/material";
import "./TextArea.css";

type Props = {
  maxLentgth: number;
  text: string;
  setText: Function;
};

const TextArea = ({ maxLentgth, text, setText }: Props) => {
  return (
    <>
      <TextareaAutosize
        data-testid="review-comment-textarea"
        maxLength={maxLentgth}
        minRows={5}
        className="css-ahj2mt-MuiTypography-root description-text-area"
        onChange={(e) => setText(e.target.value)}
        placeholder="Please be as detailed as possible"
      />
      <div className="text-area-characters-num-container">
        <Typography className="text-area-characters-num">
          {text.length}
          <span className="max-length">/{maxLentgth}</span>
        </Typography>
      </div>
    </>
  );
};

export default TextArea;
