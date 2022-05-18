import { Typography } from "@mui/material";
import CategoryItem from "../CategoryItem";
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
      <div className="categories-list">
        {categories?.map((category) => {
          return (
            <div key={category}>
              <CategoryItem category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSection;
