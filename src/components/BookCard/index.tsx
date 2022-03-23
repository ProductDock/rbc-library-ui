import BookCover from "../BookCover";
import "./BookCard.css";

type Props = {
  title: string;
  author: string;
  cover: string;
};

const BookCard = ({ title, author, cover }: Props) => {
  return (
    <div className="book-box">
      <BookCover imageUrl={cover} />
      <div className="text-box">
        <p className="title-box">{title}</p>
        <p className="author-box">{author}</p>
      </div>
    </div>
  );
};

export default BookCard;
