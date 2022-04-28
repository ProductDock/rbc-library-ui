import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../store/books/details/BookDetailsContext";
import BookActionButton from "../BookActionButton";
import BookCover from "../BookCover";
import "./BookDetails.css";

const BookDetails = () => {
  const { book } = useBookDetailsContext();

  return (
    <div className="book-details" data-testid="book-details">
      <div className="bd-cover">
        <BookCover imageUrl={book?.cover} />
      </div>
      <div className="bd-text-box">
        <Typography className="bd-title">{book?.title}</Typography>
        <Typography className="bd-author"> {book?.author} </Typography>
        <BookActionButton />
      </div>
    </div>
  );
};

export default BookDetails;
