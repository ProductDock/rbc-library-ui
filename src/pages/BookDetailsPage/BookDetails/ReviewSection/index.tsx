/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Typography } from "@mui/material";
import { useMemo } from "react";
import { Review } from "../../../../store/books/details/Types";
import ReviewCollection from "./ReviewCollection";
import Section from "../../../../components/Section";
import "./ReviewSection.css";
import plusIcon from "../../../../img/icons/plus-icon.svg";
import { useAuthContext } from "../../../../store/auth/AuthContext";
import { useBookReviewContext } from "../../../../store/books/reviews/BookReviewContext";

type Props = {
  reviews?: Review[];
};

const ReviewSection = ({ reviews }: Props) => {
  const { userProfile } = useAuthContext();
  const { showCreateReviewForm } = useBookReviewContext();

  const userLeftReview = useMemo(
    () => reviews?.find((r) => r.userId === userProfile?.email),
    [reviews]
  );

  return (
    <div className="review-section">
      <Section
        title="Reviews"
        numberOfItems={reviews?.length || 0}
        action={
          userLeftReview ? undefined : (
            <Link
              className="write-a-review-button side-text"
              underline="none"
              onClick={() => showCreateReviewForm?.()}
              data-testid="write-a-review-button"
            >
              Write a review
              <img
                src={plusIcon}
                alt="plusIcon"
                className="write-a-review-button-icon"
              />
            </Link>
          )
        }
      >
        {reviews?.length ? (
          <ReviewCollection reviews={reviews} />
        ) : (
          <Typography className="review-section-message">
            There are no reviews for this book yet
          </Typography>
        )}
      </Section>
    </div>
  );
};

export default ReviewSection;
