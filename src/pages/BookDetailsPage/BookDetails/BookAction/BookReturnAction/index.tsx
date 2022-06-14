import { useRef } from "react";
import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../../../../store/books/details/BookDetailsContext";
import ConfirmationModal, {
  ActionVariant,
  ConfirmationRefObject,
} from "../../../../../components/Modals/ConfirmationModal";
import "./BookReturnAction.css";
import { useBookReviewContext } from "../../../../../store/books/reviews/BookReviewContext";
import { BookReviewFormVariant } from "../../../../../store/books/reviews/Types";
import { useAuthContext } from "../../../../../store/auth/AuthContext";

const title = "Return the book";
const description = "Are you sure you want to return the book?";

const BookReturnAction = () => {
  const { userProfile } = useAuthContext();
  const { returnABook, book } = useBookDetailsContext();
  const { showReviewForm, selectReview } = useBookReviewContext();

  const modal = useRef<ConfirmationRefObject>(null);

  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();

  const findExistingReview = () =>
    book?.reviews?.find((review) => review.userId === userProfile?.email);

  const onSuccessHandler = () => {
    hideModal();
    const review = findExistingReview();

    if (review) {
      selectReview?.({
        rating: review.rating,
        recommendation: review.recommendation,
        comment: review.comment,
      });
      showReviewForm?.(BookReviewFormVariant.EDIT);
    } else showReviewForm?.(BookReviewFormVariant.CREATE);
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
        variant={ActionVariant.confirm}
      />
    </>
  );
};

export default BookReturnAction;
