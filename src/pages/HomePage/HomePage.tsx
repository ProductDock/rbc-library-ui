import BookSections from "./BookSections";
import TopicSection from "./TopicSection";
import "./HomePage.css";
import RecommendedBookSection from "./RecommendedBookSection";
import BooksContextProvider from "../../store/books/catalog/BooksContext";
import NavBar from "../../components/NavBar";
import SuggestedBooksContextProvider from "../../store/books/suggested/SuggestedBooksContext";
import NewBookFormHomePage from "./NewBookForm";

const HomePage = () => {
  return (
    <BooksContextProvider>
      <SuggestedBooksContextProvider>
        <NavBar />
      </SuggestedBooksContextProvider>
      <TopicSection />
      <div className="main-container">
        <RecommendedBookSection />
        <BookSections />
        <NewBookFormHomePage />
      </div>
    </BooksContextProvider>
  );
};

export default HomePage;
