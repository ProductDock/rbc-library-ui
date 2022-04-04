/* eslint-disable operator-linebreak */
import { LoadingButton } from "@mui/lab";
import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useBooksContext } from "../../store/books/BooksContext";
import BookCard from "../BookCard";
import "./BookCollection.css";

const BookCollection = () => {
  const { books, allBooksCount, findBooks, countAllBooks, loading } =
    useBooksContext();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    findBooks?.(0);
    countAllBooks?.();
  }, []);

  const loadBooks = () => {
    setPageNumber(pageNumber + 1);
    findBooks?.(pageNumber);
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
