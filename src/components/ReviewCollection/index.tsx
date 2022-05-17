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
          <div key={review.userFullName}>
            <ReviewCard
              reviewer={review.userFullName}
              rating={review.rating}
              recommendation={review.recommendation}
              comment={review.comment}
              ratingsCount={reviews?.length}
            />
            {reviews.indexOf(review) + 1 !== reviews?.length && (
              <hr className="separator-line" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ReviewCollection;
