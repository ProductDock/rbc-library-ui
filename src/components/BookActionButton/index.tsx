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

type Props = {
  status?: string;
};

const BookActionButton = ({ status }: Props) => {
  const { showedConfirmationModal, hideConfirmationModal, performAction } =
    useBookDetailsContext();
  if (status === "AVAILABLE") {
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
  if (status === "RENTED_BY_YOU") {
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
  }

  return null;
};

export default BookActionButton;
