/* eslint-disable no-unused-vars */
import { Typography } from "@mui/material";
import "./SearchSuggestion.css";

type SuggestionProps = {
  id?: number;
  title: string;
  author: string;
  notFound?: boolean;
  handleClick?: (id?: number) => void;
};

const SearchSuggestion = ({
  id,
  title,
  author,
  notFound,
  handleClick,
}: SuggestionProps) => {
  const handleElementClick = () => {
    if (!notFound) handleClick?.(id);
  };

  return !notFound ? (
    <div className="search-item" onClick={handleElementClick} key={id}>
      <Typography fontSize={14}>{title}</Typography>
      <Typography fontWeight={300} fontSize={12}>
        {author}
      </Typography>
    </div>
  ) : (
    <Typography fontWeight={300} fontSize={12}>
      Not found
    </Typography>
  );
};

export default SearchSuggestion;
