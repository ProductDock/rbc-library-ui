import { Typography } from "@mui/material";
import { useBooksContext } from "../../../../store/books/catalog/BooksContext";
import "./RecommendedBookCollection.css";
import RecommendedBookCarousel from "../RecommendedBookCarousel";

const RecommendedBookCollection = () => {
  const { recommendedBooksCount } = useBooksContext();

  return (
    <>
      <RecommendedBookCarousel />
      {recommendedBooksCount === 0 && (
        <div>
          <Typography className="no-recommendations-message-heading">
            There are no recommended books for the applied search criteria
          </Typography>
          <Typography className="no-recommendations-message-text">
            Try to adjust your active filters or search text to get results
          </Typography>
        </div>
      )}
    </>
  );
};

export default RecommendedBookCollection;
