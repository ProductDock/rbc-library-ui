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
      <BookCard
        key={1}
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et possimus deleniti maxime placeat autem dolores facere tempora expedita? Fugiat!"
        author="Lorem ipsum dolor sit amfdgdgfgffghhfhet consectetur adipisicing elit. Quia et possimus deleniti maxime placeat autem dolores facere tempora expedita? Fugiat!"
        cover=""
      />
      {books.map((book) => {
        return <BookCard key={book.id} title={book.title} author={book.author} cover={book.cover} />;
      })}
    </div>
  );
};

export default BookCollection;
