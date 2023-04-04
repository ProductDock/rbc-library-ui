import { Typography } from "@mui/material";
import CategoryItem from "./CategoryItem";
import "./CategoriesSection.css";
import { Topic } from "../../../../store/books/details/Types";

type Props = {
  categories?: Topic[];
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
            <div key={category.id}>
              <CategoryItem category={category.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSection;
