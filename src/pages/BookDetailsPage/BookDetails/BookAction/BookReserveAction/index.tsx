import { useRef } from "react";
import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../../../../store/books/details/BookDetailsContext";
import ConfirmationModal, {
  ConfirmationRefObject,
} from "../../../../../components/Modals/ConfirmationModal";
import { useSuccessScreenContext } from "../../../../../store/books/success/SuccessScreenContext";
import "./BookReserveAction.css";

const title = "Reserve the book";
const description =
  "After reservation, the book will wait for you for 4 working days. Pick up the book in the office and mark it as rented by using QR system.";
const successMessage = "The book has been successfully reserved";

const BookReserveAction = () => {
  const { reserveABook, reloadBook } = useBookDetailsContext();
  const { showSuccessScreen } = useSuccessScreenContext();

  const modal = useRef<ConfirmationRefObject>(null);

  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();

  const onSuccessHandler = () => {
    hideModal();
    reloadBook?.();
    showSuccessScreen?.(successMessage);
  };

  return (
    <>
      <button
        type="button"
        className="reserve-button"
        onClick={showModal}
        data-testid="rent-book-button"
      >
        <Typography>Reserve the book</Typography>
      </button>
      <ConfirmationModal
        ref={modal}
        title={title}
        description={description}
        onConfirmation={() => reserveABook?.(onSuccessHandler)}
      />
    </>
  );
};

export default BookReserveAction;
