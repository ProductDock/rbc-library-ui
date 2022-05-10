/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookReturnButton from "./BookReturnButton";
import ConfirmationModal, {
  ConfirmationRefObject,
} from "../../Modals/ConfirmationModal";
import { actions } from "../../../store/books/BooksActions";
import SuccessPage, {
  SuccessPageRefObject,
} from "../../Messages/Success/SuccessPage";

const title = "Return the book";
const description = "Are you sure you want to return the book?";
const successMessage = "You have successfully returned a book";

const BookReturnAction = () => {
  const { returnABook, reloadBook } = useBookDetailsContext();

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
      <BookReturnButton onClick={showModal} />
      <ConfirmationModal
        ref={modal}
        title={title}
        description={description}
        onConfirmation={() => returnABook?.(onSuccessHandler)}
      />
      <SuccessPage
        ref={successPage}
        successMessage={successMessage}
        onSuccessDisappear={reloadBook}
      />
    </>
  );
};

export default BookReturnAction;
