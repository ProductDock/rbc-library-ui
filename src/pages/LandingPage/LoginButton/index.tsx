import { Typography } from "@mui/material";
import "./LoginButton.css";
import googleLogo from "../../../img/icons/google.svg";

const LoginButton = () => {
  const authUrl = process.env.REACT_APP_AUTH_URL;

  return (
    <a href={authUrl} className="login-button">
      <div className="button-container">
        <img src={googleLogo} alt="google login" className="icon" />

        <Typography>Sign in with Google</Typography>
      </div>
    </a>
  );
};

export default LoginButton;
