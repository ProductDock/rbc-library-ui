import "./AdminBooksPage.css";
import NavBar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import BooksContextProvider from "../../store/books/catalog/BooksContext";
import BooksTable from "./BooksTable";

const AdminBooksPage = () => {
  return (
    <div>
      <SideMenu />
      <NavBar showSearchBar={false} />

      <div className="main">
        <BooksContextProvider>
          <BooksTable />
        </BooksContextProvider>
      </div>
    </div>
  );
};

export default AdminBooksPage;
