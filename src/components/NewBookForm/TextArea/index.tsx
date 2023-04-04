import { TextareaAutosize } from "@mui/material";
import "./TextArea.css";

type Props = {
  maxLength: number;
  text: string;
  setText: Function;
  minRows: number;
  placeholder: string;
};

const TextArea = ({ maxLength, text, setText, minRows, placeholder }: Props) => {
  return (
    <TextareaAutosize
      data-testid="review-comment-textarea"
      maxLength={maxLength}
      minRows={minRows}
      className="text-area"
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
      defaultValue={text}
    />
  );
};

export default TextArea;
