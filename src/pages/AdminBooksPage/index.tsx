import "./AdminBooksPage.css";
import { useMediaQuery } from "@mui/material";
import SideMenu from "../../components/SideMenu";
import BooksContextProvider from "../../store/books/catalog/BooksContext";
import BooksTable from "./BooksTable";
import { MediaQueries } from "../../constants/mediaQueries";
import AdminNavBar from "../../components/AdminNavBar";

const AdminBooksPage = () => {
  const isLargeScreen = useMediaQuery(MediaQueries.X_MEDIUM);

  return (
    <div>
      <SideMenu />
      <AdminNavBar />
      <div className={isLargeScreen ? "main" : "main-mobile"}>
        <BooksContextProvider>
          <BooksTable />
        </BooksContextProvider>
      </div>
    </div>
  );
};

export default AdminBooksPage;
