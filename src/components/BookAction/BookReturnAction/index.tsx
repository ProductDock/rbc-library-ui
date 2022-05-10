import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookReturnButton from "../../BookActionButton/BookReturnButton";
import ConfirmationModal from "../../Modals/ConfirmationModal";

const confirmReturnModalTitle = "Please confirm book return";
const confirmReturnModalDescription =
  "After confirmation, you will receive an email with confirmation of book return";

const BookReturnAction = () => {
  const { showedConfirmationModal, hideConfirmationModal, performAction } =
    useBookDetailsContext();

  return (
    <>
      <BookReturnButton />
      <ConfirmationModal
        title={confirmReturnModalTitle}
        description={confirmReturnModalDescription}
        showed={showedConfirmationModal}
        hideModal={hideConfirmationModal}
        handleConfirm={performAction}
      />
    </>
  );
};

export default BookReturnAction;
