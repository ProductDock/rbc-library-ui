import { Typography } from "@mui/material";
import "./LoginButton.css";
import googleLogo from "../../../img/icons/google.svg";

const LoginButton = () => {
  // const authUrl = process.env.AUTH_URL;

  const authUrl = 'http://localhost:8080/oauth2/authorization/google';
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
