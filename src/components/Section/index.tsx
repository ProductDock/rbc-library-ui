import SectionTitle from "./SectionTitle";
import "./Section.css";

type Props = {
  title: string;
  numberOfItems?: number;
  children?: any;
  sectionTitleElement?: JSX.Element;
};

const Section = ({
  children,
  title,
  numberOfItems,
  sectionTitleElement,
}: Props) => {
  return (
    <div>
      <SectionTitle
        title={title}
        numberOfItems={numberOfItems}
        sectionTitleElement={sectionTitleElement}
      />
      <hr className="separator-line" />
      {children}
    </div>
  );
};

export default Section;
