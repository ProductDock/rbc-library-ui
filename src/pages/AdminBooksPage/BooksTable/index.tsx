import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import "./BooksTable.css";
import { useState } from "react";
import { EditOutlined } from "@mui/icons-material";
import { useBooksContext } from "../../../store/books/catalog/BooksContext";
import BookStatus from "../../../components/BookStatus";
import BookStarRating from "../../../components/BookStarRating";

const BooksTable = () => {
  const { books, allBooksCount, page, setPage } = useBooksContext();
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage?.(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage?.(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" data-testid="books-table">
          <TableHead>
            <TableRow className="table-row">
              <TableCell>
                <Typography className="text">Image</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography className="text">Name</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography className="text">Author</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography className="text">Status</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography className="text">Rating</Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {books
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((book) => (
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
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, allBooksCount]}
        component="div"
        count={allBooksCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default BooksTable;
