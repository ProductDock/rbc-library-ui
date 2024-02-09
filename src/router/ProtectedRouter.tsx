import { Navigate, Outlet } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import { useAuthContext } from "../store/auth/AuthContext";
import { userRoles } from "../constants/userRoles";
import { routes } from "../constants/routes";

type Props = {
  allowedRole?: string;
};

const ProtectedRouter = ({ allowedRole = userRoles.ROLE_USER }: Props) => {
  const { isLoggedIn, isUserAdmin } = useAuthContext();

  if (!isLoggedIn) return <LandingPage />;

  if (allowedRole === userRoles.ROLE_ADMIN && !isUserAdmin?.()) {
    return <Navigate to={routes.HOME} />;
  }

  return <Outlet />;
};

export default ProtectedRouter;
