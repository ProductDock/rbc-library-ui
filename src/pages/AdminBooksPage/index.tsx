import "./AdminBooksPage.css";
import { useMediaQuery } from "@mui/material";
import NavBar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import BooksContextProvider from "../../store/books/catalog/BooksContext";
import BooksTable from "./BooksTable";
import { MediaQueries } from "../../constants/mediaQueries";

const AdminBooksPage = () => {
  const isLargeScreen = useMediaQuery(MediaQueries.X_MEDIUM);

  return (
    <div>
      <SideMenu />
      <NavBar />

      <div className={isLargeScreen ? "main" : "main-mobile"}>
        <BooksContextProvider>
          <BooksTable />
        </BooksContextProvider>
      </div>
    </div>
  );
};

export default AdminBooksPage;
