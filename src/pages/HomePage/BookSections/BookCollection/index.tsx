import { LoadingButton } from "@mui/lab";
import { LinearProgress, Typography } from "@mui/material";
import { useBooksContext } from "../../../../store/books/catalog/BooksContext";
import BookCard from "../../../../components/BookCard";
import "./BookCollection.css";

const BookCollection = () => {
  const { books, allBooksCount, loading, page, setPage } = useBooksContext();

  const loadBooks = () => {
    setPage?.(page + 1);
  };

  return (
    <div className="book-collection-main-div">
      {allBooksCount > 0 ? (
        <div className="all-books">
          {books.map((book) => {
            return (
              <BookCard
                key={book.id}
                bookId={book.id}
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
      ) : (
        <div>
          <Typography className="no-books-in-catalog-message-heading">
            No books found
          </Typography>
          <Typography className="no-books-in-catalog-message-text">
            Try to adjust your active filters or search text to get results
          </Typography>
        </div>
      )}
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
