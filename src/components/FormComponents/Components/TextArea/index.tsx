import { TextareaAutosize, Typography } from "@mui/material";
import "./TextArea.css";

type Props = {
  maxLength: number;
  text: string;
  setText: Function;
  minRows: number;
  placeholder: string;
  dataTestId: string;
  showTextLength: boolean;
};

const TextArea = ({ maxLength, text, setText, minRows, placeholder, dataTestId, showTextLength }: Props) => {
  return (
    <>
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
      { showTextLength && (
      <div className="text-area-characters-num-container">
        <Typography className="text-area-characters-num">
          {text.length}
          <span className="max-length">/{maxLength}</span>
        </Typography>
      </div>
    )}
    </>
  );
};

export default TextArea;
