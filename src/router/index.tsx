import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import ExamplePage from "../pages/ExamplePage";
import HomePage from "../pages/HomePage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import ProtectedRouter from "./protectedRouter";

const PageRouter = () => {
  // const { initialized } = useKeycloak();

  // if (!initialized) {
  //   return null;
  // }
  return (
    <Routes>
      <Route path={routes.HOME} element={<ProtectedRouter />}>
        <Route path={routes.HOME} element={<HomePage />} />
      </Route>

      <Route path={routes.EXMPL} element={<ProtectedRouter />}>
        <Route path={routes.EXMPL} element={<ExamplePage />} />
      </Route>
      <Route path={routes.UNAUTHORIZED} element={<UnauthorizedPage />} />
    </Routes>
  );
};

export default PageRouter;
