import { Review } from "../../store/books/details/Types";
import ReviewCard from "../ReviewCard";
import "./ReviewCollection.css";

type Props = {
  reviews?: Review[];
};

const ReviewCollection = ({ reviews }: Props) => {
  return (
    <div className="review-collection">
      {reviews?.map((review) => {
        return (
          <div>
            <ReviewCard
              key={review.id}
              userFullName={review.userFullName}
              rating={review.rating}
              recommendation={review.recommendation}
              comment={review.comment}
            />
            {reviews?.length > 1 && <hr className="separator-line" />}
          </div>
        );
      })}
    </div>
  );
};

export default ReviewCollection;
