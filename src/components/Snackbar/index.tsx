import { Alert, AlertTitle, Snackbar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import "./Snackbar.css";

type Props = {
  showed: boolean;
  title: string;
  description?: string;
  innerMessage?: string;
  autoHideDuration: number;
  onClose?: () => void;
};

const SnackbarAlert = ({
  showed,
  onClose,
  autoHideDuration,
  title,
  description,
  innerMessage,
}: Props) => {
  return (
    <Snackbar
      open={showed}
      onClose={onClose}
      className="success-snackbar"
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        severity="success"
        onClose={onClose}
      >
        <AlertTitle>{title}</AlertTitle>
        <div className="description-message">{description}</div>
        <div className="inner-message">{innerMessage}</div>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
