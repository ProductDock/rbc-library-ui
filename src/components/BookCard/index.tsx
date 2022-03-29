import { Typography } from "@mui/material";
import BookCover from "../BookCover";
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
        <p className="title-box">
          <Typography>{title}</Typography>
        </p>
        <p className="author-box">
          <Typography>{author}</Typography>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
