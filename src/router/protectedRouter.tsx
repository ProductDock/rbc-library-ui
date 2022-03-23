import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuthContext } from "../store/auth/AuthContext";

const ProtectedRouter = () => {
  const navigate = useNavigate();
  const { signIn, userRedirect, loaded, isLoggedIn, redirected } = useAuthContext();

  const reload = () => navigate(0);
  const isNotAuthenticated = () => loaded && isLoggedIn === false;
  const isFirstTimeLoggedIn = () => redirected && isLoggedIn;

  useEffect(() => {
    if (isNotAuthenticated()) {
      signIn?.();
      userRedirect?.();
    }
    if (isFirstTimeLoggedIn()) reload();
  }, [redirected, isLoggedIn]);

  return isLoggedIn ? <Outlet /> : null;
};

export default ProtectedRouter;
