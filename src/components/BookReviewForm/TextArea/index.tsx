import { TextareaAutosize, Typography } from "@mui/material";
import "./TextArea.css";

type Props = {
  maxLength: number;
  text: string;
  setText: Function;
};

const TextArea = ({ maxLength, text, setText }: Props) => {
  return (
    <>
      <TextareaAutosize
        data-testid="review-comment-textarea"
        maxLength={maxLength}
        minRows={5}
        className="description-text-area"
        onChange={(e) => setText(e.target.value)}
        placeholder="Please be as detailed as possible"
        defaultValue={text}
      />
      <div className="text-area-characters-num-container">
        <Typography className="text-area-characters-num">
          {text.length}
          <span className="max-length">/{maxLength}</span>
        </Typography>
      </div>
    </>
  );
};

export default TextArea;
