import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import HomePage from "../pages/HomePage";
import { useAuthContext } from "../store/auth/AuthContext";
import ProtectedRouter from "./protectedRouter";

const PageRouter = () => {
  const { loaded } = useAuthContext();

  if (!loaded) {
    return null;
  }
  return (
    <Routes>
      <Route path={routes.HOME} element={<ProtectedRouter />}>
        <Route path={routes.HOME} element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
