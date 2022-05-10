import { useRef } from "react";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookRentButton from "./BookRentButton";
import ConfirmationModal, {
  ConfirmationRefObject,
} from "../../Modals/ConfirmationModal";
import { actions } from "../../../store/books/BooksActions";

const confirmRentingModalTitle = "Rent a book";
const confirmRentingModalDescription =
  "Please confirm your book rental and enjoy reading a book.";

const BookRentAction = () => {
  const { performAction, showSuccessScreen } = useBookDetailsContext();

  const modal = useRef<ConfirmationRefObject>(null);

  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();

  const onSuccessHandler = () => {
    hideModal();
    showSuccessScreen?.();
  };

  const rentABook = () => performAction?.(actions.RENT_BOOK, onSuccessHandler);

  return (
    <>
      <BookRentButton onClick={showModal} />
      <ConfirmationModal
        ref={modal}
        title={confirmRentingModalTitle}
        description={confirmRentingModalDescription}
        onConfirmation={rentABook}
      />
    </>
  );
};

export default BookRentAction;
