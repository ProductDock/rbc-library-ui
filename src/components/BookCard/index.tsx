import { Typography } from "@mui/material";
import BookCover from "../BookCover";
import "./BookCard.css";

type Props = {
  title: string;
  author: string;
  imageUrl: string;
};

const BookCard = ({ title, author, imageUrl }: Props) => {
  return (
    <div className="book-box">
      <BookCover imageUrl={imageUrl} />
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
