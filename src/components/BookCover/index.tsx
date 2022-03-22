import "./BookCover.css";

type Props = {
  imageUrl: string;
};

const BookCover = ({ imageUrl }: Props) => {
  return (
    <div className="image-box">
      <div className="main-box">
        <img src={imageUrl} alt="book" />
      </div>
      <div className="shadow-box" />
    </div>
  );
};

export default BookCover;
