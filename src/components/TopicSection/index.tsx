import { Button, Typography } from "@mui/material";
import "./TopicSection.css";

const TopicSection = () => {
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
        <Button className="topic-button">
          <Typography>SOFTWARE DEVELOPMENT</Typography>
        </Button>
        <Button className="topic-button" variant="outlined">
          <Typography>PRODUCT MANAGEMENT</Typography>
        </Button>
        <Button className="topic-button" variant="outlined">
          <Typography>MARKETING</Typography>
        </Button>
        <Button className="topic-button" variant="outlined">
          <Typography>DESIGN</Typography>
        </Button>
        <Button className="topic-button" variant="outlined">
          <Typography>PSYCHOLOGY</Typography>
        </Button>
      </div>
    </div>
  );
};

export default TopicSection;
