import SectionTitle from "../SectionTitle";
import "./SectionHeader.css";

type Props = {
  title: string;
  numberOfItems?: number;
  sectionHeaderElement?: JSX.Element;
};

const SectionHeader = ({
  title,
  numberOfItems,
  sectionHeaderElement,
}: Props) => {
  return (
    <div className="header-container">
      <SectionTitle title={title} numberOfItems={numberOfItems} />
      <div className="section-header-element-container">
        {sectionHeaderElement}
      </div>
    </div>
  );
};

export default SectionHeader;
