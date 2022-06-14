import { useRef } from "react";
import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../../../../store/books/details/BookDetailsContext";
import ConfirmationModal, {
  ActionVariant,
  ConfirmationRefObject,
} from "../../../../../components/Modals/ConfirmationModal";
import { useSuccessScreenContext } from "../../../../../store/books/success/SuccessScreenContext";
import "./BookRentAction.css";

const title = "Rent the book";
const description =
  "Please confirm your book rental and enjoy reading the book.";
const successMessage = "You have successfully rented the book";
const gratitudeMessage = "Thank you for using PD library";

const BookRentAction = () => {
  const { rentABook, reloadBook } = useBookDetailsContext();
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
        className="rent-button"
        onClick={showModal}
        data-testid="rent-book-button"
      >
        <Typography>Rent a book</Typography>
      </button>
      <ConfirmationModal
        ref={modal}
        title={title}
        description={description}
        onConfirmation={() => rentABook?.(onSuccessHandler)}
        variant={ActionVariant.confirm}
      />
    </>
  );
};

export default BookRentAction;
