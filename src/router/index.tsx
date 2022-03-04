import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import HomePage from "../pages/HomePage";

const PageRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<HomePage />} />
    </Routes>
  );
};

export default PageRouter;
