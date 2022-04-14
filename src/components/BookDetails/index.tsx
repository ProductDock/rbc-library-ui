import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useBookDetailsContext } from "../../store/books/details/BookDetailsContext";
import BookCover from "../BookCover";
import "./BookDetails.css";

type Props = {
  bookId: string | undefined;
};

const BookDetails = ({ bookId }: Props) => {
  const { book, setBookId } = useBookDetailsContext();

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
