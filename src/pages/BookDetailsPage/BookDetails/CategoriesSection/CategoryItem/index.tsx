import { Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../../../../../utils/stringUtil";
import "./CategoryItem.css";

type Props = {
  category: string;
};

const CategoryItem = ({ category }: Props) => {
  const lowerCaseCategory = category.toLowerCase();
  return (
    <div className="category-item">
      <Typography fontWeight={400} fontSize={14}>
        {capitalizeFirstLetter(lowerCaseCategory)}
      </Typography>
    </div>
  );
};

export default CategoryItem;
