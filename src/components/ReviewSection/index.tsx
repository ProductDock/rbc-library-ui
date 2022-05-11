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
      <Section title="Reviews" numberOfItems={reviews?.length}>
        <ReviewCollection reviews={reviews} />
      </Section>
    </div>
  );
};

export default ReviewSection;
