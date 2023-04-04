import BookSections from "./BookSections";
import TopicSection from "./TopicSection";
import "./HomePage.css";
import RecommendedBookSection from "./RecommendedBookSection";
import BooksContextProvider from "../../store/books/catalog/BooksContext";
import NavBar from "../../components/NavBar";
import SuggestedBooksContextProvider from "../../store/books/suggested/SuggestedBooksContext";
import NewBookForm from "../../components/NewBookForm";
import { useNewBookContext } from "../../store/books/new/NewBookContext";

const HomePage = () => {
  const { showedNewBookForm: showedAddBookForm, hideNewBookForm: hideAddBookForm } = useNewBookContext();

  const hideNewBookForm = () => {
    hideAddBookForm?.();
  };
  return (
    <BooksContextProvider>
      <SuggestedBooksContextProvider>
        <NavBar />
      </SuggestedBooksContextProvider>
      <TopicSection />
      <div className="main-container">
        <RecommendedBookSection />
        <BookSections />
        {showedAddBookForm && (
          <>
            <div className="add-book-form-wrapper" onClick={hideNewBookForm} />
            <NewBookForm />
          </>
      )}
      </div>
    </BooksContextProvider>
  );
};

export default HomePage;
