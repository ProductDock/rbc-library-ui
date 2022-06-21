import BookSections from "./BookSections";
import TopicSection from "./TopicSection";
import "./HomePage.css";
import RecommendedBookSection from "./RecommendedBookSection";

const HomePage = () => {
  return (
    <>
      <TopicSection />
      <div className="main-container">
        <RecommendedBookSection />
        <BookSections />
      </div>
    </>
  );
};

export default HomePage;
