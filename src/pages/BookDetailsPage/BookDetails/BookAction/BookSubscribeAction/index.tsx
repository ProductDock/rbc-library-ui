/* eslint-disable react/jsx-no-useless-fragment */
import "./BookSubscribeAction.css";
import { Typography } from "@mui/material";
import { useParams } from "react-router";
import { useRef, useState } from "react";
import useBookSubscription from "../../../../../hooks/useBookSubscription";
import { useSuccessScreenContext } from "../../../../../store/books/success/SuccessScreenContext";
import { warningMessages } from "../../../../../constants/warningMessages";
import { successMessages } from "../../../../../constants/successMessages";
import ConfirmationModal, {
  ActionVariant,
  ConfirmationRefObject,
} from "../../../../../components/Modals/ConfirmationModal";
import { ConfirmationMessages } from "../../../../../constants/confirmationMessages";

const BookSubscribeAction = () => {
  const { bookId } = useParams();
  const { isSubscribed, subscribe, unsubscribe, getSubscription } =
    useBookSubscription(parseInt(bookId || "0", 10));
  const { showSuccessScreen, showWarningScreen } = useSuccessScreenContext();

  const modal = useRef<ConfirmationRefObject>(null);
  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();

  const [action, setAction] = useState<ActionVariant>(ActionVariant.confirm);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const subscribeClick = () => {
    setAction(ActionVariant.confirm);
    setTitle(ConfirmationMessages.BOOK_SUBSCRIBE_TITLE);
    setDescription(ConfirmationMessages.BOOK_SUBSCRIBE_DESCRIPTION);
    showModal();
  };

  const unsubscribeClick = () => {
    setAction(ActionVariant.unsubscribe);
    setTitle(ConfirmationMessages.BOOK_UNSUBSCRIBE_TITLE);
    setDescription(ConfirmationMessages.BOOK_UNSUBSCRIBE_DESCRIPTION);
    showModal();
  };

  const handleConfirm = () => {
    hideModal();

    if (action === ActionVariant.confirm) {
      subscribe()
        .then(() => {
          showSuccessScreen?.(
            successMessages.BOOK_SUBSCRIPTION_TITLE,
            successMessages.BOOK_SUBSCRIPTION_DESCRIPTION
          );
          getSubscription();
        })
        .catch((e) =>
          showWarningScreen?.(
            warningMessages.BOOK_SUBSCRIPTION_TITLE,
            e.response.data.message
          )
        );
    } else {
      unsubscribe()
        .then(() => getSubscription())
        .catch((e) =>
          showWarningScreen?.(
            warningMessages.BOOK_UNSUBSCRIPTION_TITLE,
            e.response.data.message
          )
        );
    }
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
          <Typography>Leave the waiting list</Typography>
        </button>
      ) : (
        <button
          type="button"
          className="subscribe-button"
          data-testid="subscribe-button"
          onClick={subscribeClick}
        >
          <Typography>Join the waiting list</Typography>
        </button>
      )}
      <ConfirmationModal
        ref={modal}
        title={title}
        description={description}
        onConfirmation={() => handleConfirm()}
        variant={action}
      />
    </>
  );
};

export default BookSubscribeAction;
