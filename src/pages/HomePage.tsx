import BookCollection from "../components/BookCollection";
import Section from "../components/Section";
import BooksContexProvider from "../store/books/BooksContext";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main-container">
      <Section title="All books" numberOfBooks={72}>
        <BooksContexProvider>
          <BookCollection />
        </BooksContexProvider>
      </Section>
    </div>
  );
};

export default HomePage;
