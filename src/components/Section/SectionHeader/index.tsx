import SectionTitle from "../SectionTitle";
import "./SectionHeader.css";

type Props = {
  title: string;
  numberOfItems?: number;
  action?: JSX.Element;
};

const SectionHeader = ({ title, numberOfItems, action }: Props) => {
  return (
    <div className="header-container">
      <SectionTitle title={title} numberOfItems={numberOfItems} />
      <div className="action-container">{action}</div>
    </div>
  );
};

export default SectionHeader;
