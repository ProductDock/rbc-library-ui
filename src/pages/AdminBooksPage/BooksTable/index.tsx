import { Paper, Table, TableContainer, TablePagination } from "@mui/material";
import "./BooksTable.css";
import { ChangeEvent, useRef, useState } from "react";
import BooksTableHead from "./BooksTableHead";
import BooksTableBody from "./BooksTableBody";
import useBooks from "./useBooks";
import ConfirmationModal, {
  ActionVariant,
  ConfirmationRefObject,
} from "../../../components/Modals/ConfirmationModal";
import { warningMessages } from "../../../constants/warningMessages";
import { ConfirmationMessages } from "../../../constants/confirmationMessages";
import useDeleteBooks from "./useDeleteBooks";

const BooksTable = () => {
  const [page, setPage] = useState<number>(0);
  const [selectedId, setSelectedId] = useState<number>();

  const [rowsPerPage, setRowsPerPage] = useState<number>(18);
  const rowsOptions = [18];
  const columns = ["Image", "Name", "Author", "Status", "Rating", ""];

  const modal = useRef<ConfirmationRefObject>(null);
  const showModal = () => modal?.current?.showModal?.();
  const hideModal = () => modal?.current?.hideModal?.();

  const { books, count, findBooks } = useBooks(page);
  const { deleteBook } = useDeleteBooks();

  const [action, setAction] = useState<ActionVariant>(ActionVariant.delete);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const rows = parseInt(event.target.value, 10);
    setRowsPerPage(rows);
    setPage(0);
  };

  const setConfirmationModal = () => {
    setAction(ActionVariant.delete);
    setTitle(ConfirmationMessages.DELETE_BOOK_TITLE);
    setDescription(ConfirmationMessages.DELETE_BOOK_CONFIRM);
  };

  const setWarningModal = (message: string) => {
    setAction(ActionVariant.notify);
    setTitle(warningMessages.DELETE_BOOK_TITLE);
    setDescription(message);
  };

  const handleDelete = (selectedId: number) => {
    setSelectedId(selectedId);
    setConfirmationModal();
    showModal();
  };

  const handleConfirm = () => {
    if (selectedId) {
      deleteBook(selectedId)
        .then(() => {
          hideModal();
          findBooks();
        })
        .catch((e) => setWarningModal(e.response.data.message));
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" data-testid="books-table">
          <BooksTableHead columns={columns} />
          <BooksTableBody books={books} onDelete={handleDelete} />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsOptions}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <ConfirmationModal
        ref={modal}
        title={title}
        description={description}
        onConfirmation={() => handleConfirm()}
        variant={action}
      />
    </div>
  );
};

export default BooksTable;
