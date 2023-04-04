import BookSections from "./BookSections";
import TopicSection from "./TopicSection";
import "./HomePage.css";
import RecommendedBookSection from "./RecommendedBookSection";
import BooksContextProvider from "../../store/books/catalog/BooksContext";
import NavBar from "../../components/NavBar";
import SuggestedBooksContextProvider from "../../store/books/suggested/SuggestedBooksContext";
import NewBookForm from "../../components/NewBookForm";
import { useNewBookContext } from "../../store/books/new/NewBookContext";
import { useSuccessScreenContext } from "../../store/books/success/SuccessScreenContext";
import SnackbarAlert from "../../components/Snackbar";

const HomePage = () => {
  const { showedNewBookForm, hideNewBookForm } = useNewBookContext();
  const { showed, hideSuccessScreen, successMessage, gratitudeMessage } = useSuccessScreenContext();

  return (
    <BooksContextProvider>

      <SuggestedBooksContextProvider>
        <NavBar />
      </SuggestedBooksContextProvider>
      <TopicSection />
      <div className="main-container">
        <RecommendedBookSection />
        <BookSections />
        {showedNewBookForm && (
          <>
            <div className="new-book-form-wrapper" onClick={hideNewBookForm} />
            <NewBookForm />
          </>
      )}
        <SnackbarAlert
          showed={showed}
          onClose={hideSuccessScreen}
          autoHideDuration={5000}
          title="Success!"
          description={successMessage}
          innerMessage={gratitudeMessage}
        />
      </div>
    </BooksContextProvider>
  );
};

export default HomePage;
