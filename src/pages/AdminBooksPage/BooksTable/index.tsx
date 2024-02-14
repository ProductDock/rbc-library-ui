import { Paper, Table, TableContainer, TablePagination } from "@mui/material";
import "./BooksTable.css";
import { ChangeEvent, useState } from "react";
import { useBooksContext } from "../../../store/books/catalog/BooksContext";
import BooksTableHead from "./BooksTableHead";
import BooksTableBody from "./BooksTableBody";

const BooksTable = () => {
  const { books, allBooksCount, page, setPage } = useBooksContext();
  const [rowsPerPage, setRowsPerPage] = useState<number>(18);
  const rowsOptions = [18];
  const columns = ["Image", "Name", "Author", "Status", "Rating", ""];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage?.(newPage, true);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const rows = parseInt(event.target.value, 10);
    setRowsPerPage(rows);
    setPage?.(0, true);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" data-testid="books-table">
          <BooksTableHead columns={columns} />
          <BooksTableBody books={books} />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsOptions}
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
