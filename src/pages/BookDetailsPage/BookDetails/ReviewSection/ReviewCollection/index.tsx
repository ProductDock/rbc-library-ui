/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-wrap-multilines */
import { useMemo } from "react";
import { useAuthContext } from "../../../../../store/auth/AuthContext";
import { Review } from "../../../../../store/books/details/Types";
import ReviewCard from "./ReviewCard";
import "./ReviewCollection.css";

type Props = {
  reviews?: Review[];
};

const ReviewCollection = ({ reviews }: Props) => {
  const { userProfile } = useAuthContext();

  const isYourReview = (reviewerId: string) =>
    reviewerId === userProfile?.email;

  const sortedReviews = useMemo<Review[] | undefined>(() => {
    const yourReviewIndex = reviews?.findIndex((review) =>
      isYourReview(review.userId)
    );
    reviews?.push(...reviews?.splice(0, yourReviewIndex));
    return reviews;
  }, [reviews]);

  return (
    <div className="review-collection">
      {sortedReviews?.map((review) => {
        return (
          <div key={review.userFullName}>
            <ReviewCard
              reviewerId={review.userId}
              reviewer={review.userFullName}
              rating={review.rating}
              recommendation={review.recommendation}
              comment={review.comment}
              ratingsCount={sortedReviews?.length}
            />
            {sortedReviews.indexOf(review) + 1 !== reviews?.length && (
              <hr className="separator-line" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ReviewCollection;
