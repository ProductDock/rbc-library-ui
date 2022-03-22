import "./BookCard.css";

type Props = {
  title: string;
  author: string;
  imageUrl: string;
};

const BookCard = ({ title, author, imageUrl }: Props) => {
  return (
    <div className="book-box">
      <div className="image-box">
        <div className="main-box">
          <img src={imageUrl} alt="book" />
        </div>
        <div className="shadow-box" />
      </div>
      <div className="text-box">
        <p className="title-box">{title}</p>
        <p className="author-box">{author}</p>
      </div>
    </div>
  );
};

export default BookCard;
