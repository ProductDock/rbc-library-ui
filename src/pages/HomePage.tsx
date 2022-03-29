import BookSections from "../components/BookSections";
import BooksContexProvider from "../store/books/BooksContext";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main-container">
      <BooksContexProvider>
        <BookSections />
      </BooksContexProvider>
    </div>
  );
};

export default HomePage;
