import { Typography } from "@mui/material";
import { useBooksContext } from "../../store/books/BooksContext";
import TopicButton from "./TopicButton";
import "./TopicSection.css";

const TopicSection = () => {
  const { topics, setTopicFilter } = useBooksContext();
  const buttons = [
    {
      name: "SOFTWARE DEVELOPMENT",
    },
    {
      name: "PRODUCT MANAGEMENT",
    },
    {
      name: "MARKETING",
    },
    {
      name: "DESIGN",
    },
    {
      name: "PSYCHOLOGY",
    },
  ];

  const toggleButton = (topic: string) => {
    if (topics.includes(topic)) {
      setTopicFilter?.(topics.filter((item) => item !== topic));
    } else {
      setTopicFilter?.([...topics, topic]);
    }
  };

  const isSelected = (name: string) => topics.includes(name);

  return (
    <div className="topic-container">
      <div className="topic-text">
        <Typography className="bolded-text">
          <b>Find your favorites</b>
        </Typography>
        <Typography className="description-text">
          Filter books by listed topics to easily find titles in your area of
          interest
        </Typography>
      </div>
      <div className="topic-buttons">
        {buttons.map((button) => (
          <TopicButton
            key={button.name}
            name={button.name}
            data-testid={button.name}
            selected={isSelected(button.name)}
            handleClick={toggleButton}
          />
        ))}
      </div>
    </div>
  );
};

export default TopicSection;
