/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
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

type Props = {
  reviewer: string;
  reviewerId: string;
  rating: number;
  recommendation: BookRecommendations[];
  comment: string;
  ratingsCount: number;
  actionOnClick: (review: Review) => void;
};

const ReviewCard = ({
  reviewer,
  reviewerId,
  rating,
  recommendation,
  comment,
  ratingsCount,
  actionOnClick,
}: Props) => {
  const { userProfile } = useAuthContext();
  const isYourReview = reviewerId === userProfile?.email;
  const capitalCaseRecommendation = recommendation?.map((r) => {
    const lowerCaseRecommendation = r.toLowerCase();
    return capitalizeFirstLetter(lowerCaseRecommendation);
  });
  const recommendationString = capitalCaseRecommendation?.join(", ");
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
        <div className="review-action-container-edit">
          {userProfile?.email === reviewerId ? (
            <Link
              className="edit-a-review-button"
              underline="none"
              data-testid="edit-a-review-button"
              onClick={() =>
                actionOnClick({
                  userFullName: reviewer,
                  userId: reviewerId,
                  rating,
                  recommendation,
                  comment,
                })
              }
            >
              <img
                src={editIcon}
                alt="editIcon"
                className="edit-a-review-button-icon"
              />
            </Link>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
