import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { routes } from "../../constants/routes";
import { useAuthContext } from "../../store/auth/AuthContext";
import "./LoginButton.css";

const LoginButton = () => {
  const { isLoggedIn, signIn } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(routes.HOME);
    }
  }, [isLoggedIn]);

  return (
    <button onClick={signIn} className="login-button" type="button">
      <div className="button-container">
        <img src="icons/google.svg" alt="google login" className="icon" />

        <Typography>Sign in with Google</Typography>
      </div>
    </button>
  );
};

export default LoginButton;
