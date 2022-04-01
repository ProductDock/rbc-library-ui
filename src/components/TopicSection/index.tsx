import { Button } from "@mui/material";

const TopicSection = () => {
  return (
    <div className="topic-container">
      <div className="topi-text">
        <span>Find your favorites</span>
        <span>
          Filter books by listed topics to easily find titles in your area of
          interest
        </span>
      </div>
      <div className="topic-buttons">
        <Button variant="outlined">Software development</Button>
        <Button variant="outlined">Marketing</Button>
        <Button variant="outlined">Product Management</Button>
        <Button variant="outlined">Design</Button>
        <Button variant="outlined">Psychology</Button>
      </div>
    </div>
  );
};

export default TopicSection;
