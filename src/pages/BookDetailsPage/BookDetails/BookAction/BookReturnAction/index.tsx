import { useRef, useState } from "react";
import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../../../../store/books/details/BookDetailsContext";
import ConfirmationModal, {
  ConfirmationRefObject,
} from "../../../../../components/Modals/ConfirmationModal";
import BookReviewForm from "../../../../../components/BookReviewForm";
import "./BookReturnAction.css";
import { useSuccessScreenContext } from "../../../../../store/books/success/SuccessScreenContext";

const title = "Return the book";
const description = "Are you sure you want to return the book?";
const successMessage = "You have successfully returned the book";

const BookReturnAction = () => {
  const { returnABook, reloadBook } = useBookDetailsContext();
  const { showSuccessScreen } = useSuccessScreenContext();

  const [showedReviewForm, setShowedReviewForm] = useState(false);

  const modal = useRef<ConfirmationRefObject>(null);

  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();
  const showReviewForm = () => setShowedReviewForm(true);
  const hideReviewForm = () => setShowedReviewForm(false);

  const onSuccessHandler = () => {
    hideModal();
    showReviewForm();
  };

  const endReview = () => {
    hideReviewForm();
    reloadBook?.();
    showSuccessScreen?.(successMessage);
  };

  return (
    <>
      <button
        type="button"
        className="return-button"
        onClick={showModal}
        data-testid="return-book-button"
      >
        <Typography>Return the book</Typography>
      </button>
      <ConfirmationModal
        ref={modal}
        title={title}
        description={description}
        onConfirmation={() => returnABook?.(onSuccessHandler)}
      />
      {showedReviewForm && (
        <div className="book-review-form-container">
          <BookReviewForm
            onSkip={endReview}
            onSuccessCallback={endReview}
            skipReviewButtonText="Skip"
          />
        </div>
      )}
    </>
  );
};

export default BookReturnAction;
