import BookSections from "./BookSections";
import TopicSection from "./TopicSection";
import "./HomePage.css";
import RecommendedBookSection from "./RecommendedBookSection";
import BooksContextProvider from "../../store/books/catalog/BooksContext";

const HomePage = () => {
  return (
    <BooksContextProvider>
      <TopicSection />
      <div className="main-container">
        <RecommendedBookSection />
        <BookSections />
      </div>
    </BooksContextProvider>
  );
};

export default HomePage;
