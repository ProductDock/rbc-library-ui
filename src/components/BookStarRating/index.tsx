import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import "./BookStarRating.css";

type Props = {
  rating?: number;
  ratingsCount?: number;
  ratingsCountShow: boolean;
};

const BookStarRating = ({ rating, ratingsCount, ratingsCountShow }: Props) => {
  return (
    <div className="star-rating">
      <StarIcon />
      <Typography fontSize={16} fontWeight={500}>
        {rating}
      </Typography>
      <Typography className="max-rating" fontSize={12} fontWeight={300}>
        /5
      </Typography>
      {ratingsCountShow && (
        <Typography className="ratings-count" fontSize={12} fontWeight={300}>
          ({ratingsCount} ratings)
        </Typography>
      )}
    </div>
  );
};
export default BookStarRating;
