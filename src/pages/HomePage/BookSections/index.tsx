import { useBooksContext } from "../../../store/books/catalog/BooksContext";
import BookCollection from "./BookCollection";
import Section from "../../../components/Section";

const BookSections = () => {
  const { allBooksCount } = useBooksContext();

  return (
    <Section title="Catalog" numberOfItems={allBooksCount}>
      <BookCollection />
    </Section>
  );
};

export default BookSections;
