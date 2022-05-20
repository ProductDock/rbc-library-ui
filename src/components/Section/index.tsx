import "./Section.css";
import SectionHeader from "./SectionHeader";

type Props = {
  title: string;
  numberOfItems?: number;
  children?: any;
  sectionHeaderElement?: JSX.Element;
};

const Section = ({
  children,
  title,
  numberOfItems,
  sectionHeaderElement,
}: Props) => {
  return (
    <div>
      <SectionHeader
        title={title}
        numberOfItems={numberOfItems}
        sectionHeaderElement={sectionHeaderElement}
      />
      <hr className="separator-line" />
      {children}
    </div>
  );
};

export default Section;
