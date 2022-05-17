import { useRef } from "react";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookRentButton from "./BookRentButton";
import ConfirmationModal, {
  ConfirmationRefObject,
} from "../../Modals/ConfirmationModal";
import { useSuccessScreenContext } from "../../../store/success/SuccessScreenContext";

const title = "Rent the book";
const description =
  "Please confirm your book rental and enjoy reading the book.";
const successMessage = "You have successfully rented the book";

const BookRentAction = () => {
  const { rentABook, reloadBook } = useBookDetailsContext();
  const { showSuccessScreen } = useSuccessScreenContext();

  const modal = useRef<ConfirmationRefObject>(null);

  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();

  const onSuccessHandler = () => {
    hideModal();
    reloadBook?.();
    showSuccessScreen?.(successMessage);
  };

  return (
    <>
      <BookRentButton onClick={showModal} />
      <ConfirmationModal
        ref={modal}
        title={title}
        description={description}
        onConfirmation={() => rentABook?.(onSuccessHandler)}
      />
    </>
  );
};

export default BookRentAction;
