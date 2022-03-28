import { useBooksContext } from "../../store/books/BooksContext";
import BookCollection from "../BookCollection";
import Section from "../Section";

const BookSections = () => {
  const { books } = useBooksContext();

  return (
    <Section title="All books" numberOfBooks={books.length}>
      <BookCollection />
    </Section>
  );
};

export default BookSections;
