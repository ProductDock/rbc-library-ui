import { useRef } from "react";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookRentButton from "./BookRentButton";
import ConfirmationModal, {
  ConfirmationRefObject,
} from "../../Modals/ConfirmationModal";
import SuccessPage, {
  SuccessPageRefObject,
} from "../../Messages/Success/SuccessPage";

const title = "Rent a book";
const description = "Please confirm your book rental and enjoy reading a book.";
const successMessage = "You have successfully rented a book";

const BookRentAction = () => {
  const { rentABook, reloadBook } = useBookDetailsContext();

  const modal = useRef<ConfirmationRefObject>(null);
  const successPage = useRef<SuccessPageRefObject>(null);

  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();
  const showSuccessScreen = () => successPage?.current?.show?.();

  const onSuccessHandler = () => {
    hideModal();
    showSuccessScreen?.();
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
      <SuccessPage
        ref={successPage}
        successMessage={successMessage}
        onSuccessDisappear={reloadBook}
      />
    </>
  );
};

export default BookRentAction;
