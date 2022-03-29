import { useBooksContext } from "../../store/books/BooksContext";
import BookCollection from "../BookCollection";
import Section from "../Section";

const BookSections = () => {
  const { allBooksCount } = useBooksContext();

  return (
    <Section title="Catalog" numberOfBooks={allBooksCount}>
      <BookCollection />
    </Section>
  );
};

export default BookSections;
