import { Typography } from "@mui/material";
import { useAuthContext } from "../../store/auth/AuthContext";
import "./LoginButton.css";

const LoginButton = () => {
  const { signIn } = useAuthContext();

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
