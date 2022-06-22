import { Typography } from "@mui/material";
import "./NoBooksMessage.css";

type Props = {
  message: string;
  messageDescription: string;
};

const NoBooksMessage = ({ message, messageDescription }: Props) => {
  return (
    <>
      <Typography className="no-books-message-heading">{message}</Typography>
      <Typography className="no-books-message-text">
        {messageDescription}
      </Typography>
    </>
  );
};

export default NoBooksMessage;
