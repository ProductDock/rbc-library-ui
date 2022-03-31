import "./LandingPage.css";
import { Typography } from "@mui/material";
import logo from "../img/pd-logo.svg";
import LoginButton from "../components/LoginButton";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="img-div">
        <img className="landing-img" src="images/landing-cover.png" alt="" />
      </div>
      <div className="content-div">
        <img src={logo} alt="logo" />

        <div className="landing-text">
          <div className="welcome-text">
            <Typography className="small-font">Welcome to</Typography>
            <Typography className="large-font">
              <b>ProductDock</b> Library
            </Typography>
          </div>

          <Typography className="small-font">
            Please use ProductDock Google account
          </Typography>
        </div>
        <LoginButton />
      </div>
    </div>
  );
};

export default LandingPage;
