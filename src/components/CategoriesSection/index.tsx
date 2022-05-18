import { Typography } from "@mui/material";
import "./CategoriesSection.css";

type Props = {
  categories?: string[];
};

const CategoriesSection = ({ categories }: Props) => {
  return (
    <div className="categories-section">
      <Typography fontWeight={400} fontSize={14}>
        Categories
      </Typography>
      <Typography fontWeight={300} fontSize={14}>
        {categories}
      </Typography>
    </div>
  );
};

export default CategoriesSection;
