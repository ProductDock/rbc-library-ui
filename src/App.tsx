// eslint-disable-next-line object-curly-newline
import {
  Rating,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main-div">
      <img
        className="book-img"
        src="https://m.media-amazon.com/images/I/51eS3MxQ1YL.jpg"
        alt="book"
      />
      <p className="availability-text">
        <DoneIcon className="availability-icon" />
        Available
      </p>
      <Rating className="rating-stars" value={4} readOnly />
      <p className="title-text">
        Java Programming - beginner and intermediate fundamentals of object
        oriented programming
      </p>
      <p className="author-text">By (Author)&ensp;Scott Bernard</p>
      <Button
        type="submit"
        className="rent-button"
        color="success"
        variant="contained"
      >
        Rent book
      </Button>
      <Accordion>
        <AccordionSummary
          className="review-accordion-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <p className="review-accordion-div">
            <AccountBoxIcon />
            Vladimir Vukoman
          </p>
          <p className="review-accourdion-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque esse
            expedita cumque dolorem sit animi sunt perspiciatis quaerat. Magnam,
            possimus consequuntur.
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="review-box">
            <p className="review-box-info">
              <AccountBoxIcon />
              User1
            </p>
            <p className="review-box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              esse expedita cumque dolorem sit animi sunt perspiciatis quaerat.
              Magnam, possimus consequuntur.
            </p>
          </div>
        </AccordionDetails>
        <AccordionDetails>
          <div className="review-box">
            <p className="review-box-info">
              <AccountBoxIcon />
              User2
            </p>
            <p className="review-box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              esse expedita cumque dolorem sit animi sunt perspiciatis quaerat.
              Magnam, possimus consequuntur.
            </p>
          </div>
        </AccordionDetails>
        <AccordionDetails>
          <div className="review-box">
            <p className="review-box-info">
              <AccountBoxIcon />
              User3
            </p>
            <p className="review-box-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              esse expedita cumque dolorem sit animi sunt perspiciatis quaerat.
              Magnam, possimus consequuntur.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default App;
