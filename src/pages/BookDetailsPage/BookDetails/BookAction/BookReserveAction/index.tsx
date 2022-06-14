import { useRef } from "react";
import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../../../../store/books/details/BookDetailsContext";
import ConfirmationModal, {
  ActionVariant,
  ConfirmationRefObject,
} from "../../../../../components/Modals/ConfirmationModal";
import { useSuccessScreenContext } from "../../../../../store/books/success/SuccessScreenContext";
import "./BookReserveAction.css";
import reserveDialog from "../../../../../img/modals/reserve-a-book-qr.png";

const title = "Reserve the book";
const description = (
  <>
    After reservation, the book will wait for you for
    <strong> 4 working days</strong>. Pick up the book in the office and
    <strong> mark it as rented</strong> by using QR system.
  </>
);
const successMessage = "The book has been successfully reserved";
const gratitudeMessage = "You can go to the office to pick up the book";

const BookReserveAction = () => {
  const { reserveABook, reloadBook } = useBookDetailsContext();
  const { showSuccessScreen } = useSuccessScreenContext();

  const modal = useRef<ConfirmationRefObject>(null);

  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();

  const onSuccessHandler = () => {
    hideModal();
    reloadBook?.();
    showSuccessScreen?.(successMessage, gratitudeMessage);
  };

  return (
    <>
      <button
        type="button"
        className="reserve-button"
        onClick={showModal}
        data-testid="reserve-book-button"
      >
        <Typography>Reserve the book</Typography>
      </button>
      <ConfirmationModal
        ref={modal}
        title={title}
        description={description}
        onConfirmation={() => reserveABook?.(onSuccessHandler)}
        variant={ActionVariant.confirm}
      >
        <img
          src={reserveDialog}
          alt="reserve-a-book"
          className="reserve-a-book-modal-img"
        />
      </ConfirmationModal>
    </>
  );
};

export default BookReserveAction;
