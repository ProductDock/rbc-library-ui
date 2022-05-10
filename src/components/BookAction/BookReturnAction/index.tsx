import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookReturnButton from "./BookReturnButton";
import ConfirmationModal from "../../Modals/ConfirmationModal";
import { actions } from "../../../store/books/BooksActions";

const confirmReturnModalTitle = "Return the book";
const confirmReturnModalDescription =
  "Are you sure you want to return the book?";

const BookReturnAction = () => {
  const {
    showedConfirmationModal,
    hideConfirmationModal,
    performAction,
    openConfirmationModal,
  } = useBookDetailsContext();

  return (
    <>
      <BookReturnButton onClick={openConfirmationModal} />
      <ConfirmationModal
        title={confirmReturnModalTitle}
        description={confirmReturnModalDescription}
        showed={showedConfirmationModal}
        hideModal={hideConfirmationModal}
        handleConfirm={() => performAction?.(actions.RETURN_BOOK)}
      />
    </>
  );
};

export default BookReturnAction;
