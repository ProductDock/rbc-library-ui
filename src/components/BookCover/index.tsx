import "./BookCover.css";

type Props = {
  imageUrl: any;
  onClick?: () => void;
};

const BookCover = ({ imageUrl, onClick }: Props) => {
  const getImageBoxClassName = () =>
    onClick ? "image-box-clickable" : "image-box";

  return (
    <div className={getImageBoxClassName()} onClick={onClick}>
      <div className="main-box">
        {imageUrl ? <img src={imageUrl} alt="book" /> : ""}
      </div>
      <div className="shadow-box" />
    </div>
  );
};

export default BookCover;
