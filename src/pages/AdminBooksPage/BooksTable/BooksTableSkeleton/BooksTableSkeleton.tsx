import { Skeleton, TableBody, TableCell, TableRow } from "@mui/material";

const BooksTableSkeleton = () => {
  const rows = [...Array(18)];

  return (
    <TableBody>
      {rows.map((index) => (
        <TableRow className="book-row" key={index}>
          <TableCell scope="row" width={150}>
            <Skeleton height={85} width={50} />
          </TableCell>
          <TableCell align="left" className="title-row">
            <Skeleton />
          </TableCell>
          <TableCell align="left">
            <Skeleton />
          </TableCell>
          <TableCell align="left" className="status">
            <Skeleton />
          </TableCell>
          <TableCell align="left">
            <Skeleton />
          </TableCell>
          <TableCell align="right">
            <Skeleton />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BooksTableSkeleton;
