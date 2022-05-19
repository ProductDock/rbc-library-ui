/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback } from "react";
import { Typography, Link } from "@mui/material";
import { useBooksContext } from "../../../store/books/catalog/BooksContext";
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

  const toggleButton = useCallback(
    (topic: string) => {
      if (topics.includes(topic)) {
        setTopicFilter?.(topics.filter((item) => item !== topic));
      } else {
        setTopicFilter?.([...topics, topic]);
      }
    },
    [topics]
  );

  const clearAllTopics = () => setTopicFilter?.([]);

  const isSelected = useCallback(
    (name: string) => topics.includes(name),
    [topics]
  );

  return (
    <div className="topic-container">
      <div className="inner-topic-container">
        <Typography className="side-text">Categories</Typography>
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
        {topics.length > 0 && (
          <Link
            className="clear-all-button side-text"
            underline="none"
            onClick={clearAllTopics}
            data-testid="clear-all-button"
          >
            Clear all
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopicSection;
