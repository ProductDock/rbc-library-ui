import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookRentButton from "./BookRentButton";
import ConfirmationModal from "../../Modals/ConfirmationModal";
import { actions } from "../../../store/books/BooksActions";

const confirmRentingModalTitle = "Rent a book";
const confirmRentingModalDescription =
  "Please confirm your book rental and enjoy reading a book.";

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
