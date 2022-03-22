import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../store/auth/AuthContext";

const ProtectedRouter = () => {
  const { signIn, loaded, isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (loaded && isLoggedIn === false) {
      signIn?.();
    }
  }, [isLoggedIn]);

  return isLoggedIn ? <Outlet /> : null;
};

export default ProtectedRouter;
