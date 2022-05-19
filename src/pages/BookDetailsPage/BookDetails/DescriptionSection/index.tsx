import { Typography } from "@mui/material";
import "./DescriptionSection.css";

type Props = {
  description?: string;
};

const DescriptionSection = ({ description }: Props) => {
  return (
    <div className="description-section">
      <Typography fontWeight={400} fontSize={14}>
        Description
      </Typography>
      <Typography fontWeight={300} fontSize={14}>
        {description}
      </Typography>
    </div>
  );
};

export default DescriptionSection;
