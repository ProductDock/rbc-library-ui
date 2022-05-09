import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../store/books/details/BookDetailsContext";
import BookActionButton from "../BookActionButton";
import BookCover from "../BookCover";
import SuccessPage from "../Messages/Success/SuccessPage";
import BookStatus from "../BookStatus";
import "./BookDetails.css";

const BookDetails = () => {
  const {
    book,
    bookStatus,
    setBookStatus,
    showedSuccessMessage,
    successMessage,
  } = useBookDetailsContext();

  return showedSuccessMessage ? (
    <SuccessPage successMessage={successMessage} />
  ) : (
    <div className="book-details" data-testid="book-details">
      <div className="bd-cover">
        <BookCover imageUrl={book?.cover} />
      </div>
      <BookStatus records={book?.records} setStatus={setBookStatus} />
      <div className="bd-text-box">
        <Typography className="bd-title">{book?.title}</Typography>
        <Typography className="bd-author"> {book?.author} </Typography>
        <BookActionButton status={bookStatus} />
      </div>
    </div>
  );
};

export default BookDetails;
