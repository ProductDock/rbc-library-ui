import "./LandingPage.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import logo from "../../img/pd-logo.svg";
import landingCover from "../../img/landing-cover.png";
import LoginButton from "./LoginButton";
import { useAuthContext } from "../../store/auth/AuthContext";
import { routes } from "../../constants/routes";

const LandingPage = () => {
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(routes.HOME);
    }
  }, [isLoggedIn]);

  return (
    <div className="landing-container">
      <div className="img-div">
        <img className="landing-img" src={landingCover} alt="" />
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
          <Typography className="small-font description">
            A place where you can find a book to read and help your colleagues
            to do the same
          </Typography>
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
