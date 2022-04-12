import { Typography } from "@mui/material";

const BookDetailsPage = () => {
  return (
    <div className="book-details-container">
      <div>COVER</div>
      <div>
        <span>
          <Typography> title </Typography>
        </span>
        <span>
          <Typography> author </Typography>
        </span>
      </div>
    </div>
  );
};

export default BookDetailsPage;
