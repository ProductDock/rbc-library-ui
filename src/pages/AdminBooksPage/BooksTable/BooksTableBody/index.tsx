import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { TableBody, TableRow, TableCell, Button } from "@mui/material";
import BookStarRating from "../../../../components/BookStarRating";
import BookStatus from "../../../../components/BookStatus";
import { Book } from "../../../../store/books/catalog/Types";
import "./BooksTableBody.css";

type Props = {
  books?: Book[];
};

const BooksTableBody = ({ books }: Props) => {
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
            <Button className="edit-button" data-testid="edit-btn">
              <EditOutlined className="edit-icon" />
            </Button>
            <Button className="delete-btn" data-testid="delete-btn">
              <DeleteOutline />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BooksTableBody;
