import { Tooltip, Typography } from "@mui/material";
import BookCover from "../BookCover";
import BookStatus from "../BookStatus";
import "./BookCard.css";

type Props = {
  title: string;
  author: string;
  cover: string;
};

const BookCard = ({ title, author, cover }: Props) => {
  return (
    <div className="book-box" data-testid="book-box">
      <BookCover imageUrl={cover} />
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
        <BookStatus />
      </div>
    </div>
  );
};

export default BookCard;
