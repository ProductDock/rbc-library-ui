/* eslint-disable operator-linebreak */
import { LoadingButton } from "@mui/lab";
import { LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useBooksContext } from "../../store/books/BooksContext";
import BookCard from "../BookCard";
import "./BookCollection.css";

const BookCollection = () => {
  const { books, allBooksCount, countAllBooks, loading, page, setPage } =
    useBooksContext();

  useEffect(() => {
    countAllBooks?.();
  }, []);

  const loadBooks = () => {
    setPage?.(page + 1);
  };

  return (
    <div>
      <div className="all-books">
        {books.map((book) => {
          return (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              cover={book.cover}
            />
          );
        })}
      </div>
      <div className="pagination-div">
        <div className="pagination-box">
          <div className="pagination-progress">
            <p>
              Showing {books.length} of {allBooksCount}
            </p>
            <LinearProgress
              variant="determinate"
              value={(books.length / allBooksCount) * 100}
            />
          </div>
          {books.length < allBooksCount && (
            <LoadingButton
              variant="outlined"
              className="pagination-button"
              loading={loading}
              onClick={loadBooks}
              data-testid="pagination-button"
            >
              Show More
            </LoadingButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCollection;
