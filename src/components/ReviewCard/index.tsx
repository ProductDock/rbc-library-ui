import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import userAvatar from "../../img/userAvatar.png";
import "./ReviewCard.css";

type Props = {
  reviewer: string;
  rating: number;
  recommendation: string[];
  comment: string;
};

const ReviewCard = ({ reviewer, rating, recommendation, comment }: Props) => {
  const recommendationString = recommendation.join(", ");
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
          <div className="review-card-rating">
            <StarIcon />
            <Typography fontSize={16} fontWeight={500}>
              {rating}
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              /5
            </Typography>
          </div>
        </div>
        <div className="review-card-comment">
          <Typography fontSize={14} fontWeight={300}>
            {comment}
          </Typography>
        </div>
        <div className="review-card-recommended">
          <Typography fontSize={14}>
            Recommended to - {recommendationString}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
