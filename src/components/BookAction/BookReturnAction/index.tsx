import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookReturnButton from "./BookReturnButton";
import ConfirmationModal from "../../Modals/ConfirmationModal";
import { actions } from "../../../store/books/BooksActions";

const confirmReturnModalTitle = "Please confirm book return";
const confirmReturnModalDescription =
  "After confirmation, you will receive an email with confirmation of book return";

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
