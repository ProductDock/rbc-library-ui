import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

import "./BookStarRating.css";

type Props = {
  rating?: number;
  ratingsCount?: number;
  ratingsCountShow: boolean;
};

const BookStarRating = ({ rating, ratingsCount, ratingsCountShow }: Props) => {
  return (
    <div className="star-rating">
      {rating ? (
        <StarIcon className="yellow-icon" />
      ) : (
        <StarBorderRoundedIcon className="outlined-icon" />
      )}

      {rating && (
        <>
          <Typography fontSize={16} fontWeight={500}>
            {rating}
          </Typography>
          <Typography className="max-rating" fontSize={12} fontWeight={300}>
            /5
          </Typography>
        </>
      )}
      {ratingsCountShow &&
        (rating ? (
          <Typography className="ratings-count" fontSize={12} fontWeight={300}>
            ({ratingsCount} rating{ratingsCount && ratingsCount > 1 ? "s" : ""})
          </Typography>
        ) : (
          <Typography className="ratings-count" fontSize={12} fontWeight={300}>
            (no ratings)
          </Typography>
        ))}
    </div>
  );
};
export default BookStarRating;
