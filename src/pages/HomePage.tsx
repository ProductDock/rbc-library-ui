import BookCollection from "../components/BookCollection";
import LoginButton from "../components/LoginButton";
import MemberList from "../components/MemberList";
import Section from "../components/Section";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main-container">
      <Section title="All books" numberOfBooks={72}>
        <LoginButton />
        <BookCollection />
        <MemberList />
      </Section>
    </div>
  );
};

export default HomePage;
