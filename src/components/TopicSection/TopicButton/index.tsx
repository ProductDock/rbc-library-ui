import { Button, Typography } from "@mui/material";
import { useBooksContext } from "../../../store/books/catalog/BooksContext";

type Props = {
  name: string;
  selected: boolean;
  handleClick: Function;
};

const TopicButton = ({ handleClick, name, selected, ...rest }: Props) => {
  const { loading } = useBooksContext();

  return (
    <Button
      disabled={loading}
      className={selected ? "selected-button" : "topic-button"}
      onClick={() => handleClick(name)}
      {...rest}
    >
      <Typography>{name}</Typography>
    </Button>
  );
};

export default TopicButton;
