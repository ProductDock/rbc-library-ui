import BookSections from "./BookSections";
import TopicSection from "./TopicSection";
import "./HomePage.css";
import RecommendedBookSection from "./RecommendedBookSection";
import BooksContextProvider from "../../store/books/catalog/BooksContext";
import NavBar from "../../components/NavBar";
import SuggestedBooksContextProvider from "../../store/books/suggested/SuggestedBooksContext";
import NewBookForm from "../../components/NewBookForm";

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
        <NewBookForm />
      </div>
    </BooksContextProvider>
  );
};

export default HomePage;
