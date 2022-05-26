import BookSections from "./BookSections";
import TopicSection from "./TopicSection";
import BooksContexProvider from "../../store/books/catalog/BooksContext";
import "./HomePage.css";
import RecommendedBookSection from "./RecommendedBookSection";

const HomePage = () => {
  return (
    <BooksContexProvider>
      <TopicSection />
      <div className="main-container">
        <RecommendedBookSection />
        <BookSections />
      </div>
    </BooksContexProvider>
  );
};

export default HomePage;
