import { TextareaAutosize } from "@mui/material";
import "./TextArea.css";

type Props = {
  maxLength: number;
  text: string;
  setText: Function;
  minRows: number;
  placeholder: string;
  dataTestId: string;
};

const TextArea = ({ maxLength, text, setText, minRows, placeholder, dataTestId }: Props) => {
  return (
    <TextareaAutosize
      data-testid={dataTestId}
      maxLength={maxLength}
      minRows={minRows}
      maxRows={10}
      className="text-area"
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
      defaultValue={text}
    />
  );
};

export default TextArea;
