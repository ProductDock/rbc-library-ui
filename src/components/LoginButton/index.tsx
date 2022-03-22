import { useAuthContext } from "../../store/auth/AuthContext";
import "./loginButton.css";

// const clientId = "817921738258-jfbapkf5tsqmbgjrn672ua2udsuta7vt.apps.googleusercontent.com";

const LoginButton = () => {
  const { signIn } = useAuthContext();

  return (
    <button onClick={signIn} className="login-button" type="button">
      <img src="icons/google.svg" alt="google login" className="icon" />

      <span className="login-buttonText">Sign in </span>
    </button>
  );
};

export default LoginButton;
