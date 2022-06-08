/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-wrap-multilines */
import { useMemo } from "react";
import { Link } from "@mui/material";
import { useAuthContext } from "../../../../../store/auth/AuthContext";
import { Review } from "../../../../../store/books/details/Types";
import ReviewCard from "./ReviewCard";
import editIcon from "../../../../../img/icons/edit-icon.svg";
import "./ReviewCollection.css";

type Props = {
  reviews?: Review[];
  actionOnClick: (review: Review) => void;
};

const ReviewCollection = ({ reviews, actionOnClick }: Props) => {
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
              action={
                userProfile?.email === review.userId ? (
                  <Link
                    className="edit-a-review-button"
                    underline="none"
                    data-testid="edit-a-review-button"
                    onClick={() =>
                      actionOnClick({
                        userFullName: review.userFullName,
                        userId: review.userId,
                        rating: review.rating,
                        recommendation: review.recommendation,
                        comment: review.comment,
                      })
                    }
                  >
                    <img
                      src={editIcon}
                      alt="editIcon"
                      className="edit-a-review-button-icon"
                    />
                  </Link>
                ) : undefined
              }
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
