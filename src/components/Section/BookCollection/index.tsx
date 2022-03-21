import SectionTitle from "../SectionTitle";
import "./bookCollection.css";

const BookCollection = () => {
  return (
    <div>
      <SectionTitle title="All books" numberOfBooks={72} />
      <hr className="separatorLine" />
    </div>
  );
};

export default BookCollection;
