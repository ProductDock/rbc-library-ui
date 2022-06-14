/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { Link, Typography } from "@mui/material";
import userAvatar from "../../../../../../img/userAvatar.svg";
import "./ReviewCard.css";
import BookStarRating from "../../../../../../components/BookStarRating";
import { useAuthContext } from "../../../../../../store/auth/AuthContext";
import { capitalizeFirstLetter } from "../../../../../../utils/stringUtil";
import {
  BookRecommendations,
  Review,
} from "../../../../../../store/books/details/Types";
import editIcon from "../../../../../../img/icons/edit-icon.svg";
import deleteIcon from "../../../../../../img/icons/delete-icon.svg";
import { useBookReviewContext } from "../../../../../../store/books/reviews/BookReviewContext";
import { BookReviewFormVariant } from "../../../../../../store/books/reviews/Types";
import { useBookDetailsContext } from "../../../../../../store/books/details/BookDetailsContext";
import ConfirmationModal, {
  ActionVariant,
  ConfirmationRefObject,
} from "../../../../../../components/Modals/ConfirmationModal";

const title = "Delete review";
const description = "Are you sure you want to delete the review";

type Props = {
  reviewer: string;
  reviewerId: string;
  rating: number;
  recommendation: BookRecommendations[];
  comment: string;
  ratingsCount: number;
};

const ReviewCard = ({
  reviewer,
  reviewerId,
  rating,
  recommendation,
  comment,
  ratingsCount,
}: Props) => {
  const { userProfile } = useAuthContext();
  const { selectReview, deleteReview, showReviewForm } = useBookReviewContext();
  const { book, reloadBook } = useBookDetailsContext();
  const modal = useRef<ConfirmationRefObject>(null);
  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();

  const isYourReview = reviewerId === userProfile?.email;

  const capitalCaseRecommendation = recommendation?.map((r) => {
    const lowerCaseRecommendation = r.toLowerCase();
    return capitalizeFirstLetter(lowerCaseRecommendation);
  });

  const recommendationString = capitalCaseRecommendation?.join(", ");

  const handleEditReview = () => {
    selectReview?.({
      rating,
      recommendation,
      comment,
    });
    showReviewForm?.(BookReviewFormVariant.EDIT);
  };

  const handleDeleteReview = () => {
    showModal();
  };

  const onSuccessHandler = () => {
    hideModal();
    reloadBook();
  };

  return (
    <div
      className={
        isYourReview
          ? "your-review-card-div review-card-div"
          : "review-card-div"
      }
      data-testid="review-card"
    >
      <div className="review-card-avatar">
        <img src={userAvatar} alt="" />
      </div>
      <div className="review-card-info">
        <div className="review-card-info-header">
          <div className="review-card-user-name">
            <Typography>{isYourReview ? "Your review" : reviewer}</Typography>
          </div>
          {rating && (
            <BookStarRating
              rating={rating}
              ratingsCount={ratingsCount}
              ratingsCountShow={false}
            />
          )}
        </div>
        <div className="review-card-comment">
          <Typography fontSize={14} fontWeight={300}>
            {comment}
          </Typography>
        </div>
        {recommendation && recommendation.length > 0 && (
          <div className="review-card-recommended">
            <Typography fontSize={14}>
              Recommended to - {recommendationString}
            </Typography>
          </div>
        )}
      </div>
      <div className="review-action-container">
        {userProfile?.email === reviewerId ? (
          <>
            <div className="review-action-container-edit">
              <Link
                className="edit-a-review-button"
                underline="none"
                data-testid="edit-a-review-button"
                onClick={handleEditReview}
              >
                <img
                  src={editIcon}
                  alt="editIcon"
                  className="edit-a-review-button-icon"
                />
              </Link>
            </div>
            <div className="review-action-container-delete">
              <Link
                className="delete-a-review-button"
                underline="none"
                data-testid="delete-a-review-button"
                onClick={handleDeleteReview}
              >
                <img
                  src={deleteIcon}
                  alt="deleteIcon"
                  className="delete-a-review-button-icon"
                />
              </Link>
            </div>
          </>
        ) : undefined}
      </div>
      <ConfirmationModal
        ref={modal}
        title={title}
        description={description}
        onConfirmation={() => deleteReview?.(book?.id || 0, onSuccessHandler)}
        variant={ActionVariant.delete}
      />
    </div>
  );
};
export default ReviewCard;
