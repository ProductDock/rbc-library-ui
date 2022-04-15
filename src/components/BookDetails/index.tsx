import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useBookDetailsContext } from "../../store/books/details/BookDetailsContext";
import BookCover from "../BookCover";
import "./BookDetails.css";

const BookDetails = () => {
  const { book, setBookId } = useBookDetailsContext();
  const { id } = useParams();

  useEffect(() => {
    setBookId?.(parseInt(id!, 10));
  }, []);

  return (
    <div className="book-details" data-testid="book-details">
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
