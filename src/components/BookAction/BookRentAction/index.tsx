import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookRentButton from "./BookRentButton";
import ConfirmationModal from "../../Modals/ConfirmationModal";
import { actions } from "../../../store/books/BooksActions";

const confirmRentingModalTitle = "Please confirm book rental";
const confirmRentingModalDescription =
  "After confirmation, you will receive an email with details of the book rental";

const BookRentAction = () => {
  const {
    showedConfirmationModal,
    hideConfirmationModal,
    performAction,
    openConfirmationModal,
  } = useBookDetailsContext();

  return (
    <>
      <BookRentButton onClick={openConfirmationModal} />
      <ConfirmationModal
        title={confirmRentingModalTitle}
        description={confirmRentingModalDescription}
        showed={showedConfirmationModal}
        hideModal={hideConfirmationModal}
        handleConfirm={() => performAction?.(actions.RENT_BOOK)}
      />
    </>
  );
};

export default BookRentAction;
