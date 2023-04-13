import { Typography } from "@mui/material";
import { useBookDetailsContext } from "../../../store/books/details/BookDetailsContext";
import BookCover from "../../../components/BookCover";
import BookStatus from "../../../components/BookStatus";
import ReviewSection from "./ReviewSection";
import "./BookDetails.css";
import BookAction from "./BookAction";
import BookStarRating from "../../../components/BookStarRating";
import DescriptionSection from "./DescriptionSection";
import CategoriesSection from "./CategoriesSection";
import BookReviewForm from "./BookReviewForm";
import BookRecordsUsers from "../../../components/BookStatus/BookRecordsUsers";
import NewBookForm from "../../../components/NewBookForm";

type Props = {
  qrScanned?: boolean;
};

const BookDetails = ({ qrScanned }: Props) => {
  const { book, bookStatus, setBookStatus } = useBookDetailsContext();

  return (
    <>
      <div className="book-details" data-testid="book-details">
        <div className="book-details-left">
          <div className="bd-cover">
            <BookCover imageUrl={book?.cover} />
          </div>
          <div className="rating-div">
            <BookStarRating
              rating={book?.rating?.score}
              ratingsCount={book?.rating?.count}
              ratingsCountShow
            />
          </div>
        </div>
        <div className="book-details-right">
          <div className="book-details-status">
            <BookStatus
              records={book?.records}
              statusChangeCallback={setBookStatus}
            />
            {bookStatus !== "AVAILABLE" &&
              book?.records &&
              book?.records?.length > 1 && (
                <BookRecordsUsers
                  records={book?.records}
                  bookStatus={bookStatus}
                />
              )}
          </div>
          <div className="bd-text-box">
            <Typography className="bd-title">{book?.title}</Typography>
            <Typography className="bd-author"> {book?.author} </Typography>
            <BookAction bookStatus={bookStatus} qrScanned={qrScanned} />
          </div>
          <DescriptionSection description={book?.description} />
          <CategoriesSection categories={book?.topics} />
          <ReviewSection reviews={book?.reviews} />
        </div>
      </div>

      <BookReviewForm />
      <NewBookForm />
    </>
  );
};

export default BookDetails;
