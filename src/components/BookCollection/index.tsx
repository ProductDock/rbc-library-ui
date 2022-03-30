import { useEffect } from "react";
import { useBooksContext } from "../../store/books/BooksContext";
import BookCard from "../BookCard";
import "./BookCollection.css";

const BookCollection = () => {
  const { books, findAllBooks, countAllBooks } = useBooksContext();

  useEffect(() => {
    findAllBooks?.();
    countAllBooks?.();
  }, []);

  return (
    <div className="all-books">
      {books.map((book) => {
        return <BookCard key={book.id} title={book.title} author={book.author} cover={book.cover} />;
      })}
    </div>
  );
};

export default BookCollection;
