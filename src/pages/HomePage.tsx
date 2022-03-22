import BookCollection from "../components/BookCollection";
import Section from "../components/Section";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main-container">
      <Section title="All books" numberOfBooks={72}>
        <BookCollection />
      </Section>
    </div>
  );
};

export default HomePage;
