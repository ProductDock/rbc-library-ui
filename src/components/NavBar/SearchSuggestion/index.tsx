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
  ...props
}: SuggestionProps) => {
  const handleElementClick = () => {
    if (!notFound) handleClick?.(id);
  };

  return !notFound ? (
    <div
      {...props}
      className="search-item"
      onClick={handleElementClick}
      key={id}
    >
      <Typography fontSize={14}>{title}</Typography>
      <Typography fontWeight={300} fontSize={12}>
        {author}
      </Typography>
    </div>
  ) : (
    <div className="search-not-found">
      <Typography fontWeight={300} fontSize={12}>
        No books found
      </Typography>
    </div>
  );
};

export default SearchSuggestion;
