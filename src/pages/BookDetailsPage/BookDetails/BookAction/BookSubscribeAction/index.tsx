/* eslint-disable react/jsx-no-useless-fragment */
import "./BookSubscribeAction.css";
import { Typography } from "@mui/material";
import { useParams } from "react-router";
import useSubscribe from "../../../../../hooks/useSubscribe";
import { useSuccessScreenContext } from "../../../../../store/books/success/SuccessScreenContext";

const successMessage = "You have successfully subscribed";
const gratitudeMessage =
  "You will receive a notification once the book becomes available";

const BookSubscribeAction = () => {
  const { bookId } = useParams();
  const { isSubscribed, subscribe, unsubscribe, getSubscription } =
    useSubscribe(parseInt(bookId || "0", 10));
  const { showSuccessScreen } = useSuccessScreenContext();

  const subscribeClick = () => {
    subscribe().then(() => {
      showSuccessScreen?.(successMessage, gratitudeMessage);
      getSubscription();
    });
  };

  const unsubscribeClick = () => {
    unsubscribe().then(() => getSubscription());
  };

  return (
    <>
      {isSubscribed ? (
        <button
          type="button"
          className="unsubscribe-button"
          data-testid="unsubscribe-button"
          onClick={unsubscribeClick}
        >
          <Typography>Unsubscribe</Typography>
        </button>
      ) : (
        <button
          type="button"
          className="subscribe-button"
          data-testid="subscribe-button"
          onClick={subscribeClick}
        >
          <Typography>Subscribe</Typography>
        </button>
      )}
    </>
  );
};

export default BookSubscribeAction;
