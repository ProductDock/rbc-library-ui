import { Button, Typography } from "@mui/material";

type Props = {
  name: string;
  selected: boolean;
  handleClick: Function;
};

const TopicButton = ({ handleClick, name, selected, ...rest }: Props) => {
  return (
    <Button
      className={selected ? "selected-button" : "topic-button"}
      onClick={() => handleClick(name)}
      {...rest}
    >
      <Typography>{name}</Typography>
    </Button>
  );
};

export default TopicButton;
