/* eslint-disable no-unused-vars */
import { Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { routes } from "../../constants/routes";
import { Record } from "../../store/books/catalog/Types";
import BookCover from "../BookCover";
import BookStarRating from "../BookStarRating";
import BookStatus from "../BookStatus";
import "./BookCard.css";

type Props = {
  bookId?: number;
  title: string;
  author: string;
  cover: string;
  records?: Record[];
  rating?: number;
  ratingsCount?: number;
};

const BookCard = ({
  bookId,
  title,
  author,
  cover,
  records,
  rating,
  ratingsCount,
}: Props) => {
  const navigate = useNavigate();

  const navigateToBookDetails = () =>
    navigate(`${routes.BOOK_DETAILS_PATH}/${bookId}`);

  return (
    <div className="book-box" data-testid="book-box">
      <BookCover imageUrl={cover} onClick={navigateToBookDetails} />
      <BookStarRating
        rating={rating}
        ratingsCount={ratingsCount}
        ratingsCountShow
      />
      <div className="text-box">
        <span className="title-box">
          <Tooltip title={title}>
            <Typography
              onClick={navigateToBookDetails}
              className="title-clickable"
            >
              {title}
            </Typography>
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
