/* eslint-disable react/no-array-index-key */
import { TableHead, TableRow, TableCell, Typography } from "@mui/material";
import "./BooksTableHead.css";

type Props = {
  columns?: string[];
};

const BooksTableHead = ({ columns }: Props) => {
  return (
    <TableHead>
      <TableRow className="table-row">
        {columns?.map((column, index) => (
          <TableCell key={index}>
            <Typography className="text">{column}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default BooksTableHead;
