/* eslint-disable react/jsx-no-useless-fragment */
import { useMediaQuery } from "@mui/material";
import { MediaQueries } from "../../constants/mediaQueries";
import SuccessScreen from "../../pages/BookDetailsPage/SuccessScreen";
import { useSuccessScreenContext } from "../../store/books/success/SuccessScreenContext";
import SnackbarAlert from "../Snackbar";

const Notification = () => {
  const { showed, hideSuccessScreen, successMessage, gratitudeMessage } =
    useSuccessScreenContext();
  const isLargeScreen = useMediaQuery(MediaQueries.LARGE);

  return (
    <>
      {isLargeScreen ? (
        <SnackbarAlert
          showed={showed}
          onClose={hideSuccessScreen}
          autoHideDuration={5000}
          title="Success!"
          description={successMessage}
          innerMessage={gratitudeMessage}
        />
      ) : (
        <SuccessScreen />
      )}
    </>
  );
};

export default Notification;
