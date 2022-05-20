import { Typography } from "@mui/material";
import "./SectionTitle.css";

type Props = {
  title: string;
  numberOfItems?: number;
  sectionTitleElement?: JSX.Element;
};

const SectionTitle = ({ title, numberOfItems, sectionTitleElement }: Props) => {
  return (
    <div className="title title-container">
      <Typography>
        {title} ({numberOfItems})
      </Typography>
      {sectionTitleElement}
    </div>
  );
};

export default SectionTitle;
