import { Typography } from "@mui/material";
import userAvatar from "../../../../../../img/userAvatar.svg";
import "./ReviewCard.css";
import BookStarRating from "../../../../../../components/BookStarRating";
import { useAuthContext } from "../../../../../../store/auth/AuthContext";

type Props = {
  reviewer: string;
  reviewerId: string;
  rating: number;
  recommendation: string[];
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
  const recommendationString = recommendation?.join(", ");

  const isYourReview = () => reviewerId === userProfile?.email;

  return (
    <div
      className={
        isYourReview()
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
            <Typography>{isYourReview() ? "Your review" : reviewer}</Typography>
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
    </div>
  );
};
export default ReviewCard;
