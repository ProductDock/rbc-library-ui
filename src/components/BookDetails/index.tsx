import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../store/books/details/BookDetailsContext";
import BookActionButton from "../BookActionButton";
import BookCover from "../BookCover";
import SuccessPage from "../Messages/Success/SuccessPage";
import ConfirmationModal from "../Modals/ConfirmationModal";
import "./BookDetails.css";

const confirmModalTitle = "Please confirm book rental";
const confirmModalDescription =
  "After confirmation, you will receive an email with details of the book rental";

const BookDetails = () => {
  const {
    book,
    showedConfirmationModal,
    hideConfirmationModal,
    rentABook,
    showedSuccessMessage,
  } = useBookDetailsContext();

  return (
    <>
      {showedSuccessMessage ? (
        <SuccessPage />
      ) : (
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
      )}
      <ConfirmationModal
        title={confirmModalTitle}
        description={confirmModalDescription}
        showed={showedConfirmationModal}
        hideModal={hideConfirmationModal}
        handleConfirm={rentABook}
      />
    </>
  );
};

export default BookDetails;
