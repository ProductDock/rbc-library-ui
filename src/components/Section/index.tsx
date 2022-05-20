import "./Section.css";
import SectionHeader from "./SectionHeader";

type Props = {
  title: string;
  numberOfItems?: number;
  children?: any;
  action?: JSX.Element;
};

const Section = ({ children, title, numberOfItems, action }: Props) => {
  return (
    <div>
      <SectionHeader
        title={title}
        numberOfItems={numberOfItems}
        action={action}
      />
      <hr className="separator-line" />
      {children}
    </div>
  );
};

export default Section;
