/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookReturnButton from "./BookReturnButton";
import ConfirmationModal, {
  ConfirmationRefObject,
} from "../../Modals/ConfirmationModal";
import SuccessPage, {
  SuccessPageRefObject,
} from "../../Messages/Success/SuccessPage";
import BookReviewForm from "../../BookReviewForm";
import "./BookReturnAction.css";

const title = "Return the book";
const description = "Are you sure you want to return the book?";
const successMessage = "You have successfully returned the book";

const BookReturnAction = () => {
  const { returnABook, reloadBook } = useBookDetailsContext();
  const [showedReviewForm, setShowedReviewForm] = useState(false);

  const modal = useRef<ConfirmationRefObject>(null);
  const successPage = useRef<SuccessPageRefObject>(null);

  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();
  const showSuccessScreen = () => successPage?.current?.show?.();
  const showReviewForm = () => setShowedReviewForm(true);
  const hideReviewForm = () => setShowedReviewForm(false);

  const onSuccessHandler = () => {
    hideModal();
    showReviewForm();
  };

  const endReview = () => {
    showSuccessScreen();
    hideReviewForm();
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
      {showedReviewForm && (
        <div className="book-review-form-container">
          <BookReviewForm onSkip={endReview} onSuccessCallback={endReview} />
        </div>
      )}
      <SuccessPage
        ref={successPage}
        successMessage={successMessage}
        onSuccessDisappear={reloadBook}
      />
    </>
  );
};

export default BookReturnAction;
