import BookCover from "../BookCover";
import "./BookCard.css";

type Props = {
  title: string;
  author: string;
  imageUrl: any;
};

const BookCard = ({ title, author, imageUrl }: Props) => {
  return (
    <div className="book-box">
      <BookCover imageUrl={imageUrl} />
      <div className="text-box">
        <p className="title-box">{title}</p>
        <p className="author-box">{author}</p>
      </div>
    </div>
  );
};

export default BookCard;
