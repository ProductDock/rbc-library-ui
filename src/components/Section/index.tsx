import SectionTitle from "./SectionTitle";
import "./Section.css";

type Props = {
  title: string;
  numberOfBooks: number;
  children?: any;
};

const Section = ({ children, title, numberOfBooks }: Props) => {
  return (
    <div>
      <SectionTitle title={title} numberOfBooks={numberOfBooks} />
      <hr className="separator-line" />
      {children}
    </div>
  );
};

export default Section;
