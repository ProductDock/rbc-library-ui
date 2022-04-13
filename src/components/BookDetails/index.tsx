/* eslint-disable no-unused-vars */
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

  //   if (bookId) {
  //     console.log("uzeo id ");
  //     console.log(bookId);
  //     setBookId?.(parseInt(bookId, 10));
  //   }

  useEffect(() => {
    setBookId?.(parseInt(bookId!, 10));
  }, []);

  return (
    <div className="book-details">
      <BookCover imageUrl={book?.cover} />
      <div className="bd-text-box">
        <p>{book?.title}</p>
        <p>{book?.author}</p>
      </div>
    </div>
  );
};

export default BookDetails;
