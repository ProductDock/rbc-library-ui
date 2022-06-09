/* eslint-disable react/jsx-no-useless-fragment */
import { useMediaQuery } from "@mui/material";
import { MediaQueries } from "../../../../constants/mediaQueries";
import SuccessScreen from "../../SuccessScreen";
import { useSuccessScreenContext } from "../../../../store/books/success/SuccessScreenContext";
import SnackbarAlert from "../../../../components/Snackbar";

const Notification = () => {
  const { showed, hideSuccessScreen, successMessage } =
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
          innerMessage="Thank you for using PD library"
        />
      ) : (
        <SuccessScreen />
      )}
    </>
  );
};

export default Notification;
