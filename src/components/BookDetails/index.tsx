import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useBooksContext } from "../../store/books/BooksContext";
import BookCover from "../BookCover";
import "./BookDetails.css";

type Props = {
  bookId: string | undefined;
};

const BookDetails = ({ bookId }: Props) => {
  const { book, setBookId } = useBooksContext();

  useEffect(() => {
    setBookId?.(parseInt(bookId!, 10));
  }, []);

  return (
    <div className="book-details">
      <div className="bd-cover">
        <BookCover imageUrl={book?.cover} />
      </div>
      <div className="bd-text-box">
        <Typography id="bd-title">
          <b> {book?.title} </b>
        </Typography>
        <Typography id="bd-author"> {book?.author} </Typography>
      </div>
    </div>
  );
};

export default BookDetails;
