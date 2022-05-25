import { useBooksContext } from "../../../store/books/catalog/BooksContext";
import Section from "../../../components/Section";
import RecommendedBookCollection from "./RecommendedBookCollection";

const RecommendedBookSection = () => {
  const { recommendedBooksCount } = useBooksContext();

  return (
    <Section
      title="ProductDock recommendations"
      numberOfItems={recommendedBooksCount}
    >
      <RecommendedBookCollection />
    </Section>
  );
};

export default RecommendedBookSection;
