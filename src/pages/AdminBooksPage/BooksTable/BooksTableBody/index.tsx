/* eslint-disable no-unused-vars */
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { TableBody, TableRow, TableCell, Button } from "@mui/material";
import BookStarRating from "../../../../components/BookStarRating";
import { Book } from "../../../../store/books/catalog/Types";
import "./BooksTableBody.css";
import BookStatus from "../../../../components/BookStatus";

type Props = {
  books?: Book[];
  onDelete: Function;
  onEdit: Function;
};

const BooksTableBody = ({ books, onDelete, onEdit }: Props) => {
  return (
    <TableBody>
      {books?.map((book) => (
        <TableRow className="book-row" key={book.id}>
          <TableCell scope="row">
            <div className="cover-image">
              <img src={book.cover} alt="book" />
            </div>
          </TableCell>
          <TableCell align="left" className="title-row">
            {book.title}
          </TableCell>
          <TableCell align="left">{book.author}</TableCell>
          <TableCell align="left" className="status">
            <div className="status-div">
              <BookStatus records={book.records} />
            </div>
          </TableCell>
          <TableCell align="left">
            <BookStarRating
              rating={book.rating?.score}
              ratingsCount={book.rating?.count}
              ratingsCountShow={false}
            />
          </TableCell>
          <TableCell className="buttons-row" align="right">
            <Button
              className="edit-button"
              data-testid="edit-btn"
              onClick={() => onEdit(book.id)}
            >
              <EditOutlined className="edit-icon" />
            </Button>
            <Button
              className="delete-btn"
              data-testid="delete-btn"
              onClick={() => onDelete(book.id)}
            >
              <DeleteOutline />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BooksTableBody;
