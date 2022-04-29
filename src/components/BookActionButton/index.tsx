import { useBookDetailsContext } from "../../store/books/details/BookDetailsContext";
import ConfirmationModal from "../Modals/ConfirmationModal";
import BookRentButton from "./BookRentButton";
import BookReturnButton from "./BookReturnButton";

const confirmRentingModalTitle = "Please confirm book rental";
const confirmRentingModalDescription =
  "After confirmation, you will receive an email with details of the book rental";

const confirmReturnModalTitle = "Please confirm book return";
const confirmReturnModalDescription =
  "After confirmation, you will receive an email with confirmation of book return";

const BookActionButton = () => {
  const {
    status,
    showedConfirmationModal,
    hideConfirmationModal,
    performAction,
  } = useBookDetailsContext();
  if (status === "available") {
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
  }
  return (
    <>
      <ConfirmationModal
        title={confirmReturnModalTitle}
        description={confirmReturnModalDescription}
        showed={showedConfirmationModal}
        hideModal={hideConfirmationModal}
        handleConfirm={performAction}
      />
      <BookReturnButton />
    </>
  );
};

export default BookActionButton;
