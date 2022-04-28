import { Tooltip, Typography } from "@mui/material";
import { Record } from "../../store/books/catalog/Types";
import BookCover from "../BookCover";
import BookStatus from "../BookStatus";
import "./BookCard.css";

type Props = {
  title: string;
  author: string;
  cover: string;
  records?: Record[];
};

const BookCard = ({ title, author, cover, records }: Props) => {
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
        <BookStatus records={records} />
      </div>
    </div>
  );
};

export default BookCard;
