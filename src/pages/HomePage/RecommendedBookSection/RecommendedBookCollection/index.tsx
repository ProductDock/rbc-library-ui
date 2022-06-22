import { useBooksContext } from "../../../../store/books/catalog/BooksContext";
import RecommendedBookCarousel from "../RecommendedBookCarousel";
import NoBooksMessage from "../../../../components/NoBooksMessage";

const RecommendedBookCollection = () => {
  const { recommendedBooksCount } = useBooksContext();

  return (
    <>
      <RecommendedBookCarousel />
      {recommendedBooksCount === 0 && (
        <NoBooksMessage
          message="No recommended books found"
          messageDescription="Try to adjust your active filters or search text to get results"
        />
      )}
    </>
  );
};

export default RecommendedBookCollection;
