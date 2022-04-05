import { Outlet } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { useAuthContext } from "../store/auth/AuthContext";

const ProtectedRouter = () => {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? <Outlet /> : <LandingPage />;
};

export default ProtectedRouter;
