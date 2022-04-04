import { Button, Typography } from "@mui/material";
import { useState } from "react";
import "./TopicSection.css";

const TopicSection = () => {
  const [topics, setTopics] = useState<string[]>([]);

  const toggleButton = (topic: string) => {
    if (topics.includes(topic)) {
      setTopics(topics.filter((item) => item !== topic));
    } else {
      setTopics([...topics, topic]);
    }
  };

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
        <Button
          className={
            topics.includes("software_development")
              ? "selected-button"
              : "topic-button"
          }
          onClick={() => toggleButton("software_development")}
        >
          <Typography>SOFTWARE DEVELOPMENT</Typography>
        </Button>
        <Button
          className={
            topics.includes("product_management")
              ? "selected-button"
              : "topic-button"
          }
          onClick={() => toggleButton("product_management")}
        >
          <Typography>PRODUCT MANAGEMENT</Typography>
        </Button>
        <Button
          className={
            topics.includes("marketing") ? "selected-button" : "topic-button"
          }
          onClick={() => toggleButton("marketing")}
        >
          <Typography>MARKETING</Typography>
        </Button>
        <Button
          className={
            topics.includes("design") ? "selected-button" : "topic-button"
          }
          onClick={() => toggleButton("design")}
        >
          <Typography>DESIGN</Typography>
        </Button>
        <Button
          className={
            topics.includes("psychology") ? "selected-button" : "topic-button"
          }
          onClick={() => toggleButton("psychology")}
        >
          <Typography>PSYCHOLOGY</Typography>
        </Button>
      </div>
    </div>
  );
};

export default TopicSection;
