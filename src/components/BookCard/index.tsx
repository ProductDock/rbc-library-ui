import { Tooltip, Typography } from "@mui/material";
import { Record } from "../../store/books/catalog/Types";
import BookCover from "../BookCover";
import BookStarRating from "../BookStarRating";
import BookStatus from "../BookStatus";
import "./BookCard.css";

type Props = {
  title: string;
  author: string;
  cover: string;
  records?: Record[];
  rating?: number;
  ratingsCount?: number;
};

const BookCard = ({
  title,
  author,
  cover,
  records,
  rating,
  ratingsCount,
}: Props) => {
  return (
    <div className="book-box" data-testid="book-box">
      <BookCover imageUrl={cover} />
      <BookStarRating
        rating={rating}
        ratingsCount={ratingsCount}
        ratingsCountShow
      />
      <div className="text-box">
        <span className="title-box">
          <Tooltip title={title}>
            <Typography>{title}</Typography>
          </Tooltip>
        </span>
        <span className="author-box">
          <Tooltip title={author}>
            <Typography>{author}</Typography>
          </Tooltip>
        </span>
      </div>
      <div className="book-status-homepage">
        <BookStatus records={records} />
      </div>
    </div>
  );
};

export default BookCard;
