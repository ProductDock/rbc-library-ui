import BookCard from "../BookCard";
import "./bookCollection.css";

const BookCollection = () => {
  const books = [
    {
      title: "Book title",
      author: "John Doe",
      imageUrl:
        "https://www.oreilly.com/library/view/java-program-design/9781484241431/images/978-1-4842-4143-1_CoverFigure.jpg",
    },
    {
      title: "Book2",
      author: "John Smith",
      imageUrl: "https://s3.us-east-2.amazonaws.com/shulph-dev-shelf/books/covers/9781789130690.jpg",
    },
    {
      title: "Book title",
      author: "John Doe",
      imageUrl:
        "https://www.oreilly.com/library/view/java-program-design/9781484241431/images/978-1-4842-4143-1_CoverFigure.jpg",
    },
    {
      title: "Book2",
      author: "John Smith",
      imageUrl: "https://s3.us-east-2.amazonaws.com/shulph-dev-shelf/books/covers/9781789130690.jpg",
    },
    {
      title: "Book title",
      author: "John Doe",
      imageUrl:
        "https://www.oreilly.com/library/view/java-program-design/9781484241431/images/978-1-4842-4143-1_CoverFigure.jpg",
    },
    {
      title: "Book2",
      author: "John Smith",
      imageUrl: "https://s3.us-east-2.amazonaws.com/shulph-dev-shelf/books/covers/9781789130690.jpg",
    },
    {
      title: "Book title",
      author: "John Doe",
      imageUrl:
        "https://www.oreilly.com/library/view/java-program-design/9781484241431/images/978-1-4842-4143-1_CoverFigure.jpg",
    },
    {
      title: "Book2",
      author: "John Smith",
      imageUrl: "https://s3.us-east-2.amazonaws.com/shulph-dev-shelf/books/covers/9781789130690.jpg",
    },
  ];
  return (
    <div className="all-books">
      {books.map((book) => {
        return <BookCard title={book.title} author={book.author} imageUrl={book.imageUrl} />;
      })}
    </div>
  );
};

export default BookCollection;
