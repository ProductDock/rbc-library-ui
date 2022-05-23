import { Typography } from "@mui/material";
import userAvatar from "../../../../../../img/userAvatar.svg";
import "./ReviewCard.css";
import BookStarRating from "../../../../../../components/BookStarRating";

type Props = {
  reviewer: string;
  rating: number;
  recommendation: string[];
  comment: string;
  ratingsCount: number;
};

const ReviewCard = ({
  reviewer,
  rating,
  recommendation,
  comment,
  ratingsCount,
}: Props) => {
  const recommendationString = recommendation?.join(", ");
  return (
    <div className="review-card-div" data-testid="review-card">
      <div className="review-card-avatar">
        <img src={userAvatar} alt="" />
      </div>
      <div className="review-card-info">
        <div className="review-card-info-header">
          <div className="review-card-user-name">
            <Typography>{reviewer}</Typography>
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
