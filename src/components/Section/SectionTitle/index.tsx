import { Typography } from "@mui/material";
import "./SectionTitle.css";

type Props = {
  title: string;
  numberOfItems?: number;
};

const SectionTitle = ({ title, numberOfItems }: Props) => {
  return (
    <div className="title">
      <Typography>
        {title} ({numberOfItems})
      </Typography>
    </div>
  );
};

export default SectionTitle;
