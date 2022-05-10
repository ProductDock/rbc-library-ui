import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookRentButton from "../../BookActionButton/BookRentButton";
import ConfirmationModal from "../../Modals/ConfirmationModal";

const confirmRentingModalTitle = "Please confirm book rental";
const confirmRentingModalDescription =
  "After confirmation, you will receive an email with details of the book rental";

const BookRentAction = () => {
  const { showedConfirmationModal, hideConfirmationModal, performAction } =
    useBookDetailsContext();

  return (
    <>
      <BookRentButton />
      <ConfirmationModal
        title={confirmRentingModalTitle}
        description={confirmRentingModalDescription}
        showed={showedConfirmationModal}
        hideModal={hideConfirmationModal}
        handleConfirm={performAction}
      />
    </>
  );
};

export default BookRentAction;
