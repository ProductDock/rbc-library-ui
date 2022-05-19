import { Typography } from "@mui/material";
import "./CategoryItem.css";

type Props = {
  category: string;
};

const CategoryItem = ({ category }: Props) => {
  return (
    <div className="category-item">
      <Typography fontWeight={400} fontSize={14}>
        {category}
      </Typography>
    </div>
  );
};

export default CategoryItem;
