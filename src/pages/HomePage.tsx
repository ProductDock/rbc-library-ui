import BookSections from "../components/BookSections";
import TopicSection from "../components/TopicSection";
import BooksContexProvider from "../store/books/BooksContext";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main-container">
      <BooksContexProvider>
        <TopicSection />
        <BookSections />
      </BooksContexProvider>
    </div>
  );
};

export default HomePage;
