import { LoadingButton } from "@mui/lab";
import { LinearProgress } from "@mui/material";
import { useBooksContext } from "../../store/books/catalog/BooksContext";
import BookCard from "../BookCard";
import "./BookCollection.css";

const BookCollection = () => {
  const { books, allBooksCount, loading, page, setPage } = useBooksContext();

  const loadBooks = () => {
    setPage?.(page + 1);
  };

  return (
    <div className="book-collection-main-div">
      <div className="all-books">
        {books.map((book) => {
          return (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              cover={book.cover}
              records={book.records}
              rating={book.rating?.score}
              ratingsCount={book.rating?.count}
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
