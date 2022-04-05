/* eslint-disable no-unused-vars */
import { Button, Typography } from "@material-ui/core";

type Props = {
  name: string;
  selected: boolean;
  handleClick: (topic: string) => void;
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
