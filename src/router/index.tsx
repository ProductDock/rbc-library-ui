import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { routes } from "../constants/routes";
import HomePage from "../pages/HomePage/HomePage";
import ProtectedRouter from "./ProtectedRouter";
import LandingPage from "../pages/LandingPage/LandingPage";
import BookDetailsPage from "../pages/BookDetailsPage/BookDetailsPage";

const PageRouter = () => {
return (
  <Routes>
    {/* <Route path={routes.HOME} element={<ProtectedRouter />}> */}
    <Route path={routes.HOME} element={<HomePage />} />
    {/* </Route> */}
    <Route path={routes.WELCOME} element={<LandingPage />} />
    <Route path={routes.BOOK_DETAILS} element={<ProtectedRouter />}>
      <Route path={routes.BOOK_DETAILS} element={<BookDetailsPage />} />
    </Route>
  </Routes>
  );
};

export default PageRouter;
