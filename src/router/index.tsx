import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import TestPage from "../pages/TestPage";

const PageRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<TestPage />} />
    </Routes>
  );
};

export default PageRouter;
