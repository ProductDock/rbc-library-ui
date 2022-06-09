import { useRef } from "react";
import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../../../../store/books/details/BookDetailsContext";
import ConfirmationModal, {
  ConfirmationRefObject,
} from "../../../../../components/Modals/ConfirmationModal";
import "./BookReturnAction.css";
import { useBookReviewContext } from "../../../../../store/books/reviews/BookReviewContext";
import { BookReviewFormVariant } from "../../../../../store/books/reviews/Types";

const title = "Return the book";
const description = "Are you sure you want to return the book?";

const BookReturnAction = () => {
  const { returnABook } = useBookDetailsContext();
  const { showReviewForm } = useBookReviewContext();

  const modal = useRef<ConfirmationRefObject>(null);

  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();

  const onSuccessHandler = () => {
    hideModal();
    showReviewForm?.(BookReviewFormVariant.CREATE);
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
    </>
  );
};

export default BookReturnAction;
