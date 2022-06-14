import { useRef } from "react";
import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../../../../store/books/details/BookDetailsContext";
import ConfirmationModal, {
  ActionVariant,
  ConfirmationRefObject,
} from "../../../../../components/Modals/ConfirmationModal";
import "./BookCancelReservationAction.css";

const title = "Cancel book reservation";
const description = "Are you sure you want to cancel your book reservation?";

const BookCancelReservationAction = () => {
  const { cancelBookReservation, reloadBook } = useBookDetailsContext();

  const modal = useRef<ConfirmationRefObject>(null);

  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();

  const onSuccessHandler = () => {
    hideModal();
    reloadBook?.();
  };

  return (
    <>
      <button
        type="button"
        className="cancel-button"
        onClick={showModal}
        data-testid="cancel-reservation-button"
      >
        <Typography>Cancel book reservation</Typography>
      </button>
      <ConfirmationModal
        ref={modal}
        title={title}
        description={description}
        onConfirmation={() => cancelBookReservation?.(onSuccessHandler)}
        variant={ActionVariant.confirm}
      />
    </>
  );
};

export default BookCancelReservationAction;
