import BookSections from "../components/BookSections";
import TopicSection from "../components/TopicSection";
import BooksContexProvider from "../store/books/BooksContext";
import "./HomePage.css";

const HomePage = () => {
  return (
    <BooksContexProvider>
      <TopicSection />
      <div className="main-container">
        <BookSections />
      </div>
    </BooksContexProvider>
  );
};

export default HomePage;
