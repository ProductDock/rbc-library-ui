import { Routes } from "react-router-dom";
import { Navigate, Route } from "react-router";
import { routes } from "../constants/routes";
import HomePage from "../pages/HomePage/HomePage";
import BookDetailsPage from "../pages/BookDetailsPage/BookDetailsPage";

const PageRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<HomePage />} />
      <Route path={routes.WELCOME} element={<Navigate to={routes.HOME} />} />
      <Route path={routes.BOOK_DETAILS} element={<BookDetailsPage />} />
    </Routes>
  );
};

export default PageRouter;
