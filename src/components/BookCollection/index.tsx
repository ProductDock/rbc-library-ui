import { LoadingButton } from "@mui/lab";
import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useBooksContext } from "../../store/books/BooksContext";
import BookCard from "../BookCard";
import "./BookCollection.css";

const BookCollection = () => {
  const { books, allBooksCount, findAllBooks, countAllBooks } = useBooksContext();
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    findAllBooks?.(0);
    countAllBooks?.();
  }, []);

  const findBooks = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setPageNumber(pageNumber + 1);
    findAllBooks?.(pageNumber);
  };

  return (
    <div>
      <div className="all-books">
        {books.map((book) => {
          return <BookCard key={book.id} title={book.title} author={book.author} cover={book.cover} />;
        })}
      </div>
      <div className="pagination-div">
        <div className="pagination-box">
          <div className="pagination-progress">
            <p>
              Showing {books.length} of {allBooksCount}
            </p>
            <LinearProgress variant="determinate" value={(books.length / allBooksCount) * 100} />
          </div>
          <LoadingButton
            variant="outlined"
            className="pagination-button"
            loading={loading}
            onClick={findBooks}
            data-testid="pagination-button"
          >
            Show More
          </LoadingButton>
        </div>
      </div>
    </div>
  );
};

export default BookCollection;
