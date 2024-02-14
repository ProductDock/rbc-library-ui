import { EditOutlined } from "@mui/icons-material";
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
            <BookStatus records={book.records} />
          </TableCell>
          <TableCell align="left">
            <BookStarRating
              rating={book.rating?.score}
              ratingsCount={book.rating?.count}
              ratingsCountShow={false}
            />
          </TableCell>
          <TableCell align="center">
            <Button className="edit-button">
              <EditOutlined className="edit-icon" />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BooksTableBody;
