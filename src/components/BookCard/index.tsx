import "./BookCard.css";

type Props = {
  title: string;
  author: string;
};

const BookCard = ({ title, author }: Props) => {
  return (
    <div className="book-box">
      <div className="image-box">
        <div className="main-box">
          {title} {author}
        </div>
        <div className="shadow-box">a</div>
      </div>
      <div className="text-box">
        <p className="title-box">
          Lorem ipskmnonum dolor sit, amet consdvnec tetur adiggrpi sicing elit.
          At dicta ea aut doloremque, architecto non cum explicabo sunt
          voluptatum quibusdam neque omnis quam nulla ernibror soluta
          exercitationem dolorem quisquam
        </p>
        <p className="author-box">Author</p>
      </div>
    </div>
  );
};

export default BookCard;
