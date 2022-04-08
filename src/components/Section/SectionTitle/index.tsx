import { Typography } from "@mui/material";
import "./SectionTitle.css";

type Props = {
  title: string;
  numberOfBooks: number;
};

const SectionTitle = ({ title, numberOfBooks }: Props) => {
  return (
    <div className="title">
      <Typography>
        <b>
          {title} ({numberOfBooks})
        </b>
      </Typography>
    </div>
  );
};

export default SectionTitle;
