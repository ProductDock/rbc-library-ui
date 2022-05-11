import SectionTitle from "./SectionTitle";
import "./Section.css";

type Props = {
  title: string;
  numberOfItems?: number;
  children?: any;
};

const Section = ({ children, title, numberOfItems }: Props) => {
  return (
    <div>
      <SectionTitle title={title} numberOfItems={numberOfItems} />
      <hr className="separator-line" />
      {children}
    </div>
  );
};

export default Section;
