import { Typography } from "@mui/material";
import { Review } from "../../store/books/details/Types";
import ReviewCollection from "../ReviewCollection";
import Section from "../Section";
import "./ReviewSection.css";

type Props = {
  reviews?: Review[];
};

const ReviewSection = ({ reviews }: Props) => {
  return (
    <div className="review-section">
      <Section title="Reviews" numberOfItems={reviews?.length || 0}>
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
