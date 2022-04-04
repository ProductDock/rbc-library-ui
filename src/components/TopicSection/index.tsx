import { Typography } from "@mui/material";
import { useState } from "react";
import TopicButton from "./TopicButton";
import "./TopicSection.css";

const TopicSection = () => {
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
  const [topics, setTopics] = useState<string[]>([]);

  const toggleButton = (topic: string) => {
    if (topics.includes(topic)) {
      setTopics(topics.filter((item) => item !== topic));
    } else {
      setTopics([...topics, topic]);
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
        {buttons.map((button) => {
          return (
            <TopicButton
              key={button.name}
              name={button.name}
              data-testid={button.name}
              selected={isSelected(button.name)}
              handleClick={toggleButton}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopicSection;
