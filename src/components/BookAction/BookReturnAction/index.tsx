import { useRef } from "react";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookReturnButton from "./BookReturnButton";
import ConfirmationModal, {
  ConfirmationRefObject,
} from "../../Modals/ConfirmationModal";
import { actions } from "../../../store/books/BooksActions";

const confirmReturnModalTitle = "Return the book";
const confirmReturnModalDescription =
  "Are you sure you want to return the book?";

const BookReturnAction = () => {
  const { performAction, showSuccessScreen } = useBookDetailsContext();

  const modal = useRef<ConfirmationRefObject>(null);

  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();

  const onSuccessHandler = () => {
    hideModal();
    showSuccessScreen?.();
  };

  const returnABook = () =>
    performAction?.(actions.RETURN_BOOK, onSuccessHandler);

  return (
    <>
      <BookReturnButton onClick={showModal} />
      <ConfirmationModal
        ref={modal}
        title={confirmReturnModalTitle}
        description={confirmReturnModalDescription}
        onConfirmation={returnABook}
      />
    </>
  );
};

export default BookReturnAction;
